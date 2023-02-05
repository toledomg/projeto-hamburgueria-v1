import React from "react";
import ProductCard from "./../ProductCard/ProductCard";
import Vazio from "./../../Cart/CartVazio/Vazio/Vazio";
import { UlList } from "./ContainerList";

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

      <UlList>
        {searchList.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </UlList>
    </>
  );
}

export default ProductList;
