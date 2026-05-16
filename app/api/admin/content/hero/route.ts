import { requireAdminSession, unauthorizedResponse } from "@/lib/admin-auth";
import { createServiceSupabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const session = await requireAdminSession();
  if (!session) return unauthorizedResponse();

  const body = await request.json();
  const headline = body.headline as string | undefined;
  const subhead = body.subhead as string | undefined;
  const image_url = body.image_url as string | undefined;

  if (!headline?.trim() || !subhead?.trim() || !image_url?.trim()) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const supabase = createServiceSupabase();
  if (!supabase) {
    return NextResponse.json({ error: "Database unavailable" }, { status: 503 });
  }

  const { error } = await supabase
    .from("hero_content")
    .update({
      headline: headline.trim(),
      subhead: subhead.trim(),
      image_url: image_url.trim(),
      updated_at: new Date().toISOString(),
      updated_by: session.user?.email ?? null,
    })
    .eq("id", 1);

  if (error) {
    console.error("[admin/hero] update failed", error.message);
    return NextResponse.json({ error: "Update failed" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
