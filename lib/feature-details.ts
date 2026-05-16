import { FEATURES } from "./features";

export type FeatureDetail = {
  id: string;
  scenarios: string[];
  extraImages: { src: string; alt: string }[];
};

export const FEATURE_DETAILS: Record<string, FeatureDetail> = {
  guests: {
    id: "guests",
    scenarios: [
      "Tracking who attends the civil ceremony versus the traditional celebration.",
      "Seating cousins from abroad at the reception without losing dietary notes.",
      "Sending RSVP reminders only to guests who have not replied.",
    ],
    extraImages: [
      {
        src: "https://images.pexels.com/photos/265856/pexels-photo-265856.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt: "Calligraphy on wedding stationery",
      },
    ],
  },
  registry: {
    id: "registry",
    scenarios: [
      "Listing cash funds alongside physical gifts for guests who prefer either.",
      "Showing family in another country how to send via their preferred payment method.",
      "Thanking everyone who pledged before the wedding weekend.",
    ],
    extraImages: [
      {
        src: "https://images.pexels.com/photos/169190/pexels-photo-169190.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt: "Wrapped gift on linen tablecloth",
      },
    ],
  },
  committee: {
    id: "committee",
    scenarios: [
      "Publishing meeting minutes within an hour of the committee adjourning.",
      "Tracking pledges and fines from weekly committee gatherings.",
      "Sharing a read-only link with elders who prefer not to use an account.",
    ],
    extraImages: [
      {
        src: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt: "Coffee and notebook after a meeting",
      },
    ],
  },
  events: {
    id: "events",
    scenarios: [
      "Hiding a surprise bridal shower from your partner until the day.",
      "Giving your host access to just one pre-wedding event.",
      "Keeping photographs and guest lists for each milestone in one place.",
    ],
    extraImages: [
      {
        src: "https://images.pexels.com/photos/1024991/pexels-photo-1024991.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt: "Bridal shower invitation flat lay",
      },
    ],
  },
  stationery: {
    id: "stationery",
    scenarios: [
      "Uploading a Canva save-the-date and sending boutique emails in one step.",
      "Sharing invitation links by text for guests who prefer WhatsApp.",
      "Matching every outbound email to your wedding suite colours.",
    ],
    extraImages: [
      {
        src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80",
        alt: "Invitation with eucalyptus on cream paper",
      },
    ],
  },
  collaborators: {
    id: "collaborators",
    scenarios: [
      "Letting your treasurer see committee finances but not personal notes.",
      "Inviting your florist to view vendor timelines without guest contact details.",
      "Giving your maid of honour access only to the events she is hosting.",
    ],
    extraImages: [
      {
        src: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt: "Friends collaborating over coffee",
      },
    ],
  },
  emails: {
    id: "emails",
    scenarios: [
      "Sending RSVP confirmations that match your invitation design.",
      "Reminding guests gently without sounding like a bulk mailing.",
      "Thanking committee members with notes dressed in your wedding colours.",
    ],
    extraImages: [
      {
        src: "https://images.pexels.com/photos/5717412/pexels-photo-5717412.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt: "Phone beside flowers on a morning table",
      },
    ],
  },
  budget: {
    id: "budget",
    scenarios: [
      "Leaving line items as TBC until quotes arrive from vendors.",
      "Tracking spend in UGX, USD, and GBP within one wedding home.",
      "Moving estimates to firm quotes to final spend as decisions firm up.",
    ],
    extraImages: [
      {
        src: "https://images.pexels.com/photos/669996/pexels-photo-669996.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt: "Handwritten budget in a notebook",
      },
    ],
  },
};

export function getFeatureWithDetails() {
  return FEATURES.map((f) => ({
    ...f,
    ...FEATURE_DETAILS[f.id],
  }));
}
