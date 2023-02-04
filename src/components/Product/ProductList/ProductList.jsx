import React from "react";
import ProductCard from "../ProductCard/ProductCard";

function ProductList({ productsList, addToCart }) {
  return (
    <ul>
      {productsList.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </ul>
  );
}

export default ProductList;
