import React from "react";
import { useState } from "react";

import logo from "../../assets/img/logo.svg";
import FormSearch from "./FormSearch/FormSearch";
import { StyleHeaders } from "./../../styles/HeaderStyles";

function Headers({ productsList, search, setSearch, searchList }) {
  return (
    <StyleHeaders>
      <div>
        <div>
          <img className="logo" src={logo} alt="logo-hamburgueria-kenzie" />
        </div>
        <FormSearch setSearch={setSearch} />
        {/* {search && (
          <div>
            <p>Resultados de busca para: {search}</p>
            <button onClick={() => setSearch("")}>Limpar a busca</button>
          </div>
        )} */}
      </div>
    </StyleHeaders>
  );
}

export default Headers;
