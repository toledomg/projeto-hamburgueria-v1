import React from "react";
import ProductCard from "./../ProductCard/ProductCard";

function ProductList({ searchList, addToCart }) {
  return (
    <ul>
      {searchList.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </ul>
  );
}

export default ProductList;
