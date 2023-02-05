import React from "react";
import { BtnMedium } from "./../../../styles/BtnMedium";
import { LiCart } from "./ListStyles";

function ProductCard({ product, addToCart }) {
  return (
    <LiCart>
      <img src={product.img} alt={product.name} />
      <div>
        <h2>{product.name}</h2>
        <span>{product.category}</span>
        <h3>{`R$ ${product.price.toFixed(2).replace(".", ",")}`}</h3>
        <BtnMedium onClick={() => addToCart(product)}>Adicionar</BtnMedium>
      </div>
    </LiCart>
  );
}

export default ProductCard;
