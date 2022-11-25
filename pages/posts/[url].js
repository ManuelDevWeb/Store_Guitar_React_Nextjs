import Image from "next/image";

// Components
import { Layout } from "../../components/layout";

// Helpers
import { formatearFecha } from "../../utils/helpers";

// Styles
import styles from "../../styles/blog.module.css";

// Consultando API

// Tambien podemos utilizar unicamente ServerSideProps

// Se utiliza StaticPaths cuando la info a consultar genera una nueva pagina, la data se le pasa a getStaticProps
export async function getStaticPaths() {
  // Identificamos cuantas paginas vamos a generar y de donde vienen
  const res = await fetch(`${process.env.API_URL}/posts`);

  const { data } = await res.json();

  const paths = data.map((post) => ({
    params: {
      url: post.attributes.url,
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
    `${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`
  );

  const { data } = await res.json();

  return {
    props: {
      post: data,
    },
  };
}

const Post = ({ post }) => {
  const { contenido, imagen, titulo, publishedAt } = post[0].attributes;

  return (
    <Layout>
      <article className={`${styles.post} ${styles["mt-3"]}`}>
        <Image
          src={imagen.data.attributes.url}
          width={1000}
          height={400}
          alt={`Imagen blog ${titulo}`}
        />
        <div className={styles.contenido}>
          <h3>{titulo}</h3>
          <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
          <p className={styles.resumen}>{contenido}</p>
        </div>
      </article>
    </Layout>
  );
};

export default Post;
