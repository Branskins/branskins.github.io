import styles from "./page.module.css";

export default function BlogPage() {
  return (
    <div className="wrap">
      <header className={styles.header}>
        <div className="eyebrow">03 — blog</div>
        <h1 className={styles.title}>Blog</h1>
      </header>
      <div className={styles.empty}>
        <div className="eyebrow">No posts yet</div>
        <p className={styles.emptyTitle}>First post is in progress_</p>
      </div>
    </div>
  );
}
