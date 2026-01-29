import Link from "next/link"
import { projects } from "@/app/lib/data" // Assumes data file exists from previous step

interface Project {
  id: number
  name: string
  image: string[]
  description: string
  url: string
  client: string
  technologies: string[]
}

/* const projects: Project[] = [
  {
    id: 1,
    name: "Open Banking Accelerator",
    image: [
      '/work/work1/work1-1.png',
      '/work/work1/work1-2.png',
      '/work/work1/work1-3.png',
      '/work/work1/work1-4.png',
      '/work/work1/work1-5.png'
],
client:'Platformable',

    description: "P1",
    url: "https://accelerator.platformable.com",
    technologies: ["Javascript", "ReactJs", "NextJs", 'SQL'],

  },
  {
    id: 2,
    name: "APILandscape",
    image: [
      '/work/work2/work2-1.png',
      '/work/work1/work1-2.png',
      '/work/work1/work1-3.png',
      '/work/work1/work1-4.png',
      '/work/work1/work1-5.png'
],
    description: "API Landscape, A comprehensive view of all stakeholders creating the programmable economy",
    url: "https://apilandscape.apiscene.io/",
    technologies: ["Javascript", "NodeJs", "SQL"],
    client:'APIdays',
  },
  
]; */

export default function Home() {
  return (
    <div className="w-[90%] max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="h-[85vh] flex flex-col justify-center relative border-b border-accent overflow-hidden">
        <div className="grid-bg"></div>

        {/* Massive Text */}
        <h1 className="text-[6vw] leading-[0.9] uppercase -tracking-[0.04em] mix-blend-difference select-none text-[#cccccc]">
          <span className="block animate-slideUp [animation-delay:0ms]">
            SOFTWARE
          </span>
          <span className="block animate-slideUp [animation-delay:100ms] ml-[10vw] md:ml-[15vw]">
            developer
          </span>
          <span className="block animate-slideUp [animation-delay:200ms] text-[6vw]">
            <span className="font-serif italic">&</span> Ambient producer
          </span>
        </h1>

        <div className="font-mono text-xs absolute bottom-8 right-0 animate-blink opacity-70">
          SCROLL_TO_INITIALIZE ↓
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32">
        <span className="font-mono text-xs block mb-16 opacity-60">
          / 01 — SELECTED WORKS
        </span>

        <div className="flex flex-col">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="group border-t border-accent py-10 flex flex-col md:flex-row md:justify-between md:items-baseline transition-all duration-300 ease-out hover:bg-foreground hover:text-background hover:px-8 relative"
            >
              <span className="text-4xl md:text-6xl font-light tracking-tight">
                {project.title}
              </span>

              <div className="font-mono text-xs md:text-sm mt-4 md:mt-0 flex gap-8 opacity-80 group-hover:opacity-100">
                <span>{project.category}</span>
                <span>{project.year}</span>
              </div>
            </Link>
          ))}
          {/* Bottom border for last item */}
          <div className="border-t border-accent"></div>
        </div>
      </section>
    </div>
  )
}
