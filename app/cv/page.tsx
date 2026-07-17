import { Download } from "lucide-react";
import { LinkButton, Badge } from "@portfolio/ui";
import styles from "./page.module.css";

const experience = [
  {
    period: "20XX — Present",
    role: "Role Title",
    org: "Company Name",
    description:
      "One or two lines on scope and impact in this role — replace with real experience.",
  },
  {
    period: "20XX — 20XX",
    role: "Role Title",
    org: "Company Name",
    description:
      "One or two lines on scope and impact in this role — replace with real experience.",
  },
];

const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "GraphQL",
];

export default function CvPage() {
  return (
    <div className="wrap">
      <header className={styles.header}>
        <div>
          <div className="eyebrow">04 — cv</div>
          <h1 className={styles.title}>Curriculum Vitae</h1>
        </div>
        <LinkButton href="/cv.pdf" variant="secondary">
          <Download size={16} strokeWidth={2} />
          Download PDF
        </LinkButton>
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Experience</h2>
        {experience.map((entry) => (
          <div className={styles.entry} key={entry.role + entry.period}>
            <div className={styles.entryMeta}>{entry.period}</div>
            <div>
              <h3 className={styles.entryRole}>{entry.role}</h3>
              <p className={styles.entryOrg}>{entry.org}</p>
              <p className={styles.entryDesc}>{entry.description}</p>
            </div>
          </div>
        ))}
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Skills</h2>
        <div className={styles.skills}>
          {skills.map((skill) => (
            <Badge key={skill}>{skill}</Badge>
          ))}
        </div>
      </section>
    </div>
  );
}
