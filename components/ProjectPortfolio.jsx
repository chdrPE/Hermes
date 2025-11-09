import ProjectFeature from "./ProjectFeature";
import styles from "./ProjectPortfolio.module.css";

export default function ProjectPortfolio({ projects = [], id }) {
  return (
    <section id={id} className={styles.wrap} aria-label="Project grid">
      <div className={styles.grid}>
        {projects.map((p, i) => <ProjectFeature key={i} {...p} />)}
      </div>
    </section>
  );
}
