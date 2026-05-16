import { FEATURES } from "./features";

export type FeatureDetail = {
  id: string;
  scenarios: string[];
  extraImages?: { src: string; alt: string }[];
};

export const FEATURE_DETAILS: Record<string, FeatureDetail> = {
  guests: {
    id: "guests",
    scenarios: [
      "Tracking who attends the civil ceremony versus the traditional celebration.",
      "Seating cousins from abroad at the reception without losing dietary notes.",
      "Sending RSVP reminders only to guests who have not replied.",
    ],
  },
  ceremonies: {
    id: "ceremonies",
    scenarios: [
      "Giving each ceremony its own guest list without duplicating work.",
      "Holding dietary and seating notes separately for religious and reception events.",
      "Keeping traditions and timelines distinct while still under one wedding home.",
    ],
  },
  committee: {
    id: "committee",
    scenarios: [
      "Publishing meeting minutes within an hour of the committee adjourning.",
      "Tracking pledges and fines from weekly committee gatherings.",
      "Sharing a read-only link with elders who prefer not to use an account.",
    ],
  },
  registry: {
    id: "registry",
    scenarios: [
      "Listing cash funds alongside physical gifts for guests who prefer either.",
      "Showing family in another country how to send via their preferred payment method.",
      "Thanking everyone who pledged before the wedding weekend.",
    ],
  },
  budget: {
    id: "budget",
    scenarios: [
      "Leaving line items as TBC until quotes arrive from vendors.",
      "Tracking spend in multiple currencies within one wedding home.",
      "Moving estimates to firm quotes to final spend as decisions firm up.",
    ],
  },
  stationery: {
    id: "stationery",
    scenarios: [
      "Uploading designs from your favourite tool and sending boutique emails in one step.",
      "Sharing invitation links by text for guests who prefer WhatsApp.",
      "Matching every outbound email to your wedding suite colours.",
    ],
  },
  timeline: {
    id: "timeline",
    scenarios: [
      "Sharing a run sheet with vendors and the bridal party the week before.",
      "Printing a day-of timeline for parents and coordinators.",
      "Flagging moments that cannot slip without rewriting the whole plan.",
    ],
  },
  moments: {
    id: "moments",
    scenarios: [
      "Looking back at the first vendor booked months later.",
      "Noticing when the last RSVP landed without refreshing a spreadsheet.",
      "Keeping a quiet record of milestones through a long engagement.",
    ],
  },
};

export function getFeatureWithDetails() {
  return FEATURES.map((f) => ({
    ...f,
    scenarios: FEATURE_DETAILS[f.id]?.scenarios ?? [],
    extraImages: FEATURE_DETAILS[f.id]?.extraImages,
  }));
}

function isValidImageSrc(src: string | undefined): boolean {
  if (!src?.trim()) return false;
  return src.startsWith("http") || src.startsWith("/");
}

export function getFeatureImages(feature: {
  image?: { src: string; alt: string };
  extraImages?: { src: string; alt: string }[];
}) {
  const hero = feature.image && isValidImageSrc(feature.image.src) ? feature.image : null;
  const extras =
    feature.extraImages?.filter((img) => isValidImageSrc(img.src)) ?? [];
  return { hero, extras };
}
