import { Linkedin, Github, Dribbble } from "lucide-react";
import styles from "./TeamGrid.module.css";

const members = [
  {
    name: "Diego Carrasco",
    role: "CEO",
    blurb:
      "Driving technical innovation with strategic thinking and hands-on development skills",
    socials: { linkedin: "#", github: "#", dribbble: "#" },
  },
  {
    name: "Rodrigo Ponce",
    role: "CEO of janitors",
    blurb:
      "Creating intuitive user experiences that bridge technology and human interaction",
    socials: { linkedin: "#", github: "#", dribbble: "#" },
  },
  {
    name: "Franco Anaya",
    role: "CyberSecurity Expert",
    blurb:
      "Building robust and scalable systems that power complex digital solutions",
    socials: { linkedin: "#", github: "#", dribbble: "#" },
  },
  {
    name: "Emma Patel",
    role: "Frontend developer",
    blurb:
      "Crafting responsive and dynamic interfaces that feel fast and accessible",
    socials: { linkedin: "#", github: "#", dribbble: "#" },
  },
  {
    name: "David Kim",
    role: "Data analyst",
    blurb:
      "Transforming raw data into meaningful insights that inform product decisions",
    socials: { linkedin: "#", github: "#", dribbble: "#" },
  },
  {
    name: "Rachel Martinez",
    role: "UX researcher",
    blurb:
      "Understanding user needs and translating them into impactful experiences",
    socials: { linkedin: "#", github: "#", dribbble: "#" },
  },
];

export default function TeamGrid() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.grid}>
        {members.map((m) => (
          <article key={m.name} className={styles.card}>
            <div className={styles.thumb} aria-hidden="true">
              <div className={styles.thumbIcon} />
            </div>

            <div className={styles.meta}>
              <h3 className={styles.name}>{m.name}</h3>
              <p className={styles.role}>{m.role}</p>
              <p className={styles.blurb}>{m.blurb}</p>

              <div className={styles.socials}>
                <a aria-label="LinkedIn" href={m.socials.linkedin}>
                  <Linkedin size={16} />
                </a>
                <a aria-label="GitHub" href={m.socials.github}>
                  <Github size={16} />
                </a>
                <a aria-label="Dribbble" href={m.socials.dribbble}>
                  <Dribbble size={16} />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
