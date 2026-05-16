import { createClient } from "@supabase/supabase-js";

export type ContactSubmission = {
  id: string;
  created_at: string;
  name: string;
  email: string;
  subject: string | null;
  message: string;
  status: "unread" | "read" | "replied" | "archived";
  read_at: string | null;
  replied_at: string | null;
};

export type Reply = {
  id: string;
  submission_id: string;
  created_at: string;
  sent_by: string;
  body: string;
  resend_message_id: string | null;
};

export type Testimonial = {
  id: string;
  display_order: number;
  quote: string;
  author_name: string;
  author_role: string | null;
  author_photo_url: string | null;
  updated_at: string;
  updated_by: string | null;
};

export type HeroContent = {
  id: number;
  headline: string;
  subhead: string;
  image_url: string;
  updated_at: string;
  updated_by: string | null;
};

function getSupabaseUrl() {
  return process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
}

function getServiceKey() {
  return process.env.SUPABASE_SERVICE_ROLE_KEY ?? "";
}

export function createServiceSupabase() {
  const url = getSupabaseUrl();
  const key = getServiceKey();
  if (!url || !key) return null;
  return createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

export function createPublicSupabase() {
  const url = getSupabaseUrl();
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";
  if (!url || !key) return null;
  return createClient(url, key);
}
