import React, {useState} from "react";
import  {Link} from 'react-router-dom';
import styles from './Banner.module.css';

function Banner(){
    return(<div className={styles["background-container"]}>
        <div className={styles["landing-text-container"]}>
            <Link to="/home/login" className={styles["logo-link"]}>
                <div className={styles["name-container"]}>
                    <p className={styles.bannerBoldface}>yo</p>
                    <p className={styles.regular}>africa</p>
                </div>
            </Link>
            <p className={styles.slogan}>Yongamela Ikusasa Lakho</p>
        </div>
    </div>
)
}


export default Banner