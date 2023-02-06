import React from "react";
import { DivSearch } from "./SearchStyles";
import SearchVazio from "./SearchVazio";

function SearchResults({ search, setSearch, searchList }) {
  return (
    <>
      {(searchList || []).length > 0 ? (
        <>
          <DivSearch>
            <div>
              <h2>Resultados para:</h2>
              <h3>{search}</h3>
            </div>
            <button onClick={() => setSearch("")}>Todos</button>
          </DivSearch>
        </>
      ) : (
        <SearchVazio />
      )}
    </>
  );
}

export default SearchResults;
