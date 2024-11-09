// src/components/Navbar/Navbar.tsx
import React from 'react';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Brand Logo</div>
      <ul className={styles.navLinks}>
        <li>Home</li>
        <li>Shop</li>
        <li>Contact</li>
        <li>About</li>
      </ul>
      <div className={styles.icons}>
        {/* Add icon placeholders or real icons */}
        <span>🔍</span>
        <span>🛒</span>
        <span>👤</span>
      </div>
    </nav>
  );
};

export default Navbar;
