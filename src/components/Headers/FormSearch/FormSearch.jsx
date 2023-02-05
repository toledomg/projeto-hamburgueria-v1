import React from "react";
import { useState } from "react";

import { StyledInput } from "../../../styles/InputStyles";
import { StyledForm } from "./../../../styles/FormStyles";
import { BtnMedium } from "./../../../styles/BtnMedium";

function FormSearch({ setSearch }) {
  const [searchValue, setSearchValue] = useState([]);

  const submit = (event) => {
    event.preventDefault();
    setSearch(searchValue);
    setSearchValue("");
  };

  return (
    <StyledForm onSubmit={submit}>
      <StyledInput
        type="text"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        placeholder="Digitar Pesquisa"
        aria-label="Digitar Pesquisa"
      />
      <BtnMedium>Pesquisar</BtnMedium>
    </StyledForm>
  );
}

export default FormSearch;
