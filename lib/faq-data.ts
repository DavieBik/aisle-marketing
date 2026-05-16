import { MARKETING_FAQ } from "./faq-content";

export type FaqCategory = {
  name: string;
  items: { question: string; answer: string }[];
};

export const FAQ_CATEGORIES: FaqCategory[] = [
  {
    name: "Frequently asked",
    items: [...MARKETING_FAQ],
  },
];
