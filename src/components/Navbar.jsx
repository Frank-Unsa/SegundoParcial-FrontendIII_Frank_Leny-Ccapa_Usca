import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/" className={styles.logoLink}>
          <img src={logo} alt="Logo" className={styles.logoImage} />
        </Link>
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