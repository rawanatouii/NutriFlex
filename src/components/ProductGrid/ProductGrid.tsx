// src/components/ProductGrid/ProductGrid.tsx
import React from 'react';
import ProductCard from './ProductCard';
import styles from './ProductGrid.module.css';

const products = [
  { id: 1, name: 'Protein Bar', price: '€10', imageUrl: require('./product1.jpg') },
  { id: 1, name: 'Protein Bar', price: '€10', imageUrl: require('./product1.jpg') },
  { id: 1, name: 'Protein Bar', price: '€10', imageUrl: require('./product1.jpg') },
  { id: 1, name: 'Protein Bar', price: '€10', imageUrl: require('./product1.jpg') },
];

const ProductGrid: React.FC = () => {
  return (
    <section className={styles.productGrid}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
};

export default ProductGrid;
