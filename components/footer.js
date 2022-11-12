// Components
import { Navegacion } from "./navegacion";

// Styles
import styles from "../styles/footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`contenedor ${styles.contenido}`}>
        <Navegacion />
        <p>
          Todos los derechos reservados {new Date().getFullYear()} @ManuelDevWeb
        </p>
      </div>
    </footer>
  );
};

export { Footer };
