export type FaqCategory = {
  name: string;
  items: { question: string; answer: string }[];
};

export const FAQ_CATEGORIES: FaqCategory[] = [
  {
    name: "Getting started",
    items: [
      {
        question: "How do I create a wedding home?",
        answer:
          "Visit app.theaisleapp.com, sign up free, and follow the gentle setup. No credit card required.",
      },
      {
        question: "Can my partner and I share an account?",
        answer:
          "Yes. You and your partner share one wedding home with the access you choose for each other.",
      },
      {
        question: "How long does setup take?",
        answer:
          "Most couples have their basics in place within an afternoon. You can grow your home over months.",
      },
      {
        question: "Do I need to download anything?",
        answer:
          "No. The Aisle App runs in your browser on phone, tablet, or computer.",
      },
    ],
  },
  {
    name: "Pricing",
    items: [
      {
        question: "Is The Aisle App free?",
        answer:
          "Yes during launch. The core wedding home is free to start, with no credit card required.",
      },
      {
        question: "Will launch pricing change for existing couples?",
        answer:
          "Couples who join during launch will not be charged for the core home they already use.",
      },
    ],
  },
  {
    name: "Privacy",
    items: [
      {
        question: "Who can see my guest list?",
        answer:
          "Only you, your partner, and collaborators you invite with explicit access.",
      },
      {
        question: "Do you sell my data?",
        answer: "No. We never sell your wedding data.",
      },
    ],
  },
  {
    name: "Features",
    items: [
      {
        question: "Does The Aisle App handle gift money?",
        answer:
          "No. Guests pay you directly. We help you track pledges and thank-yous.",
      },
      {
        question: "Can I invite my mum or maid of honour?",
        answer:
          "Yes. Invite anyone helping with your wedding and choose exactly what they see.",
      },
      {
        question: "Does it work for multiple ceremonies?",
        answer:
          "Yes. Each ceremony can have its own guest list, seating, and RSVP flow.",
      },
      {
        question: 'What does "beautifully kept" mean?',
        answer:
          "Your details are organized with care: clear, calm, and worthy of the wedding you are creating.",
      },
      {
        question: "Can I use my own invitation design?",
        answer:
          "Yes. Design in Canva, upload to The Aisle App, and send as boutique emails or shareable links.",
      },
    ],
  },
  {
    name: "Technical",
    items: [
      {
        question: "Is there a mobile app?",
        answer:
          "The Aisle App works in your phone browser today. Native apps are on our roadmap.",
      },
      {
        question: "What languages are supported?",
        answer: "English and French at launch.",
      },
      {
        question: "Where is my data stored?",
        answer:
          "Securely in encrypted cloud infrastructure in the Asia-Pacific region.",
      },
      {
        question: "Can I export my data?",
        answer: "Yes. Your wedding is yours to export whenever you need.",
      },
    ],
  },
  {
    name: "For vendors",
    items: [
      {
        question: "Can planners or florists use The Aisle App?",
        answer:
          "Vendor and planner plans are coming soon. Contact us if you would like early access.",
      },
      {
        question: "How do vendors get in touch?",
        answer: "Email hello@theaisleapp.com with a short note about your work.",
      },
    ],
  },
];
