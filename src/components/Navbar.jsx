// components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/" className={styles.logoLink}>Logo</Link>
      </div>
      <ul className={styles.navLinks}>
        
        <li><Link to="/" className={styles.navLink}>Inicio</Link></li>
        
        <li><Link to="/favorites" className={styles.navLink}>Favoritos</Link></li>
        <li><Link to="/contact" className={styles.navLink}>Contactanos</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;