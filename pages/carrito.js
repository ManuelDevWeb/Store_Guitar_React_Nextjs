import { useEffect, useState } from "react";
import Image from "next/image";

// Components
import { Layout } from "../components/layout";

// Styles
import styles from "../styles/carrito.module.css";

// Recibimos props y funciones del context que esta en _app.js
const Carrito = ({ carrito, actualizarCantidad, eliminarProducto }) => {
  // State para manejar el total a pagar
  const [total, setTotal] = useState(0);

  // useEffect que se ejecuta cada que cambie carrito
  useEffect(() => {
    const calculoTotal = carrito.reduce(
      (total, producto) => total + producto.cantidad * producto.precio,
      0
    );
    setTotal(calculoTotal);
  }, [carrito]);

  return (
    <Layout title="Carrito de Compras">
      <main className="contenedor">
        <h1 className="heading">Carrito</h1>

        <div className={styles.contenido}>
          <div className={styles.carrito}>
            <h2>Articulos</h2>
            {carrito.length === 0
              ? "Carrito vacio"
              : carrito.map((producto) => (
                  <div key={producto.id} className={styles.producto}>
                    <div>
                      <Image
                        width={250}
                        height={480}
                        src={producto.imagen}
                        alt={`Imagen ${producto.nombre}`}
                      />
                    </div>
                    <div>
                      <p className={styles.nombre}>{producto.nombre}</p>

                      <div className={styles.cantidad}>
                        <p>Cantidad:</p>

                        <select
                          className={styles.select}
                          // Se actualiza la cantidad del producto cada que cambie el select
                          onChange={(e) =>
                            actualizarCantidad({
                              id: producto.id,
                              cantidad: e.target.value,
                            })
                          }
                          value={producto.cantidad}
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </div>

                      <p className={styles.precio}>
                        $<span>{producto.precio}</span>
                      </p>
                      <p className={styles.subtotal}>
                        Subtotal: $
                        <span>{producto.precio * producto.cantidad}</span>
                      </p>
                    </div>

                    <button
                      className={styles.eliminar}
                      type="button"
                      onClick={() => eliminarProducto(producto.id)}
                    >
                      X
                    </button>
                  </div>
                ))}
          </div>

          <aside className={styles.resumen}>
            <h3>Resumen del Pedido</h3>
            <p>Total a pagar: ${total}</p>
          </aside>
        </div>
      </main>
    </Layout>
  );
};

export default Carrito;
