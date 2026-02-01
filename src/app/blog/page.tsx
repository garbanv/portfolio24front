import Link from "next/link"
import { blogPosts } from "@/app/lib/blog-data"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog - Technical Articles & Essays",
  description:
    "In-depth articles on software architecture, TypeScript, infrastructure, and design systems.",
  openGraph: {
    title: "Blog - Technical Articles & Essays",
    description:
      "In-depth articles on software architecture, TypeScript, infrastructure, and design systems.",
    type: "website",
  },
}

export default function BlogIndex() {
  return (
    <div className="w-[90%] max-w-7xl mx-auto pt-24 min-h-screen">
      <div className="border-b border-accent pb-8 mb-12 flex justify-between items-end">
        <h1 className="text-[6vw] leading-none tracking-tighter uppercase">
          Blog
        </h1>
        <span className="font-mono text-xs hidden md:block opacity-60">
          Directory: /VAR/WWW/BLOG
        </span>
      </div>

      <div className="flex flex-col ">
        <div className="hidden md:grid grid-cols-[150px_1fr_200px] pb-4 opacity-50 font-mono text-xs border-b border-accent/30">
          <span>DATE</span>
          <span>SUBJECT</span>
          <span>TAG</span>
        </div>

        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group grid grid-cols-1 md:grid-cols-[150px_1fr_200px] py-8 border-b border-accent items-baseline hover:bg-foreground hover:text-background transition-colors duration-300 relative px-2 md:px-4 -mx-2 md:-mx-4"
          >
            {/* Date */}
            <span className="font-mono text-xs opacity-70 group-hover:opacity-100 mb-2 md:mb-0">
              {post.date}
            </span>

            {/* Title & Excerpt */}
            <div>
              <h2 className="text-2xl md:text-3xl font-light mb-2 group-hover:translate-x-2 transition-transform duration-300">
                {post.title}
              </h2>
              <p className="font-mono text-xs opacity-60 max-w-lg group-hover:opacity-80 line-clamp-2">
                {post.excerpt}
              </p>
            </div>

            {/* Category / Arrow */}
            <div className="hidden md:flex justify-between items-center w-full">
              <span className="font-mono text-xs border border-accent rounded-full px-2 py-1 group-hover:border-background">
                {post.category}
              </span>
              <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                →
              </span>
            </div>

            {/* Mobile Category */}
            <div className="md:hidden mt-4 font-mono text-xs opacity-50">
              [{post.category}]
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
