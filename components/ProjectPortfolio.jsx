import styles from './ProjectPortfolio.module.css';

export default function ProjectPortfolio(){
    return(
        <section className={styles.projectPortfolio}>
            <div className={styles.ProjectContainer}>
                <h2 className={styles.Title}>Projects</h2>
                <p className={styles.Description}>Visual showcase of our most innovative student projects and collaborative achievements.</p>
                <div className={styles.portfolioGrid}>
    
                    <div className={`${styles.portfolioItem} ${styles.tall}`}>
                        <a href="/projects/project-1" className={styles.itemLink} aria-label="View project 1">
                            <div className={styles.imagePlaceholder}>📷</div>
                            <div className={styles.overlay}>
                                <div className={styles.overlayContent}>
                                    <span className={styles.overlayText}>View more</span>
                                    <span className={styles.overlaySubtext}>Project 1</span>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className={styles.portfolioItem}>
                        <a href="/projects/project-2" className={styles.itemLink} aria-label="View project 2">
                            <div className={styles.imagePlaceholder}>📷</div>
                            <div className={styles.overlay}>
                                <div className={styles.overlayContent}>
                                    <span className={styles.overlayText}>View more</span>
                                    <span className={styles.overlaySubtext}>Project 2</span>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className={`${styles.portfolioItem} ${styles.tall}`}>
                        <a href="/projects/project-3" className={styles.itemLink} aria-label="View project 3">
                            <div className={styles.imagePlaceholder}>📷</div>
                            <div className={styles.overlay}>
                                <div className={styles.overlayContent}>
                                    <span className={styles.overlayText}>View more</span>
                                    <span className={styles.overlaySubtext}>Project 3</span>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className={`${styles.portfolioItem} ${styles.tall}`}>
                        <a href="/projects/project-4" className={styles.itemLink} aria-label="View project 4">
                            <div className={styles.imagePlaceholder}>📷</div>
                            <div className={styles.overlay}>
                                <div className={styles.overlayContent}>
                                    <span className={styles.overlayText}>View more</span>
                                    <span className={styles.overlaySubtext}>Project 4</span>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className={styles.portfolioItem}>
                        <a href="/projects/project-5" className={styles.itemLink} aria-label="View project 5">
                            <div className={styles.imagePlaceholder}>📷</div>
                            <div className={styles.overlay}>
                                <div className={styles.overlayContent}>
                                    <span className={styles.overlayText}>View more</span>
                                    <span className={styles.overlaySubtext}>Project 5</span>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className={`${styles.portfolioItem} ${styles.tall}`}>
                        <a href="/projects/project-6" className={styles.itemLink} aria-label="View project 6">
                            <div className={styles.imagePlaceholder}>📷</div>
                            <div className={styles.overlay}>
                                <div className={styles.overlayContent}>
                                    <span className={styles.overlayText}>View more</span>
                                    <span className={styles.overlaySubtext}>Project 6</span>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className={styles.portfolioItem}>
                        <a href="/projects/project-7" className={styles.itemLink} aria-label="View project 7">
                            <div className={styles.imagePlaceholder}>📷</div>
                            <div className={styles.overlay}>
                                <div className={styles.overlayContent}>
                                    <span className={styles.overlayText}>View more</span>
                                    <span className={styles.overlaySubtext}>Project 7</span>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className={styles.portfolioItem}>
                        <a href="/projects/project-8" className={styles.itemLink} aria-label="View project 8">
                            <div className={styles.imagePlaceholder}>📷</div>
                            <div className={styles.overlay}>
                                <div className={styles.overlayContent}>
                                    <span className={styles.overlayText}>View more</span>
                                    <span className={styles.overlaySubtext}>Project 8</span>
                                </div>
                            </div>
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
}