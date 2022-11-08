import Link from "next/link";

// Components
import { Layout } from "../components/layout";

export default function Home() {
  return (
    <Layout
      title={"Inicio"}
      description={"Blog se musica, venta de guitarras y mucho mas!"}
    >
      <h1>Hola mundo en Nextjs</h1>
      <Link href="/nosotros">Ir a Nosotros</Link>
    </Layout>
  );
}
