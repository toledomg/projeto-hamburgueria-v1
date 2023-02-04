import React from "react";
import { useState } from "react";

import styles from "./styles.module.css";
import logo from "../../assets/img/logo.svg";
import FormSearch from "./FormSearch/FormSearch";

function Headers({ productsList }) {
  const [search, setSearch] = useState([]);

  const searchList = productsList.filter((product) => {
    return search === "" ? true : product.name.toLowerCase().includes(search);
  });

  return (
    <header className={styles.Headers}>
      <div>
        <div className={styles.logo}>
          <img className="logo" src={logo} alt="logo-hamburgueria-kenzie" />
        </div>
        <FormSearch setSearch={setSearch} />
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
