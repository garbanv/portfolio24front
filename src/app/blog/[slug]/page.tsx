import Link from "next/link"
import { notFound } from "next/navigation"
import { blogPosts } from "@/app/lib/blog-data"
import type { Metadata } from "next"

interface BlogPostProps {
  params: { slug: string }
}

export async function generateMetadata({
  params,
}: BlogPostProps): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: `${post.title} - Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: ["Alexei Garban", "agarban.com"],
      tags: [post.category],
      images: "/AG.jpg",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: ["/AG.jpg"],
    },
  }
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: "Alexei Garban",
    },
    publisher: {
      "@type": "Person",
      name: "Alexei Garban",
    },
    articleSection: post.category,
    keywords: [post.category, "software development", "programming"],
    url: `https://agarban.com/blog/${post.slug}`,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="w-[90%] max-w-4xl mx-auto pt-32 pb-20 min-h-screen blog-content">
        {/* Navigation */}
        <nav className="mb-16 flex justify-between items-center font-mono text-xs">
          <Link
            href="/blog"
            className="hover:underline opacity-60 hover:opacity-100"
          >
            ← DIRECTORY_INDEX
          </Link>
          <span className="opacity-40">{post?.slug.toUpperCase()}.TXT</span>
        </nav>

        <header className="mb-20 border-b border-accent pb-10">
          <div className="font-mono text-xs mb-6 flex gap-4 text-accent">
            <span className="border border-accent px-2 py-0.5 text-foreground">
              {post?.category}
            </span>
            <span className="py-0.5">{post?.readTime} READ</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light leading-[0.95] tracking-tight uppercase mb-8">
            {post?.title}
          </h1>

          <div className="font-mono text-xs opacity-50">
            POSTED ON: {post?.date}
          </div>
        </header>

        {/* Content Area */}
        {/* We use a custom class 'brutalist-content' to style the inner HTML */}
        <div
          className="brutalist-content font-serif text-lg md:text-xl leading-relaxed opacity-90"
          dangerouslySetInnerHTML={{
            __html: post?.content || "<p>Post not found.</p>",
          }}
        />

        <div className="mt-24 pt-8 border-t border-dashed border-accent font-mono text-xs opacity-50 flex justify-between">
          <span>END_OF_FILE</span>
          <span>SHA256: 8a9f...e4b1</span>
        </div>

        <style>{`
        .brutalist-content p {
          margin-bottom: 2rem;
        }
        .brutalist-content h2 {
          font-family: 'Helvetica Neue', Arial, sans-serif;
          font-size: 2rem;
          font-weight: 700;
          text-transform: uppercase;
          margin-top: 4rem;
          margin-bottom: 1.5rem;
          letter-spacing: -0.02em;
        }
        .brutalist-content pre {
          background: #111;
          border: 1px solid #333;
          padding: 1.5rem;
          overflow-x: auto;
          margin-bottom: 2rem;
          font-family: 'Courier New', Courier, monospace;
          font-size: 0.85rem;
          color: #ccc;
        }
        .brutalist-content code {
          background: rgba(255,255,255,0.1);
          padding: 0.2em 0.4em;
          font-family: 'Courier New', Courier, monospace;
          font-size: 0.9em;
        }
        .brutalist-content pre code {
          background: transparent;
          padding: 0;
        }
        .brutalist-content i {
          font-style: italic;
          font-family: 'Courier New', Courier, monospace;
        }
          .contact-link {
            text-decoration: underline;
            font-weight: bold;
            color: inherit;
          }
          .contact-link:hover {
            color: var(--background);
          }
      `}</style>
      </article>
    </>
  )
}
