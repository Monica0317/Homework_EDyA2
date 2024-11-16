import React from "react";
import styles from "../estilos/Private.module.css";

const PrivatePage = () => {
  return (
    <div className={`min-vh-100 min-vw-100 justify-content-center ${styles.privatePage}`}>
      <div className={`text-center ${styles.content}`}>
        <h1 className={styles.title}>Acceso Privado</h1>
        <p className={styles.message}>
          Esta página está reservada para usuarios autenticados. ¡Bienvenido a la experiencia premium de nuestra aplicación!
        </p>
        <p className={styles.note}>
          Disfruta del contenido exclusivo y funciones especiales diseñadas solo para ti.
        </p>
      </div>
    </div>
  );
};

export default PrivatePage;
