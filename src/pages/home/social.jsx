import React from "react";
import styles from "./index.module.css";

const Social = () => {
    return (
        <div className={styles.home__social}>
            <a href="https://www.linkedin.com/in/yisateresejoseph/" className={styles.home__socialIcon} target={"_blank"} >
                <i className="fab fa-linkedin"></i>
            </a>

            <a href="https://github.com/Yisaterese" className={styles.home__socialIcon} target={"_blank"} >
                <i className="fab fa-github"></i>
            </a>
        </div>
    );
};

export default Social;
