import { requireAdminSession, unauthorizedResponse } from "@/lib/admin-auth";
import { createServiceSupabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const session = await requireAdminSession();
  if (!session) return unauthorizedResponse();

  const body = await request.json();
  const id = body.id as string | undefined;
  const quote = body.quote as string | undefined;
  const author_name = body.author_name as string | undefined;
  const author_role = body.author_role as string | undefined;
  const author_photo_url = body.author_photo_url as string | undefined;

  if (!id?.trim() || !quote?.trim() || !author_name?.trim()) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const supabase = createServiceSupabase();
  if (!supabase) {
    return NextResponse.json({ error: "Database unavailable" }, { status: 503 });
  }

  const { error } = await supabase
    .from("testimonials")
    .update({
      quote: quote.trim(),
      author_name: author_name.trim(),
      author_role: author_role?.trim() || null,
      author_photo_url: author_photo_url?.trim() || null,
      updated_at: new Date().toISOString(),
      updated_by: session.user?.email ?? null,
    })
    .eq("id", id);

  if (error) {
    console.error("[admin/testimonials] update failed", error.message);
    return NextResponse.json({ error: "Update failed" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
