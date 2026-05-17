import {
  createPublicSupabase,
  createServiceSupabase,
  type HeroContent,
  type Testimonial,
} from "@/lib/supabase";

export const FALLBACK_HERO: HeroContent = {
  id: 1,
  headline: "Your wedding's beautiful home.",
  subhead:
    "A boutique home for every guest, gift, ceremony, and quiet moment of your wedding. From engagement to thank-you cards, in one beautifully designed place.",
  image_url: "/images/hero-rings.jpg",
  updated_at: new Date().toISOString(),
  updated_by: null,
};

export const FALLBACK_TESTIMONIALS: Testimonial[] = [
  {
    id: "fallback-1",
    display_order: 1,
    quote:
      "It's holding our wedding the way a good friend would. Quietly, completely, without drama.",
    author_name: "Amelia and Jonah",
    author_role: null,
    author_photo_url: null,
    updated_at: new Date().toISOString(),
    updated_by: null,
  },
  {
    id: "fallback-2",
    display_order: 2,
    quote: "I stopped having seven group chats. That alone is worth it.",
    author_name: "Maya and Joseph",
    author_role: null,
    author_photo_url: null,
    updated_at: new Date().toISOString(),
    updated_by: null,
  },
  {
    id: "fallback-3",
    display_order: 3,
    quote:
      "My grandmother is on the committee from a different time zone and somehow it just works.",
    author_name: "Lily and Sam",
    author_role: "Planning for December 2026",
    author_photo_url: null,
    updated_at: new Date().toISOString(),
    updated_by: null,
  },
  {
    id: "fallback-4",
    display_order: 4,
    quote:
      "My mother could finally help without us losing track of what she said yes to. And we just love the Registry!",
    author_name: "Hannah and Oliver",
    author_role: "Planning for February 2027",
    author_photo_url: null,
    updated_at: new Date().toISOString(),
    updated_by: null,
  },
  {
    id: "fallback-5",
    display_order: 5,
    quote:
      "We didn't realise how many spreadsheets we'd accumulated until they all became one calm thing.",
    author_name: "Sofia and Marco",
    author_role: "Planning for May 2027",
    author_photo_url: null,
    updated_at: new Date().toISOString(),
    updated_by: null,
  },
  {
    id: "fallback-6",
    display_order: 6,
    quote:
      "One couple has found me through the directory so far. They walked in already knowing my work. Looking forward to many more from The Aisle App.",
    author_name: "Marcus",
    author_role: "Wedding photographer",
    author_photo_url: null,
    updated_at: new Date().toISOString(),
    updated_by: null,
  },
];

export async function getHeroContent(): Promise<HeroContent> {
  const supabase = createPublicSupabase();
  if (!supabase) {
    console.error(
      "[marketing-content] hero fetch skipped: Supabase client not configured"
    );
    return FALLBACK_HERO;
  }

  const { data, error } = await supabase
    .from("hero_content")
    .select("*")
    .eq("id", 1)
    .maybeSingle();

  if (error || !data) {
    console.error("[marketing-content] hero fetch failed", error?.message);
    return FALLBACK_HERO;
  }

  return data as HeroContent;
}

export async function getTestimonials(): Promise<Testimonial[]> {
  const supabase = createServiceSupabase();
  if (!supabase) {
    console.error(
      "[marketing-content] testimonials fetch skipped: service role client not configured (check NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY)"
    );
    return FALLBACK_TESTIMONIALS;
  }

  const { data, error } = await supabase
    .from("testimonials")
    .select("*")
    .order("display_order", { ascending: true });

  if (error) {
    console.error(
      "[marketing-content] testimonials fetch failed",
      error.message,
      error
    );
    return FALLBACK_TESTIMONIALS;
  }

  if (!data?.length) {
    console.error(
      "[marketing-content] testimonials fetch returned empty — using fallback data"
    );
    return FALLBACK_TESTIMONIALS;
  }

  return data as Testimonial[];
}

export function isPlaceholderTestimonial(t: Testimonial): boolean {
  return (
    t.id.startsWith("fallback-") ||
    FALLBACK_TESTIMONIALS.some((f) => f.quote === t.quote)
  );
}
