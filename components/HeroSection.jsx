import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContainer}>
        {/* Left Column - Text and Buttons */}
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>KDGO</h1>
          <p className={styles.heroDescription}>
            A collaborative platform where student creativity meets technology. 
            Discover groundbreaking projects, track progress, and connect with emerging talent.
          </p>
          <div className={styles.heroButtons}>
            <button className={styles.exploreButton}>Explore</button>
            <button className={styles.learnMoreButton}>Learn more</button>
          </div>
        </div>

        {/* Right Column - Image Placeholder */}
        <div className={styles.heroImage}>
          <div className={styles.imagePlaceholder}>
            <svg 
              width="120" 
              height="120" 
              viewBox="0 0 24 24" 
              fill="none" 
              className={styles.placeholderIcon}
            >
              <path 
                d="M12 2L2 7L12 12L22 7L12 2Z" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              <path 
                d="M2 17L12 22L22 17" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              <path 
                d="M2 12L12 17L22 12" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
