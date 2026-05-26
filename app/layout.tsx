import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import Script from "next/script";
import { MarketingChrome } from "@/components/marketing/MarketingChrome";
import { JsonLd } from "@/components/marketing/JsonLd";
import { SITE_URL } from "@/lib/constants";
import {
  organizationJsonLd,
  softwareJsonLd,
  websiteJsonLd,
} from "@/lib/seo";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "The Aisle App | Your wedding's beautiful home",
    template: "%s | The Aisle App",
  },
  description:
    "A wedding, beautifully kept. Your guests, gifts, ceremonies, and quiet moments, all in one boutique home.",
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: "The Aisle App",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const revalidate = 86400;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${outfit.variable} h-full antialiased`}
    >
      <head>
        <JsonLd data={organizationJsonLd} />
        <JsonLd data={websiteJsonLd} />
        <JsonLd data={softwareJsonLd} />
      </head>
      <body className="flex min-h-full flex-col font-outfit">
        {plausibleDomain && (
          <>
            <Script
              async
              src="https://plausible.io/js/pa-uBR_uENPxww9pooekFtCz.js"
              strategy="afterInteractive"
            />
            <Script id="plausible-init" strategy="afterInteractive">
              {`window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};plausible.init()`}
            </Script>
          </>
        )}
        <MarketingChrome>{children}</MarketingChrome>
      </body>
    </html>
  );
}
