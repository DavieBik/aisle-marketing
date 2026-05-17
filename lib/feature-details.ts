import { FEATURES } from "./features";

export type FeatureDetail = {
  id: string;
  howItWorks: string[];
  scenarioCallout: string;
  extraImages?: { src: string; alt: string }[];
};

export const FEATURE_DETAILS: Record<string, FeatureDetail> = {
  guests: {
    id: "guests",
    howItWorks: [
      "One master guest list with profiles for every person invited.",
      "Separate RSVP and attendance lists per ceremony, reception, or after-party.",
      "Dietary notes, plus-ones, children, and travel details attached to each guest.",
      "Reminders sent only to guests who have not replied yet.",
    ],
    scenarioCallout:
      "Priya's civil ceremony is on Saturday and the traditional celebration is Sunday. Half her guests attend both; some attend only one. She tracks who is where without three spreadsheets and a group chat that never stops buzzing.",
  },
  committee: {
    id: "committee",
    howItWorks: [
      "Schedule committee meetings and capture minutes in one shared record.",
      "Track pledges, fines, and auctions with a clear running balance.",
      "Distribute notes to attendees by email or a shareable link after each meeting.",
      "Give elders read-only access when they prefer not to create an account.",
    ],
    scenarioCallout:
      "Carol's mother chairs the wedding committee. Every Tuesday meeting now ends in a shared note instead of a dozen separate WhatsApps. Everyone knows what was decided before they leave the table.",
  },
  ceremonies: {
    id: "ceremonies",
    howItWorks: [
      "Create a separate ceremony for civil, religious, traditional, or reception events.",
      "Give each ceremony its own guest list, seating, and dietary requirements.",
      "Hold traditions and timelines for each event without duplicating your whole wedding.",
      "See every ceremony in one home while keeping each one distinct.",
    ],
    scenarioCallout:
      "Amir and Noor have a nikah, a civil signing, and a reception three weeks apart. Each event has its own guest list and run sheet, but they never rebuild the same details twice.",
  },
  registry: {
    id: "registry",
    howItWorks: [
      "List physical gifts and cash funds side by side in one registry.",
      "Let guests pay you directly via the methods your families already use.",
      "See who pledged what so thank-yous are never guesswork.",
      "The Aisle App never holds guest money — gifts go straight to you.",
    ],
    scenarioCallout:
      "Hannah's aunt in London prefers bank transfer; her cousins in Nairobi use mobile money. Guests choose what works for them, and Hannah sees every pledge in one place before the wedding weekend.",
  },
  budget: {
    id: "budget",
    howItWorks: [
      "Track line items from rough estimate to firm quote to final spend.",
      "Enter amounts in any currency, including TBC while you are still deciding.",
      "Record committee pledges alongside vendor invoices in one view.",
      "Update figures as quotes arrive without rebuilding the whole sheet.",
    ],
    scenarioCallout:
      "Sofia's venue quote landed in euros, the caterer quoted in dollars, and the committee collects in local currency. She sees the full picture without converting tabs in a spreadsheet at midnight.",
  },
  stationery: {
    id: "stationery",
    howItWorks: [
      "Upload invitations, save-the-dates, and signage from any design tool.",
      "Send boutique emails dressed in your wedding's visual language.",
      "Share invitation links by text for guests who prefer WhatsApp.",
      "Keep every printed and digital touch feeling like one suite.",
    ],
    scenarioCallout:
      "Lily designed her invitations in Canva and her cousin designed the menus in Figma. Both upload to The Aisle App, and every email their guests receive looks like it came from the same wedding.",
  },
  timeline: {
    id: "timeline",
    howItWorks: [
      "Build a run sheet with who arrives when and who is responsible for what.",
      "Flag moments that cannot slip without rewriting the whole day.",
      "Share the timeline with vendors, the bridal party, and parents.",
      "Print a clean day-of version for coordinators on the ground.",
    ],
    scenarioCallout:
      "On the morning of the wedding, Marcus's coordinator opens one timeline on her phone. The florist, the MC, and the bridal party are all working from the same hour-by-hour plan.",
  },
  moments: {
    id: "moments",
    howItWorks: [
      "Record milestones quietly as your engagement unfolds.",
      "Notice when the first vendor is booked or the last RSVP arrives.",
      "Look back at the small wins that made the year feel real.",
      "Keep a timeline of moments without maintaining a separate journal.",
    ],
    scenarioCallout:
      "Jonah did not realise how many small wins they had until The Aisle App showed the first deposit paid, the hundredth day to go, and the last RSVP in — all in one calm record of their year.",
  },
};

export function getFeatureWithDetails() {
  return FEATURES.map((f) => ({
    ...f,
    howItWorks: FEATURE_DETAILS[f.id]?.howItWorks ?? [],
    scenarioCallout: FEATURE_DETAILS[f.id]?.scenarioCallout ?? "",
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
