import { MetadataRoute } from "next"
import { blogPosts } from "@/app/lib/blog-data"

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://agarban.com"

  // Static routes
  const routes = ["", "/contact", "/digital", "/blog"].map((route) => ({
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

  // Blog post routes
  const blogRoutes = blogPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  return [...routes, ...projectRoutes, ...blogRoutes]
}
