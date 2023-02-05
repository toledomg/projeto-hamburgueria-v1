import React from "react";
import ProductCard from "./../ProductCard/ProductCard";
import Vazio from "./../../Cart/CartVazio/Vazio/Vazio";
import { UlList } from "./ContainerList";
import SearchResults from "./SearchResults";

function ProductList({ searchList, addToCart, search, setSearch }) {
  return (
    <>
      {(search || []).length > 0 ? (
        <>{search && <SearchResults search={search} setSearch={setSearch} />}</>
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
