// FeaturesList component placeholder (Reusable for Home + Projects)
import styles from './FeaturesSection.module.css'
export default function FeaturesSection() {
    return (
        <section className={styles.featuresSection}>
            <div className={styles.headingContainer}>
                <p className={styles.sectionTitle}>Innovate</p>
                <h2 className= {styles.title}>Key features of our company</h2>
                <p className={styles.description}>Comprehensive platform for student project collaboration and showcase</p>
            </div>
            <div className={styles.cardsGrid}>
                <div className={styles.featureCard}>
                    <div className={styles.ImageContainer}>

                    </div>
                    <p className={styles.cardCategory}>Projects</p>
                    <h2 className={styles.cardTitle}>Browse student innovation portfolio</h2>
                    <p className={styles.cardDescription}>Discover cutting edge projects from students across disciplines</p>
                    <a href="/projects" className={styles.cardLink}>View {'>'}</a>
                </div>
                <div className={styles.featureCard}>
                    <div className={styles.ImageContainer}>

                    </div>
                    <p className={styles.cardCategory}>Updates</p>
                    <h2 className={styles.cardTitle}>Track our progress and project updates</h2>
                    <p className={styles.cardDescription}>Stay informed about the latest developments and updates</p>
                    <a href="/projects" className={styles.cardLink}>View {'>'}</a>
                
                </div>
                <div className={styles.featureCard}>
                    <div className={styles.ImageContainer}>

                    </div>
                    <p className={styles.cardCategory}>Team</p>
                    <h2 className={styles.cardTitle}>Meet our Team</h2>
                    <p className={styles.cardDescription}>Learn about the dedicated individuals behind our projects</p>
                    <a href="/team" className={styles.cardLink}>View {'>'}</a>
                
                </div>
            </div>
        </section>
    )
}