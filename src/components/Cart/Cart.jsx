import React from "react";
import CartList from "./CartList/CartList";
import CartVazio from "./CartVazio/CartVazio";
import TotalValue from "./TotalValue/TotalValue";

function Cart({ cartList, removeToCart, soma }) {
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
            <TotalValue soma={Number(soma)} />
          </>
        ) : (
          <CartVazio />
        )}
      </ul>
    </div>
  );
}

export default Cart;
