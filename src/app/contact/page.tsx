import { generatePageMetadata } from "@/app/lib/metadata"

export const metadata = generatePageMetadata({
  title: "Contact",
  description:
    "Get in touch with Alexei Garban for software development projects and collaboration opportunities.",
  path: "/contact",
})

export default function Contact() {
  return (
    <div
      className="container mx-auto"
      style={{ height: "100vh", display: "flex", alignItems: "center" }}
    >
      <div>
        <h1 style={{ fontSize: "12vw", lineHeight: "0.8" }}>
          LET'S
          <br />
          TALK
        </h1>
        <div className="mono" style={{ marginTop: "2rem", fontSize: "1.2rem" }}>
          <a
            href="mailto:alexei@agarban.com"
            style={{ borderBottom: "1px solid currentColor" }}
          >
            alexei@agarban.com
          </a>
        </div>
      </div>
    </div>
  )
}
