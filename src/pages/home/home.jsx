import React from "react";
import styles from "./index.module.css";
import Social from "./social";
import Data from "./data";
import About from "../about/about";
import Skills from "../skills/skills";
import Projects from "../projects/Projects";
import Qualification from "../qualification/Qualification";
import Contact from "../contact/Contact";

const Home = () => {
    return (
        <div className={styles.home__container} id="home">
            <div className={`${styles.home__content} grid`}>
                <Social />
                <div className={styles.home__img}></div>
                <Data />
            </div>

            <About />
            <Skills/>
            <Projects/>
            <Qualification/>
            <Contact/>
        </div>
    );
}

export default Home;
