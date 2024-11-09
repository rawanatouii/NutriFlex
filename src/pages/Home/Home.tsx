// src/pages/HomePage.tsx
import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import ProductGrid from '../../components/ProductGrid/ProductGrid';
import Footer from '../../components/Footer/Footer';

const HomePage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <HeroBanner />
      <ProductGrid />
      <Footer />
    </div>
  );
};

export default HomePage;
