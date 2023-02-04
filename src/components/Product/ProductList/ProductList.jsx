import React from "react";
import ProductCard from "./../ProductCard/ProductCard";
import Vazio from "./../../Cart/CartVazio/Vazio/Vazio";

function ProductList({ searchList, addToCart, search, setSearch }) {
  return (
    <>
      {(search || []).length > 0 ? (
        <>
          {search && (
            <div>
              <p>Resultados de busca para: {search}</p>
              <button onClick={() => setSearch("")}>Limpar a busca</button>
            </div>
          )}
        </>
      ) : (
        <Vazio />
      )}

      <ul>
        {searchList.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </ul>
    </>
  );
}

export default ProductList;
