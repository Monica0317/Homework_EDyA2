import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import styles from "../estilos/Login.module.css";

const LoginPage = () => {
  const { dispatch, state } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const lastPage = location.state?.from?.pathname || state.lastPage || "/";

  const handleLogin = () => {
    dispatch({ type: "LOGIN", payload: { username: "Mónica" } });
    dispatch({ type: "SET_LAST_PAGE", payload: lastPage });
    navigate(lastPage, { replace: true });
  };

  return (
    <div className={`min-vh-100 min-vw-100 justify-content-center ${styles.loginPage}`}>
      <div className={`text-center p-4 rounded shadow ${styles.loginContainer}`}>
        <h1 className={`mb-4 ${styles.loginTitle}`}>Bienvenido de nuevo</h1>
        <button className={`btn btn-primary w-100 ${styles.loginButton}`} onClick={handleLogin}>
          Acceder
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
