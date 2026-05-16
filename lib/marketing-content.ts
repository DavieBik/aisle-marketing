import {
  createPublicSupabase,
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
      "It held our wedding the way a good friend would. Quietly, completely, without drama.",
    author_name: "Amelia and Jonah",
    author_role: "Married Dec 2026",
    author_photo_url: null,
    updated_at: new Date().toISOString(),
    updated_by: null,
  },
  {
    id: "fallback-2",
    display_order: 2,
    quote:
      "My mother could finally help without us losing track of what she said yes to. That alone was worth it.",
    author_name: "Priya and Daniel",
    author_role: "Married Feb 2027",
    author_photo_url: null,
    updated_at: new Date().toISOString(),
    updated_by: null,
  },
  {
    id: "fallback-3",
    display_order: 3,
    quote:
      "We had family on three continents and an app that somehow made it feel small. We kept everything, even the thank-you notes.",
    author_name: "Sofia and Marco",
    author_role: "Married May 2027",
    author_photo_url: null,
    updated_at: new Date().toISOString(),
    updated_by: null,
  },
];

export async function getHeroContent(): Promise<HeroContent> {
  const supabase = createPublicSupabase();
  if (!supabase) return FALLBACK_HERO;

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
  const supabase = createPublicSupabase();
  if (!supabase) return FALLBACK_TESTIMONIALS;

  const { data, error } = await supabase
    .from("testimonials")
    .select("*")
    .order("display_order", { ascending: true });

  if (error || !data?.length) {
    console.error("[marketing-content] testimonials fetch failed", error?.message);
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
