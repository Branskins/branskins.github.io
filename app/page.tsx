import Link from "next/link";
import { LinkButton, ProjectCard } from "@portfolio/ui";
import { projects } from "@/lib/projects";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <div className="wrap">
      <section className={styles.hero}>
        <div className="eyebrow">Now Building</div>
        <h1 className={styles.heroTitle}>
          I build things
          <br />
          for the <span>web_</span>
        </h1>
        <p className={styles.heroLede}>
          Developer working across the stack. This site is a work in
          progress — swap this copy, the projects below, and the CV for the
          real thing.
        </p>
        <div className={styles.heroActions}>
          <LinkButton href="/projects" variant="primary">
            View projects
          </LinkButton>
          <LinkButton href="/cv" variant="secondary">
            View CV
          </LinkButton>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <div>
            <div className="eyebrow eyebrow-accent">Selected Work</div>
            <h2 className={styles.sectionTitle}>Featured projects</h2>
          </div>
          <Link href="/projects" className="eyebrow">
            All projects
          </Link>
        </div>
        <div className={styles.grid}>
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.index} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
