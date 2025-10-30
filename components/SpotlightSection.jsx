import styles from './SpotlightSection.module.css';
export default function SpotlightSection() {
    return (
        <section className={styles.spotlightSection}>
            <div className={styles.SpotlightContainer}>
                <div className={styles.SpotlightContent}>
                    <p className={styles.sectionTitle}>Spotlight</p>
                    <h2 className={styles.title}>Currently working on...</h2>
                    <p className={styles.description}>A groundbreaking AI-driven solution developed by our talented student team. This project demonstrates innovative problem-solving and technological excellence.</p>
                    <ul className={styles.featuresList}>
                        <li className={styles.featureItem}>
                            <p className={styles.featureDesc}>🚀 Machine Learning Algorithms</p>
                        </li>
                        <li className={styles.featureItem}>
                            <p className={styles.featureDesc}>🚀 Sustainable design development</p>
                        </li>
                        <li className={styles.featureItem}>
                            <p className={styles.featureDesc}>🚀 Real-World application potential</p>
                        </li>
                    </ul>
                </div>
                <div className={styles.SpotlightImage}>
                    <div className={styles.imagePlaceholder}></div>
                </div>
            </div>
        </section>
    );
}