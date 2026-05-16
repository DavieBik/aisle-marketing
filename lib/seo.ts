import type { Metadata } from "next";
import { SITE_URL } from "./constants";

const defaultDescription =
  "A wedding, beautifully kept. Your guests, gifts, ceremonies, and quiet moments, all in one boutique home.";

export function createMetadata({
  title,
  description = defaultDescription,
  path = "",
}: {
  title: string;
  description?: string;
  path?: string;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "The Aisle App",
      locale: "en_AU",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Nuru Technologies Pty Ltd",
  url: SITE_URL,
  logo: `${SITE_URL}/opengraph-image`,
  sameAs: [],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "The Aisle App",
  url: SITE_URL,
};

export const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "The Aisle App",
  applicationCategory: "LifestyleApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "AUD",
  },
};
