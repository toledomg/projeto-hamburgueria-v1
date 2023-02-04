import React from "react";
import { useState } from "react";

import styles from "./styles.module.css";
import logo from "../../assets/img/logo.svg";
import FormSearch from "./FormSearch/FormSearch";

function Headers({ productsList, search, setSearch, searchList }) {
  const [products, setProducts] = useState([]);

  return (
    <header className={styles.Headers}>
      <div>
        <div className={styles.logo}>
          <img className="logo" src={logo} alt="logo-hamburgueria-kenzie" />
        </div>
        <FormSearch setSearch={setSearch} />
        {console.log(search)}
        {console.log(searchList)}
        {search && (
          <div>
            <p>Resultados de busca para: {search}</p>
            <button onClick={() => setSearch("")}>Limpar a busca</button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Headers;
