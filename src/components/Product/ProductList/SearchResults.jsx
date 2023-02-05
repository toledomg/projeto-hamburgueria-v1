import React from "react";
import { DivSearch } from "./SearchStyles";

function SearchResults({ search, setSearch }) {
  return (
    <DivSearch>
      <div>
        <h2>Resultados de busca para:</h2>
        <h3>{search}</h3>
      </div>
      <button onClick={() => setSearch("")}>Limpar a busca</button>
    </DivSearch>
  );
}

export default SearchResults;
