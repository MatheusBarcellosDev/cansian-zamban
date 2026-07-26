import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/buffet", "/eventos", "/sobre", "/sustentabilidade", "/contato"];

  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/buffet" || route === "/eventos" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/buffet" || route === "/eventos" ? 0.9 : 0.7,
  }));
}
