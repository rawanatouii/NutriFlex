// src/components/HeroBanner/HeroBanner.tsx
import React from 'react';
import styles from './HeroBanner.module.css';

const HeroBanner: React.FC = () => {
  return (
    <section className={styles.heroBanner}>
      <div className={styles.content}>
        <h1>Vie ta nouvelle expérience avec nos réductions Black Friday.</h1>
      </div>
    </section>
  );
};

export default HeroBanner;
