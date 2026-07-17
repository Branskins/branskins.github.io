import type { Project } from "@portfolio/ui";

// Placeholder data — replace with real projects.
export const projects: Project[] = [
  {
    index: "01",
    title: "Project One",
    description:
      "One-line description of what this project does and why it exists.",
    tags: ["typescript", "next.js"],
    repoHref: "https://github.com",
    liveHref: "https://example.com",
  },
  {
    index: "02",
    title: "Project Two",
    description:
      "One-line description of what this project does and why it exists.",
    tags: ["node", "postgres"],
    repoHref: "https://github.com",
  },
  {
    index: "03",
    title: "Project Three",
    description:
      "One-line description of what this project does and why it exists.",
    tags: ["react", "graphql"],
    repoHref: "https://github.com",
    liveHref: "https://example.com",
  },
];
