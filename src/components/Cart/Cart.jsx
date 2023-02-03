import React from "react";
import CartList from "./../CartList/CartList";

function Cart({ cartList, removeToCart }) {
  return (
    <div>
      <h1>Carrinho de Compras</h1>
      <ul>
        {cartList.map((product) => (
          <CartList
            key={product.id}
            product={product}
            removeToCart={removeToCart}
          />
        ))}
      </ul>
    </div>
  );
}

export default Cart;
