import React from "react";
import { Link } from "react-router-dom";
import styles from "../estilos/Nav.module.css";
import { useAuth } from "../Context/AuthContext";

const ComponenteNav = () => {
  const { state, dispatch } = useAuth();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  const navItems = [
    { id: 1, name: "Inicio", path: "/" },
    { id: 2, name: "Nosotros", path: "/about" },
    { id: 3, name: "Privado", path: "/private" },
  ];

  return (
    <nav className={`navbar navbar-expand-lg ${styles.navbar}`}>
      <div className="container">
        <Link className={`navbar-brand ${styles.brand}`} to="/">
       Hola
       <span className={`nav-link ${styles.username}`}>
                 {state.username}
             </span>
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
            {navItems.map((item) => (
              <li key={item.id} className="nav-item">
                <Link className={`nav-link ${styles.navLink}`} to={item.path}>
                  {item.name}
                </Link>
              </li>
            ))}
            {!state.isAuthenticated && (
              <li className="nav-item">
                <Link className={`nav-link ${styles.navLink}`} to="/login">
                  Iniciar Sesión
                </Link>
              </li>
            )}
            {state.isAuthenticated && (
              <li className="nav-item">
                <button
                  className={`btn btn-link nav-link ${styles.logoutButton}`}
                  onClick={handleLogout}
                >
                  Cerrar Sesión
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default ComponenteNav;
