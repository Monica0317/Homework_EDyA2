import React, { useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginWithEmail, loginWithGoogle, logout } from "./authSlice";
import styles from "../estilos/Auth.module.css"; 

const Auth = () => {
  const { user, isAuthenticated, loading, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginEmail = () => {
    if (email && password) {
      dispatch(loginWithEmail({ email, password }));
    }
  };

  const handleLoginGoogle = () => {
    dispatch(loginWithGoogle());
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const userName = useMemo(() => (user ? user.displayName || user.email : "Mónica"), [user]);

  return (
    <div className={`container ${styles.authContainer}`}>
      <div className={styles.authBox}>
        <h1 className={styles.authTitle}>Bienvenido, {userName}</h1>
        {!isAuthenticated ? (
          <>
            <div className={`mb-3 ${styles.inputGroup}`}>
              <input
                type="email"
                placeholder="Correo Electrónico"
                className={`form-control ${styles.authInput}`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Contraseña"
                className={`form-control ${styles.authInput}`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className={styles.buttonGroup}>
              <button
                className={`btn btn-primary ${styles.authButton}`}
                onClick={handleLoginEmail}
                disabled={loading}
              >
                Iniciar sesión con Email
              </button>
              <button
                className={`btn btn-danger ${styles.googleButton}`}
                onClick={handleLoginGoogle}
                disabled={loading}
              >
                Iniciar sesión con Google
              </button>
            </div>
          </>
        ) : (
          <button
            className={`btn btn-secondary ${styles.logoutButton}`}
            onClick={handleLogout}
          >
            Cerrar sesión
          </button>
        )}
        {error && <p className={`mt-3 ${styles.errorMessage}`}>{error}</p>}
      </div>
    </div>
  );
};

export default Auth;
