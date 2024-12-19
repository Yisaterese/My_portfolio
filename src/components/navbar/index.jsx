import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import styles from './index.module.css';
import Hamburger from 'hamburger-react';

const Navbar = () => {
    const [activeNav, setActiveNav] = useState('/#home');
    const [toggle, setToggle] = useState(false);

    const handleNavClick = (path) => {
        setActiveNav(path);
        setToggle(false);
    };

    return (
        <header className={styles.header}>
            <nav className={`${styles.nav}`}>
                {/* Conditionally render Back to top */}
                <div className={styles.nav__top}>
                    {activeNav !== '/#home' && (
                        <Link
                            to="/#home"
                            className={styles.nav__logo}
                            onClick={() => handleNavClick('/#home')}
                        >
                            Back to top
                        </Link>
                    )}
                </div>
                <div className={`${styles.nav__menu} ${toggle ? styles.show_menu : ''}`}>
                    <ul className={`${styles.nav__list} grid`}>
                        {['home', 'about', 'skills', 'projects', 'qualifications', 'contact'].map(section => (
                            <li className={styles.nav__item} key={section}>
                                <Link
                                    smooth
                                    to={`/#${section}`}
                                    className={`${styles.nav__link} ${activeNav === `/#${section}` ? styles.active_link : ''}`}
                                    onClick={() => handleNavClick(`/#${section}`)}
                                >
                                    {section.charAt(0).toUpperCase() + section.slice(1)}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <i className={`uil uil-times ${styles.nav__close}`} onClick={() => setToggle(false)}></i>
                </div>
                <div className={styles.nav__toggle}>
                    <button
                        aria-expanded={toggle}
                        aria-label="Toggle navigation"
                        onClick={() => setToggle(!toggle)}
                        className={styles.hamburger__button}
                    >
                        <Hamburger toggled={toggle} toggle={setToggle} color="#ed2b27" />
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
