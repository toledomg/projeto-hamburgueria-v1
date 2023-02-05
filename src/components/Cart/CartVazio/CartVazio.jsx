import React from "react";
import { VazioH3, VazioSpan } from "./VazioStyles";

function CartVazio() {
  return (
    <>
      <VazioH3>Sua sacola está vazia</VazioH3>
      <VazioSpan>Adicione itens</VazioSpan>
    </>
  );
}

export default CartVazio;
