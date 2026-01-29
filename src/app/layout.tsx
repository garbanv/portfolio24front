import "./globals.css"
import Header from "@/app/(ui)/Header"
import CustomCursor from "@/app/(ui)/CustomCursor"
import type { Metadata } from "next"
import { generatePersonSchema, generateWebsiteSchema } from "@/app/lib/schema"
/* import Nav from "./(ui)/Nav";
import Footer from '@/app/(ui)/Footer' */

const siteUrl = "https://agarban.com"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Alexei Garban - Software Developer Portfolio",
    template: "%s | Alexei Garban",
  },
  description:
    "Minimalist Software Developer Portfolio showcasing projects in React, Next.js, and modern web technologies.",
  keywords: [
    "Software Developer",
    "Portfolio",
    "React",
    "Next.js",
    "Web Development",
    "Full Stack",
  ],
  authors: [{ name: "Alexei Garban", url: siteUrl }],
  creator: "Alexei Garban",
  publisher: "Alexei Garban",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Alexei Garban - Software Developer Portfolio",
    description:
      "Minimalist Software Developer Portfolio showcasing projects in React, Next.js, and modern web technologies.",
    siteName: "Alexei Garban Portfolio",
    images: [
      {
        url: "/AG.jpg",
        width: 1200,
        height: 630,
        alt: "Alexei Garban - Software Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Alexei Garban - Software Developer Portfolio",
    description:
      "Minimalist Software Developer Portfolio showcasing projects in React, Next.js, NodeJs and modern web technologies.",
    images: ["/AG.jpg"],
    creator: "@alexei_garban",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logoIcon.webp",
  },

  manifest: "/manifest.json",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const personSchema = generatePersonSchema()
  const websiteSchema = generateWebsiteSchema()

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>
        <div className="noise"></div>
        {/*  <CustomCursor /> */}
        <Header />

        <main>{children}</main>

        <footer
          style={{
            padding: "4rem 0",
            textAlign: "center",
            fontFamily: "var(--font-mono)",
            fontSize: "0.9rem",
          }}
        >
          <a href="mailto:alexei@agarban.com">alexei@agarban.com</a>
        </footer>
      </body>
    </html>
  )
}
