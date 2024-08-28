import React, {useState} from "react";
import  {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './NavBar.module.css';

const NavBar  = ({feature, features}) => {
    return (
        <>
        <nav className={styles["nav-bar"]}>
            <input type="checkbox" id={styles["menu-toggle"]}></input>
            <label htmlFor={styles["menu-toggle"]} className={styles.hamburger}>&#9776;</label>
            <ul>
                <li><Link className={styles.navLink} to="/home">Home</Link></li>
                <li><a className={styles.navLink} href="#about">About</a></li>
                <li className={styles.dropdown}>
                    <a className={styles.navLink} href="#news">News</a>
                    <ul className={styles["dropdown-content"]} id={styles["news-links"]}>
                        <li><Link className={styles.navLink} to="/news/latest">Latest</Link></li>
                        <li><a className={styles.navLink} href="#remedies">All News</a></li>
                    </ul>
                </li>
                <li className={styles.dropdown}>
                    <a className={styles.navLink} href="#features">{feature}</a>
                    <ul className={styles["dropdown-content"]} id={styles["feature-links"]}>
                        {features.map((aFeature) => (
                            <li key={aFeature}><Link to={"/"+aFeature} className={styles.navLink}>{aFeature}</Link></li>
                        ))}
                    </ul>
                </li>
            </ul>
        </nav>
        
        </>

    );

};


// Define propTypes
NavBar.propTypes = {
    feature: PropTypes.string.isRequired,
    features: PropTypes.array.isRequired,
}

export default NavBar;