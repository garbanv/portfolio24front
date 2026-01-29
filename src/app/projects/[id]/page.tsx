import Link from "next/link"
import { notFound } from "next/navigation"
import { projects } from "@/app/lib/data"
import { generatePageMetadata } from "@/app/lib/metadata"
import type { Metadata } from "next"

interface ProjectPageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { id } = await params
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return {}
  }

  return generatePageMetadata({
    title: project.title,
    description: project.description,
    image: project.images?.[0] || "/AG.png",
    path: `/projects/${id}`,
    //tags: project.technologies,
  })
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params
  const project = projects.find((p) => p.id === id)

  if (!project) {
    notFound()
  }

  return (
    <div
      className="container mx-auto md:px-0 px-5"
      style={{ paddingTop: "150px", minHeight: "80vh" }}
    >
      {/* Back Button */}
      <Link
        href="/#projects"
        className="mono"
        style={{
          fontSize: "0.9rem",
          marginBottom: "4rem",
          display: "inline-block",
        }}
      >
        ← BACK_TO_INDEX
      </Link>

      {/* Project Header */}
      <h1
        style={{
          fontSize: "clamp(3rem, 8vw, 6rem)",
          lineHeight: 0.9,
          textTransform: "uppercase",
          marginBottom: "4rem",
        }}
      >
        {project.title}
      </h1>

      {/* Project Details Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "4rem",
          borderTop: "1px solid var(--accent)",
          paddingTop: "2rem",
        }}
      >
        {/* Info Column */}
        <div
          className="mono"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            opacity: 0.8,
          }}
        >
          <div>
            <span style={{ opacity: 0.5 }}>CLIENT:</span>
            <br />{" "}
            <a
              href={project.clientUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <p className="font-bold">{project.client}</p>
            </a>
          </div>
          <div>
            <span style={{ opacity: 0.5 }}>STACK:</span> <br />{" "}
            {project.category}
          </div>
          <div>
            <span style={{ opacity: 0.5 }}>YEAR:</span> <br /> {project.year}
          </div>
        </div>

        {/* Description Column */}
        <div className="grid grid-cols-1 justify-center gap-8 ">
          <p className="" style={{ fontSize: "1.5rem", lineHeight: "1.4" }}>
            {project.description}
          </p>

          {/*  <div
            style={{
              marginTop: "4rem",
              width: "100%",
              height: "400px",
              background: "#111",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px dashed var(--accent)",
            }}
          > */}
          <div className="flex justify-center items-center">
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              {" "}
              <img src={project.images?.[0] || "/AG.png"} alt={project.title} />
            </a>
            {/* <span className="mono">[ PROJECT_IMAGE_PLACEHOLDER ]</span> */}
          </div>
        </div>
      </div>
    </div>
  )
}
