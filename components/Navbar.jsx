import { useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarContainer}>
                {/* Brand Logo */}
                <div className={styles.navbarBrand}>
                    <a href="/">KDGO</a>
                </div>

                {/* Desktop Navigation Links */}
                <div className={styles.navbarLinks}>
                    <a href="/projects" className={styles.navLink}>Projects</a>
                    <a href="/updates" className={styles.navLink}>Updates</a>
                    <a href="/team" className={styles.navLink}>Team</a>
                    <div className={styles.navDropdown}>
                        <a href="#" className={`${styles.navLink} ${styles.dropdownToggle}`}>
                            More
                            <svg className={styles.dropdownIcon} width="12" height="8" viewBox="0 0 12 8" fill="none">
                                <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Desktop Action Buttons */}
                <div className={styles.navbarActions}>
                    <button className={styles.btnLogin}>Login</button>
                    <button className={styles.btnExplore}>Explore</button>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className={`${styles.mobileMenuToggle} ${isMobileMenuOpen ? styles.active : ''}`}
                    onClick={toggleMobileMenu}
                    aria-label="Toggle mobile menu"
                >
                    <span className={styles.hamburgerLine}></span>
                    <span className={styles.hamburgerLine}></span>
                    <span className={styles.hamburgerLine}></span>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.active : ''}`}>
                <div className={styles.mobileMenuContent}>
                    <a href="/projects" className={styles.mobileNavLink} onClick={toggleMobileMenu}>Projects</a>
                    <a href="/updates" className={styles.mobileNavLink} onClick={toggleMobileMenu}>Updates</a>
                    <a href="/team" className={styles.mobileNavLink} onClick={toggleMobileMenu}>Team</a>
                    <a href="#" className={styles.mobileNavLink} onClick={toggleMobileMenu}>More</a>
                    <div className={styles.mobileMenuActions}>
                        <button className={styles.btnLoginMobile}>Login</button>
                        <button className={styles.btnExploreMobile}>Explore</button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
