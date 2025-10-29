import { Star } from "lucide-react";
import styles from "./TeamVoices.module.css";

const voices = [
  {
    quote:
      "Our projects push the boundaries of what students can achieve in technology.",
    name: "Alex Rodriguez",
    role: "Project lead",
  },
  {
    quote:
      "Collaboration transforms individual skills into breakthrough innovations.",
    name: "Sarah Chen",
    role: "Design lead",
  },
  {
    quote:
      "Every project is an opportunity to solve real-world challenges.",
    name: "Michael Thompson",
    role: "Backend developer",
  },
];

export default function TeamVoices() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.cards}>
        {voices.map((v) => (
          <article key={v.name} className={styles.card}>
            <div className={styles.stars} aria-label="5 out of 5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
            <p className={styles.quote}>{v.quote}</p>
            <div className={styles.person}>
              <div className={styles.avatar} aria-hidden="true" />
              <div>
                <p className={styles.personName}>{v.name}</p>
                <p className={styles.personRole}>{v.role}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
