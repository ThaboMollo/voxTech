import type { MetadataRoute } from "next";

const routes = [
  "",
  "/what-we-do",
  "/work",
  "/insights",
  "/opportunities",
  "/resources",
  "/contact",
  "/book-demo",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://www.voxtech.co.za${route}`,
    lastModified: new Date(),
  }));
}
