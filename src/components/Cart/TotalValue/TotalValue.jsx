import React from "react";

function TotalValue({ setCartList, soma, removeCartTotal }) {
  return (
    <div>
      <h3>Valor Total: R$ {parseFloat(soma).toFixed(2).replace(".", ",")}</h3>

      <button onClick={() => removeCartTotal()}>Remover Todos</button>
    </div>
  );
}

export default TotalValue;
