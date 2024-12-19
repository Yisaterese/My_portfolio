import React from "react";
import styles from "./index.module.css";
import Frontend from "./frontend";
import Backend from "./backend";
import Technologies from "./others";

const Skills = () => {
    return (
        <section className={styles.section} id="skills">
            <h2 className={styles.section__title}>Skills</h2>
            <span className="section__subtitle">My Technical Level</span>

            <div className={styles.skills__container}>
                <Frontend/>
                <Backend/>
                <Technologies/>
            </div>
        </section>
    );
}

export default Skills;