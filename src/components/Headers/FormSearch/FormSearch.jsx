import React from "react";
import { useState } from "react";
import styles from "./styles.module.css";

function FormSearch({ setSearch }) {
  const [searchValue, setSearchValue] = useState([]);

  const submit = (event) => {
    event.preventDefault();
    setSearch(searchValue);
    setSearchValue("");
  };

  return (
    <form className={styles.pesquisa} onSubmit={submit}>
      <input
        type="text"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        placeholder="Digitar Pesquisa"
        aria-label="Digitar Pesquisa"
      />
      <button className="btnMedium">Pesquisar</button>
    </form>
  );
}

export default FormSearch;
