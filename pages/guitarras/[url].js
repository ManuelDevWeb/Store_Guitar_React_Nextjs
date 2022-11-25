import { useState } from "react";
import Image from "next/image";

// Components
import { Layout } from "../../components/layout";

// Styles
import styles from "../../styles/guitarras.module.css";

// Consultando API

// Se recomienda ServerSideProps cuando la información cambia de forma continua en cada request o donde la página se actualiza cada poco tiempo.
// Los datos se pasan automaticamente (trae la info de la url)
// export async function getServerSideProps(datos) {
//   const {
//     query: { url },
//   } = datos;

//   const res = await fetch(
//     `${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`
//   );

//   const { data } = await res.json();

//   return {
//     props: {
//       guitarra: data,
//     },
//   };
// }

// Se utiliza StaticPaths cuando la info a consultar genera una nueva pagina, la data se le pasa a getStaticProps
export async function getStaticPaths() {
  // Identificamos cuantas paginas vamos a generar y de donde vienen
  const res = await fetch(`${process.env.API_URL}/guitarras`);

  const { data } = await res.json();

  const paths = data.map((guitarra) => ({
    params: {
      url: guitarra.attributes.url,
    },
  }));

  return {
    paths,
    // Genera pagina 404 cuando no existe el elemento
    fallback: false,
  };
}

// Se utiliza StaticProps cuando la información no cambia en cada request: Una página informativa, documentación, trámites, anuncios.
// Los datos vienen desde getStaticPath
export async function getStaticProps(datos) {
  const {
    params: { url },
  } = datos;

  const res = await fetch(
    `${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`
  );

  const { data } = await res.json();

  return {
    props: {
      guitarra: data,
    },
  };
}

// Recibimos props y funciones del context que esta en _app.js
const Producto = ({
  guitarra,
  agregarCarrito,
  eliminarProducto,
  actualizarCantidad,
}) => {
  const { nombre, descripcion, imagen, precio } = guitarra[0].attributes;

  // State que controla la cantidad de elementos a comprar
  const [cantidad, setCantidad] = useState(0);

  // Funcion que se ejecuta al enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    if (cantidad < 1) {
      alert("Cantidad no valida");
      return;
    }

    // Construimos un objeto con la guitarra seleccionada
    const guitarraSeleccionada = {
      id: guitarra[0].id,
      imagen: imagen.data.attributes.url,
      nombre,
      precio,
      cantidad,
    };

    // Enviamos el objeto seleccionado al context
    agregarCarrito(guitarraSeleccionada);
  };

  return (
    <Layout
      title={`Guitarra ${nombre}`}
      description={`Guitarras, Cursos y Mucho mas!`}
    >
      <div className={styles.guitarra}>
        <Image
          src={imagen.data.attributes.url}
          width={600}
          height={400}
          alt={`Imagen guitarra ${nombre}`}
        />

        <div className={styles.contenido}>
          <h3>{nombre}</h3>
          <p className={styles.descripcion}>{descripcion}</p>
          <p className={styles.precio}>${precio}</p>

          <form className={styles.formulario} onSubmit={handleSubmit}>
            <label htmlFor="cantidad">Cantidad: </label>
            <select
              id="cantidad"
              // El caracter + lo convierte en number
              onChange={(e) => setCantidad(+e.target.value)}
            >
              <option value="0">-- Seleccione -- </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <input type="submit" value="Agregar al carrito" />
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Producto;
