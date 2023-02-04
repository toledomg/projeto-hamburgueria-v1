import React from "react";

function ProductCard({ product, addToCart }) {
  return (
    <li>
      <img src={product.img} alt={product.name} />
      <h3>{product.name}</h3>
      <h3>{product.category}</h3>
      <h3>{`R$ ${product.price.toFixed(2).replace(".", ",")}`}</h3>
      <button onClick={() => addToCart(product)}>Adicionar</button>
    </li>
  );
}

export default ProductCard;
