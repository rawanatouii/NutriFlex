// src/components/Footer/Footer.tsx
import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.links}>
        <li>Terms of Service</li>
        <li>Privacy Policy</li>
        <li>Contact</li>
      </ul>
      <p>&copy; 2024 NutriFlex</p>
    </footer>
  );
};

export default Footer;
