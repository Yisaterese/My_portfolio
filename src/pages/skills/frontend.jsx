import React from "react";
import styles from "./index.module.css"
import {frontendSkillsData} from "../../utils/utils";

const Frontend = () => {


    return (
        <div className={styles.skills__content}>
            <h3 className={styles.skills__title}>Frontend Engineer</h3>
            <div className={styles.skills__box}>
                {Array.from({ length: Math.ceil(frontendSkillsData.length / 2) }).map((_, index) => (
                    <div key={index} className={styles.skills__group}>
                        {frontendSkillsData.slice(index * 2, index * 2 + 2).map((skill, idx) => (
                            <div key={idx} className={styles.skills__data}>
                                <i className={`bx bx-badge-check ${styles.icon}`}></i>
                                <div>
                                    <h3 className={styles.skills__name}>{skill.name}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Frontend;
