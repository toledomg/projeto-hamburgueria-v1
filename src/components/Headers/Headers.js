import React from "react";

import styles from "./styles.module.css";
import logo from "../../assets/img/logo.svg";

function Headers() {
  return (
    <header className={styles.Headers}>
      <div>
        <div className={styles.logo}>
          <img className="logo" src={logo} alt="logo-hamburgueria-kenzie" />
        </div>
        <div className={styles.pesquisa}>
          <input
            type="text"
            placeholder="Digitar Pesquisa"
            aria-label="Digitar Pesquisa"
          />
          <button className="btnMedium">Pesquisar</button>
        </div>
      </div>
    </header>
  );
}

export default Headers;
