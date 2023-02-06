import React from "react";
import { DivSearch } from "./SearchStyles";

function SearchResults({ search, setSearch }) {
  return (
    <DivSearch>
      <div>
        <h2>Resultados para:</h2>
        <h3>{search}</h3>
      </div>
      <button onClick={() => setSearch("")}>Todos</button>
    </DivSearch>
  );
}

export default SearchResults;
