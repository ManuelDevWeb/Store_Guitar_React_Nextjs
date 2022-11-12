import Image from "next/image";

// Components
import { Navegacion } from "./navegacion";

// Styles
import styles from "../styles/header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`contenedor ${styles.barra}`}>
        <Image
          src="/img/logo.svg"
          width={300}
          height={40}
          alt="Imagen logotipo"
        />

        <Navegacion />
      </div>
    </header>
  );
};

export { Header };
