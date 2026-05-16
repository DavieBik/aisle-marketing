export type Feature = {
  id: string;
  eyebrow: string;
  heading: string;
  body: string;
  image: {
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
    id: "committee",
    eyebrow: "COMMITTEE",
    heading: "For weddings that take a village to plan.",
    body: "Run committee meetings without the chaos. Capture the minutes. Track the pledges, the fines, the auctions. Distribute meeting notes to attendees by email or shareable link. For weddings where planning is a community effort, not a solo project.",
    image: {
      src: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Notebook and coffee cups on a table after a meeting, soft light",
      width: 1200,
      height: 800,
    },
  },
  {
    id: "events",
    eyebrow: "EVENTS",
    heading: "Bridal showers. Hen dos. Every milestone before the day.",
    body: "Track every event leading up to your wedding. Each has its own guest list, host, photographs, and quiet history. Hide your bridal shower from your partner if you'd like a surprise. Invite the host as a collaborator with access to just that event.",
    image: {
      src: "https://images.pexels.com/photos/1024991/pexels-photo-1024991.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Bridal shower invitation flat lay with ribbon and flowers",
      width: 1200,
      height: 800,
    },
  },
  {
    id: "stationery",
    eyebrow: "STATIONERY",
    heading: "Designed by you. Delivered with grace.",
    body: "Design your save the dates and invitations in Canva. Upload them to The Aisle App. We deliver them as beautiful boutique emails, or generate links you can share by text. Every email that goes out feels like part of your wedding suite.",
    image: {
      src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&q=80",
      alt: "Wedding invitation styled on a textured table with eucalyptus",
      width: 1200,
      height: 800,
    },
  },
  {
    id: "collaborators",
    eyebrow: "COLLABORATORS",
    heading: "Your maid of honour. Your secretary. Your florist. All helping.",
    body: "Invite anyone who's helping with your wedding. Give them their own title, you choose what to call them. Give them exactly the access they need. Your treasurer sees the committee finances but not your honeymoon budget. Your bridesmaid sees the bridal shower she's hosting but not your private notes.",
    image: {
      src: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Two friends sharing coffee in soft natural light",
      width: 1200,
      height: 800,
    },
  },
  {
    id: "emails",
    eyebrow: "EMAILS",
    heading: "Every message you send feels like part of your wedding.",
    body: "Six hand-designed templates plus the option to use your own Canva design as the header. Reminders, RSVP confirmations, thank-yous, and committee notes all dressed in your wedding's visual language. Restraint over volume. Beauty over noise.",
    image: {
      src: "https://images.pexels.com/photos/5717412/pexels-photo-5717412.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Phone on a wedding-styled table with coffee cup, soft morning light",
      width: 1200,
      height: 800,
    },
  },
  {
    id: "budget",
    eyebrow: "BUDGET",
    heading: "TBC is a valid amount. So is 450,000 UGX. So is $30.",
    body: "Track every dollar and every pledge in whatever currency, whatever phase. From rough estimates to firm quotes to final spend. Free-text amounts that work the way real wedding budgets actually unfold.",
    image: {
      src: "https://images.pexels.com/photos/669996/pexels-photo-669996.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Notebook with handwritten budget figures and vintage pen",
      width: 1200,
      height: 800,
    },
  },
];

export const HOME_FAQ = [
  {
    question: "Is The Aisle App free?",
    answer:
      "Yes. The Aisle App is free for couples during our launch. You can start today without a credit card. Premium features will arrive later, but your wedding home will always be free to start.",
  },
  {
    question: "Does The Aisle App handle gift money?",
    answer:
      "No. Your guests pay you directly using the payment methods you choose, from bank transfer to mobile money to PayPal. We help you track pledges and thank-yous. We never hold your money.",
  },
  {
    question: "Can my partner and I share an account?",
    answer:
      "Yes. You and your partner share one wedding home. You both see the same guests, ceremonies, and details, with the access you choose for each other.",
  },
  {
    question: "Can I invite my mum, planner, florist, or maid of honour?",
    answer:
      "Yes. Invite anyone helping with your wedding as a collaborator. You choose their title and exactly what they can see, from committee finances to a single pre-wedding event.",
  },
  {
    question: "Is there a mobile app?",
    answer:
      "The Aisle App works beautifully in your phone's browser today. Native apps are on our roadmap.",
  },
  {
    question: "What languages does The Aisle App support?",
    answer:
      "English and French at launch. More languages will follow as we grow.",
  },
  {
    question: "Where is my data stored?",
    answer:
      "Your data is stored securely in encrypted cloud infrastructure. We use industry-standard providers and never sell your information.",
  },
  {
    question: "Can I export everything if I want to?",
    answer:
      "Yes. Your wedding is yours. You can export your data whenever you need it.",
  },
  {
    question: "Does The Aisle App work for our wedding tradition?",
    answer:
      "Yes. Whether your wedding has one ceremony or several, a small guest list or hundreds across continents, The Aisle App is built for the way weddings actually unfold.",
  },
  {
    question: 'What does "beautifully kept" mean?',
    answer:
      "It means your wedding details are held with care. Organized without feeling corporate. Clear without feeling cold. A quiet home for everything that matters.",
  },
] as const;

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
