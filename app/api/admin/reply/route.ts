import { requireAdminSession, unauthorizedResponse } from "@/lib/admin-auth";
import { createServiceSupabase } from "@/lib/supabase";
import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function POST(request: Request) {
  const session = await requireAdminSession();
  if (!session) return unauthorizedResponse();

  const body = await request.json();
  const submissionId = body.submissionId as string | undefined;
  const replyBody = body.body as string | undefined;

  if (!submissionId?.trim() || !replyBody?.trim()) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const supabase = createServiceSupabase();
  if (!supabase) {
    return NextResponse.json({ error: "Database unavailable" }, { status: 503 });
  }

  const { data: submission, error: fetchError } = await supabase
    .from("contact_submissions")
    .select("*")
    .eq("id", submissionId)
    .single();

  if (fetchError || !submission) {
    return NextResponse.json({ error: "Submission not found" }, { status: 404 });
  }

  if (!resend) {
    return NextResponse.json({ error: "Email unavailable" }, { status: 503 });
  }

  const subject =
    submission.subject?.trim() || "Your message to The Aisle App";

  const sendResult = await resend.emails.send({
    from: "The Aisle App <hello@theaisleapp.com>",
    to: submission.email,
    replyTo: "hello@theaisleapp.com",
    subject: `Re: ${subject}`,
    text: replyBody.trim(),
  });

  const messageId = sendResult.data?.id ?? null;
  const sentBy = session.user?.email ?? "admin";

  const { error: replyError } = await supabase.from("replies").insert({
    submission_id: submissionId,
    sent_by: sentBy,
    body: replyBody.trim(),
    resend_message_id: messageId,
  });

  if (replyError) {
    console.error("[admin/reply] insert failed", replyError.message);
    return NextResponse.json({ error: "Failed to save reply" }, { status: 500 });
  }

  await supabase
    .from("contact_submissions")
    .update({
      status: "replied",
      replied_at: new Date().toISOString(),
    })
    .eq("id", submissionId);

  return NextResponse.json({ ok: true });
}
