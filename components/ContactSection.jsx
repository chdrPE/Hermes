import { Mail, Phone, MapPin } from "lucide-react";
import styles from "./ContactSection.module.css";

export default function ContactSection() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.headerRow}>
        <div>
          <p className={styles.kicker}>Connect</p>
          <h3 className={styles.title}>Contact us</h3>
          <p className={styles.sub}>
            Interested in collaboration or have questions about our student-driven
            digital projects
          </p>
        </div>

        <ul className={styles.contactList}>
          <li>
            <Mail size={18} />
            <div>
              <span className={styles.label}>Email</span>
              <a href="mailto:team@studentprojects.com">team@studentprojects.com</a>
            </div>
          </li>
          <li>
            <Phone size={18} />
            <div>
              <span className={styles.label}>Phone</span>
              <a href="tel:+15551234567">+1 (555) 123-4567</a>
            </div>
          </li>
          <li>
            <MapPin size={18} />
            <div>
              <span className={styles.label}>Office</span>
              <span>Digital Innovation Center, University Campus</span>
            </div>
          </li>
        </ul>
      </div>

      <div className={styles.map}>
        {/* Large gray image placeholder */}
        <div className={styles.mapIcon} />
      </div>
    </section>
  );
}
