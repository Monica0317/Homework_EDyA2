import React from "react";
import styles from "../estilos/Home.module.css";

const HomePage = () => {
  return (
    <div className={`min-vh-100 min-vw-100 justify-content-center ${styles.fullScreen}`}>
      <div className={`d-flex flex-column justify-content-center align-items-center ${styles.pageContainer}`}>
        <h1 className={`display-3  ${styles.title}`}>Bienvenido</h1>
        <p className={`fs-4  ${styles.subtitle}`}>Disfruta de nuestra pagina</p>
      </div>
    </div>
  );
};

export default HomePage;
