import Link from "next/link";

// Components
import { Layout } from "../components/layout";

const Page404 = () => {
  return (
    <Layout title="Pagina no Encontrada">
      <p className="error">Pagina no Encontrada</p>
      <Link href="/" className="error-enlace">
        Ir a Inicio
      </Link>
    </Layout>
  );
};

export default Page404;
