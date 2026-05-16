import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

const routes = [
  "",
  "/features",
  "/story",
  "/pricing",
  "/faq",
  "/contact",
  "/privacy",
  "/terms",
  "/cookies",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));
}
