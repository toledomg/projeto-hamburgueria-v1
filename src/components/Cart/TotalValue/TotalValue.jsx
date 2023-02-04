import React from "react";

function TotalValue({ soma }) {
  return (
    <div>
      <h3>Valor Total: R$ {parseFloat(soma).toFixed(2).replace(".", ",")}</h3>
    </div>
  );
}

export default TotalValue;
