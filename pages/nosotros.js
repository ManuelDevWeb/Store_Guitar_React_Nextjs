import Link from "next/link";

// Components
import { Layout } from "../components/layout";

const Nosotros = () => {
  return (
    <Layout
      title={"Nosotros"}
      description={"Sobre Nosotros, GuitarLA, tienda de musica!"}
    >
      <h1>Desde Nosotros</h1>
      <Link href="/">Ir a Inicio!</Link>
    </Layout>
  );
};

export default Nosotros;
