import type { Metadata } from "next"

const siteUrl = "https://agarban.com"

interface GenerateMetadataProps {
  title: string
  description: string
  image?: string
  type?: "website" | "article"
  publishedTime?: string
  modifiedTime?: string
  authors?: string[]
  tags?: string[]
  path?: string
}

export function generatePageMetadata({
  title,
  description,
  image = "/AG.png",
  type = "website",
  publishedTime,
  modifiedTime,
  authors,
  tags,
  path = "",
}: GenerateMetadataProps): Metadata {
  const url = `${siteUrl}${path}`

  return {
    title,
    description,

    openGraph: {
      type,
      url,
      title,
      description,
      siteName: "Alexei Garban Portfolio",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(authors && { authors }),
      ...(tags && { tags }),
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@alexei_garban",
    },

    alternates: {
      canonical: url,
    },
  }
}
