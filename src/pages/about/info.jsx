import React from "react";
import styles from "./index.module.css";
import {infoData} from "../../utils/utils";

const Info = () => {

    return (
        <div className={styles.about__info}>
            {infoData.map((item, index) => (
                <div key={index} className={styles.about__box}>
                    <i className={`${item.icon} ${styles.about__icon}`}></i>
                    <h3 className={styles.about__title}>{item.title}</h3>
                    <span className={styles.about__subtitle}>{item.subtitle}</span>
                </div>
            ))}
        </div>
    );
}

export default Info;
