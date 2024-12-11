import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>
          &copy; 2024 Todos los derechos reservados
        </p>
        <div className={styles.socialLinks}>
          <a href="#" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>Facebook</a>
          <a href="#" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>Twitter</a>
          <a href="#" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;