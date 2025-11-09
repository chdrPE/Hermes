import Link from "next/link";
import styles from "./ProjectFeature.module.css";

export default function ProjectFeature({ title, excerpt, tags = [], href = "#", imageAlt = "placeholder" }) {
  return (
    <article className={styles.card}>
      <div className={styles.thumb} aria-label={imageAlt}>
        <span>Image</span>
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.excerpt}>{excerpt}</p>

        {tags?.length > 0 && (
          <div className={styles.tags}>
            {tags.map((t, i) => (
              <span key={i} className={styles.tag}>{t}</span>
            ))}
          </div>
        )}
      </div>

      <div className={styles.footer}>
        <Link href={href} className={styles.link}>View project →</Link>
      </div>
    </article>
  );
}
