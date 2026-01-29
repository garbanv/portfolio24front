export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Alexei Garban",
    url: "https://agarban.com",
    image: "https://agarban.com/AG.jpg",
    jobTitle: "Software Developer",
    description:
      "Software Developer specializing in React, Next.js, and modern web technologies",
    email: "alexei@agarban.com",
    sameAs: [
      "https://github.com/alexeigarban",
      "https://linkedin.com/in/alexeigarban",
      "https://twitter.com/alexei_garban",
    ],
  }
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Alexei Garban - Software Developer Portfolio",
    url: "https://agarban.com",
    description:
      "Minimalist Software Developer Portfolio showcasing projects in React, Next.js, and modern web technologies",
    author: {
      "@type": "Person",
      name: "Alexei Garban",
    },
  }
}

export function generatePortfolioSchema(
  projects: { title: string; description: string; url: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "Software Development Portfolio",
    author: {
      "@type": "Person",
      name: "Alexei Garban",
    },
    workExample: projects.map((project) => ({
      "@type": "SoftwareApplication",
      name: project.title,
      description: project.description,
      url: project.url,
      applicationCategory: "WebApplication",
      operatingSystem: "Web Browser",
    })),
  }
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
