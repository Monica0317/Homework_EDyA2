import React from "react";
import styles from "../estilos/Login.module.css";

const LoginPage = () => {
  return (
    <div className={`min-vh-100 min-vw-100 justify-content-center ${styles.page}`}>
      <div className={`card ${styles.container}`}>
        <h1 className={`h3 mb-4 text-center ${styles.title}`}>Iniciar Sesión</h1>
        <form className={`d-flex flex-column ${styles.form}`}>
          <input
            type="email"
            placeholder="Correo electrónico"
            className={`form-control mb-3 ${styles.input}`}
          />
          <input
            type="password"
            placeholder="Contraseña"
            className={`form-control mb-3 ${styles.input}`}
          />
          <button className={`btn ${styles.button}`}>Ingresar</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
