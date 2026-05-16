export type Feature = {
  id: string;
  eyebrow: string;
  heading: string;
  body: string;
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  imageTodo?: string;
};

export const FEATURES: Feature[] = [
  {
    id: "guests",
    eyebrow: "GUESTS",
    heading: "Every guest. Every ceremony. Held with care.",
    body: "Track your guests across every part of your wedding. Civil, religious, traditional, reception, after-party. Each ceremony has its own RSVP list, its own seating chart, its own dietary notes. Plus-ones counted. Children counted. The mother-in-law's cousin who's flying in from across the world counted.",
    image: {
      src: "https://images.pexels.com/photos/265856/pexels-photo-265856.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Hand-addressed wedding invitation with calligraphy on cream paper",
      width: 1200,
      height: 800,
    },
    imageTodo: "guestbook open with fountain pen, soft morning light",
  },
  {
    id: "ceremonies",
    eyebrow: "CEREMONIES",
    heading: "Every ceremony, its own world.",
    body: "Some weddings are one event. Others are five. Each ceremony in The Aisle App holds its own guest list, seating, dietary notes, timeline, and traditions. Bring all of them under one roof without making any of them smaller.",
    image: {
      src: "https://images.pexels.com/photos/1024991/pexels-photo-1024991.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Wedding ceremony with candles and warm natural light",
      width: 1200,
      height: 800,
    },
  },
  {
    id: "committee",
    eyebrow: "COMMITTEES",
    heading: "For weddings that take a village to plan.",
    body: "Run committee meetings without the chaos. Capture the minutes. Track the pledges, the fines, the auctions. Distribute meeting notes to attendees by email or shareable link. For weddings where planning is a community effort, not a solo project.",
    image: {
      src: "https://images.pexels.com/photos/4262179/pexels-photo-4262179.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Family and friends gathered around a dining table planning together in warm light",
      width: 1200,
      height: 800,
    },
  },
  {
    id: "registry",
    eyebrow: "REGISTRY",
    heading: "A registry built for the way gifts actually happen.",
    body: "Physical gifts and cash funds, side by side. Set the payment methods you want, from bank transfer to mobile money to PayPal, however your families prefer to send love. The Aisle App never handles the money. Your guests pay you directly. You see who pledged what so you know who to thank.",
    image: {
      src: "https://images.pexels.com/photos/169190/pexels-photo-169190.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Beautifully wrapped wedding gift on a textured table",
      width: 1200,
      height: 800,
    },
  },
  {
    id: "budget",
    eyebrow: "BUDGET",
    heading:
      'TBC is a valid amount. So is any currency, any figure, any "still figuring it out".',
    body: "Track every dollar and every pledge in whatever currency, whatever phase. From rough estimates to firm quotes to final spend. Free-text amounts that work the way real wedding budgets actually unfold.",
    image: {
      src: "https://images.pexels.com/photos/669996/pexels-photo-669996.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Notebook with handwritten budget figures and vintage pen",
      width: 1200,
      height: 800,
    },
  },
  {
    id: "stationery",
    eyebrow: "STATIONERY",
    heading: "Designed by you. Delivered with grace.",
    body: "Design your invitations and signage your way. Canva, Figma, your designer, your sister's iPad — whatever you bring, we hold it. Upload to The Aisle App, give every email and printed touch a single visual voice, share with your guests as one beautiful set.",
    image: {
      src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&q=80",
      alt: "Wedding invitation styled on a textured table with eucalyptus",
      width: 1200,
      height: 800,
    },
  },
  {
    id: "timeline",
    eyebrow: "TIMELINE",
    heading: "The day, held by the hour.",
    body: "A run sheet that knows who arrives when, who's responsible for what, and which moments cannot slip. Share it with vendors, the bridal party, parents. Print it for the day. The wedding holds itself.",
    image: {
      src: "https://images.pexels.com/photos/5717412/pexels-photo-5717412.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Wedding day schedule and clock in warm morning light",
      width: 1200,
      height: 800,
    },
  },
  {
    id: "moments",
    eyebrow: "MOMENTS",
    heading: "Your wedding remembers itself.",
    body: "The first vendor booked. The hundredth day to go. The last RSVP in. The Aisle App quietly notices and keeps a record of every small milestone that makes the year of getting married feel real.",
    image: {
      src: "https://images.pexels.com/photos/669996/pexels-photo-669996.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Wedding journal with handwritten notes in warm light",
      width: 1200,
      height: 800,
    },
  },
];

export { MARKETING_FAQ as HOME_FAQ } from "./faq-content";

export const TESTIMONIALS = [
  {
    quote:
      "We have three ceremonies, four committees, and 312 guests across two countries. The Aisle App is the first time it feels manageable.",
    attribution: "Arianna and Sam, December 2026",
    initials: "AS",
  },
  {
    quote:
      "I sent my maid of honour proposal through The Aisle App. She cried, then she said yes. It set the tone for the whole bridal party.",
    attribution: "Adelaine, bridesmaid",
    initials: "A",
  },
  {
    quote:
      "Our committee was running on WhatsApp chaos. Now everyone has the meeting minutes within an hour.",
    attribution: "Wedding committee secretary",
    initials: "W",
  },
] as const;
