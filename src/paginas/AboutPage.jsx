import React from "react";
import styles from "../estilos/About.module.css";

const AboutPage = () => {
  return (
    <div className={`min-vh-100 min-vw-100 justify-content-center ${styles.container}`}>
      <div className={`text-center ${styles.aboutContainer}`}>
        <h1 className={`display-4 ${styles.aboutTitle}`}>Nosotros</h1>
        <p className={`lead ${styles.aboutDescription}`}>
        Estamos comprometidos a brindar soluciones innovadoras y servicios de calidad para garantizar la satisfacción de nuestros usuarios. Descubre más sobre nuestra visión, misión y cómo trabajamos para superar expectativas.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
