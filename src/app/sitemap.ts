import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://agarban.com"

  // Static routes
  const routes = ["", "/contact", "/digital"].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }))

  // Dynamic project routes - you can fetch these from your data
  const projectRoutes = ["1", "2", "3"].map((id) => ({
    url: `${siteUrl}/projects/${id}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [...routes, ...projectRoutes]
}
