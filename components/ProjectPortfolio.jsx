import styles from './ProjectPortfolio.module.css';

export default function ProjectPortfolio(){
    return(
        <section className={styles.projectPortfolio}>
            <div className={styles.ProjectContainer}>
                <h2 className={styles.Title}>Projects</h2>
                <p className={styles.Description}>Visual showcase of our most innovative student projects and collaborative achievements.</p>
                <div className={styles.portfolioGrid}>
    
                    <div className={`${styles.portfolioItem} ${styles.tall}`}>
                        <a href="/projects/project1" className={styles.itemlink}>
                        <div className={styles.imagePlaceholder}>📷</div>
                        <div className={styles.overlay}>
                            <span className={styles.overlayText}>Project 1</span>
                            <span className={styles.overlaySubtext}>View More {'>'}</span>
                        </div>
                        </a>
                        
                    </div>

                    <div className={styles.portfolioItem}>
                        <div className={styles.imagePlaceholder}>📷</div>
                    </div>

                    <div className={`${styles.portfolioItem} ${styles.tall}`}>
                        <div className={styles.imagePlaceholder}>📷</div>
                    </div>

                    <div className={`${styles.portfolioItem} ${styles.tall}`}>
                        <div className={styles.imagePlaceholder}>📷</div>
                    </div>

                    <div className={styles.portfolioItem}>
                        <div className={styles.imagePlaceholder}>📷</div>
                    </div>

                    <div className={`${styles.portfolioItem} ${styles.tall}`}>
                        <div className={styles.imagePlaceholder}>📷</div>
                    </div>

                    <div className={styles.portfolioItem}>
                        <div className={styles.imagePlaceholder}>📷</div>
                    </div>

                    <div className={styles.portfolioItem}>
                        <div className={styles.imagePlaceholder}>📷</div>
                    </div>

                </div>
            </div>
        </section>
    );
}