import React from "react";

function CartList({ product, removeToCart }) {
  return (
    <li>
      <h3>{product.name}</h3>
      <h3>{`R$ ${product.price.toFixed(2).replace(".", ",")}`}</h3>
      {/* <span>{`Quantidade ${product.price}`}</span> */}
      <button onClick={() => removeToCart(product.id)}>Remover</button>
    </li>
  );
}

export default CartList;
