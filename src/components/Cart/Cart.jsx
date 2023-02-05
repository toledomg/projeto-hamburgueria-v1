import React from "react";
import CartList from "./CartList/CartList";
import CartVazio from "./CartVazio/CartVazio";
import TotalValue from "./TotalValue/TotalValue";
import { DivCart, UlCart } from "./CartStyles";

function Cart({ cartList, setCartList, soma, removeToCart, removeCartTotal }) {
  return (
    <DivCart>
      <section>
        <h1>Carrinho de Compras</h1>
      </section>
      <UlCart>
        {(cartList || []).length > 0 ? (
          <>
            {cartList.map((product) => (
              <CartList
                key={product.id}
                product={product}
                removeToCart={removeToCart}
              />
            ))}
            <TotalValue
              soma={Number(soma)}
              setCartList={setCartList}
              removeCartTotal={removeCartTotal}
            />
          </>
        ) : (
          <CartVazio />
        )}
      </UlCart>
    </DivCart>
  );
}

export default Cart;
