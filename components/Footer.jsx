import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Top Section - Four Columns */}
        <div className={styles.footerTop}>
          <div className={styles.footerColumn}>
            <h3 className={styles.columnHeading}>Quick links</h3>
            <ul className={styles.linkList}>
              <li><a href="/projects" className={styles.footerLink}>Projects</a></li>
              <li><a href="/team" className={styles.footerLink}>Team</a></li>
              <li><a href="/updates" className={styles.footerLink}>Updates</a></li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h3 className={styles.columnHeading}>About</h3>
            <ul className={styles.linkList}>
              <li><a href="/testimonials" className={styles.footerLink}>Testimonials</a></li>
              <li><a href="/blog" className={styles.footerLink}>Blog</a></li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h3 className={styles.columnHeading}>Connect</h3>
            <ul className={styles.linkList}>
              <li><a href="https://youtube.com" className={styles.footerLink} target="_blank" rel="noopener noreferrer">YouTube</a></li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h3 className={styles.columnHeading}>Subscribe</h3>
            <p className={styles.subscribeText}>
              Stay updated on our latest student projects and innovation insights.
            </p>
            <p className={styles.legalText}>
              By subscribing, you agree to our privacy policy and consent to receive updates.
            </p>
            <div className={styles.subscribeForm}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className={styles.emailInput}
              />
              <button className={styles.subscribeButton}>Subscribe</button>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright and Social Media */}
        <div className={styles.footerBottom}>
          <div className={styles.copyrightSection}>
            <p className={styles.copyrightText}>
              © 2024 Student Project Hub. All rights reserved.
            </p>
          </div>

          <div className={styles.socialMedia}>
            <a href="https://linkedin.com" className={styles.socialLink} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}