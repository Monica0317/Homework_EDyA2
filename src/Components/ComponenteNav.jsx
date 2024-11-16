import React from "react";
import { Link } from "react-router-dom";
import styles from "../estilos/Nav.module.css";

const ComponenteNav = () => {
  return (
    <nav className={`navbar navbar-expand-lg navbar-dark bg-dark ${styles.navbar}`}>
      <div className="container">
        <Link className="navbar-brand" to="/">
          Hola
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className={`navbar-nav ms-auto ${styles.navList}`}>
            <li className={` ${styles.nav}`}>
              <Link className="nav-link" to="/">
                Inicio
              </Link>
            </li>
            <li className={` ${styles.nav}`}>
              <Link className="nav-link" to="/about">
                Nosotros
              </Link>
            </li>
            <li className={` ${styles.nav}`}>
              <Link className="nav-link" to="/login">
                Iniciar Sesión
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default ComponenteNav;
