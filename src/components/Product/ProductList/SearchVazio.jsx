import React from "react";
import { DivSearch } from "./SearchStyles";

function SearchVazio({ search, setSearch }) {
  return (
    <DivSearch>
      <section>
        <h2>Sua pesquisa não retornou resultados</h2>
      </section>
    </DivSearch>
  );
}

export default SearchVazio;
