import React from "react";
import AddToCart from "./AddToCart";
import styles from "./ProductCard.module.css";

const ProductCard = () => {
  return (
    <div className={`${styles.card} bg-sky-50 hover:bg-sky-300`}>
      <AddToCart />
    </div>
  );
};

export default ProductCard;
