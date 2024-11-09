// src/components/ProductGrid/ProductCard.tsx
import React from 'react';
import styles from './ProductCard.module.css';

interface Product {
  id: number;
  name: string;
  price: string;
  imageUrl: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className={styles.productCard}>
      <img src={product.imageUrl} alt={product.name} className={styles.image} />
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <button className={styles.addButton}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
