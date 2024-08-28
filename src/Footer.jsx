import React from 'react';
import styles from './Footer.module.css'; 

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer-container"]}>
        <p>&copy; {new Date().getFullYear()} Yo Africa. All rights reserved.</p>
        <div className={styles["footer-links"]}>
          <a className={styles["footer-link"]} href="/privacy-policy">Privacy Policy</a>
          <a className={styles["footer-link"]} href="/terms-of-service">Terms of Service</a>
          <a className={styles["footer-link"]} href="/contact">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
