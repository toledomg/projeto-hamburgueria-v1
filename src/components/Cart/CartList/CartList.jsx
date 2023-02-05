import React from "react";
import { LiCart } from "./Styles";

function CartList({ product, removeToCart }) {
  return (
    <LiCart>
      <img src={product.img} alt={product.name} />
      <div>
        <h3>{product.name}</h3>
        <span>{product.category}</span>
        {/* <h2>{`R$ ${product.price.toFixed(2).replace(".", ",")}`}</h2> */}
      </div>
      <button onClick={() => removeToCart(product.id)}>Remover</button>
    </LiCart>
  );
}

export default CartList;
