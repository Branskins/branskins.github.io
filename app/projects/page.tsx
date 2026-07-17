import { ProjectCard } from "@portfolio/ui";
import { projects } from "@/lib/projects";
import styles from "./page.module.css";

export default function ProjectsPage() {
  return (
    <div className="wrap">
      <header className={styles.header}>
        <div className="eyebrow">02 — projects</div>
        <h1 className={styles.title}>Projects</h1>
      </header>
      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.index} project={project} />
        ))}
      </div>
    </div>
  );
}
