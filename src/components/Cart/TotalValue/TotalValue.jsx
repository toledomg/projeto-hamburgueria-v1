import React from "react";
import { DivTotal } from "./styles";

function TotalValue({ setCartList, soma, removeCartTotal }) {
  return (
    <DivTotal>
      <div>
        <h3>Total</h3>
        <h2>R$ {parseFloat(soma).toFixed(2).replace(".", ",")}</h2>
      </div>
      <button onClick={() => removeCartTotal()}>Remover Todos</button>
    </DivTotal>
  );
}

export default TotalValue;
