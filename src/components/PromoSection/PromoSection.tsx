// src/components/PromoSection/PromoSection.tsx
import React from 'react';
import styles from './PromoSection.module.css';

const PromoSection: React.FC = () => {
  return (
    <section className={styles.promoSection}>
      <h2>Special Offers</h2>
      <p>Discover our limited-time discounts and save big on top products!</p>
      <button className={styles.promoButton}>See All Offers</button>
    </section>
  );
};

export default PromoSection;
