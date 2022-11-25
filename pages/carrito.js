// Components
import { Layout } from "../components/layout";

// Styles
import styles from "../styles/carrito.module.css";

const Carrito = () => {
  return (
    <Layout title="Carrito de Compras">
      <main className="contenedor">
        <h1 className="heading">Carrito</h1>

        <div>
          <div>
            <h2>Articulos</h2>
          </div>

          <aside>
            <h3>Resumen del Pedido</h3>
            <p>Total a pagar: </p>
          </aside>
        </div>
      </main>
    </Layout>
  );
};

export default Carrito;
