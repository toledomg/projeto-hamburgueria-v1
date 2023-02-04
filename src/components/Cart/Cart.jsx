import React from "react";
import CartList from "./CartList/CartList";
import CartVazio from "./CartVazio/CartVazio";
import TotalValue from "./TotalValue/TotalValue";

function Cart({ cartList, removeToCart }) {
  return (
    <div>
      <h1>Carrinho de Compras</h1>
      <ul>
        {(cartList || []).length > 0 ? (
          <>
            {cartList.map((product) => (
              <CartList
                key={product.id}
                product={product}
                removeToCart={removeToCart}
              />
            ))}
            <TotalValue />
          </>
        ) : (
          <CartVazio />
        )}
      </ul>
    </div>
  );
}

export default Cart;
