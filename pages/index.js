// Components
import { Layout } from "../components/layout";
import { ListadoGuitarras } from "../components/listadoGuitarras";
import { Post } from "../components/post";
import { Curso } from "../components/curso";

// Styles
import styles from "../styles/grid.module.css";

// Consultando API

// Se recomienda StaticProps cuando la información no cambia en cada request: Una página informativa, documentación, trámites, anuncios.
// Tambien se usa StaticProps porque no estamos usando routing dinamico
export async function getStaticProps() {
  const urlGuitarras = `${process.env.API_URL}/guitarras?populate=imagen`;
  const urlPosts = `${process.env.API_URL}/posts?populate=imagen`;
  const urlCurso = `${process.env.API_URL}/curso?populate=imagen`;

  // Resolvemos las promesas
  const [resGuitarras, resPosts, resCurso] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlPosts),
    fetch(urlCurso),
  ]);

  // Los resultados vienen como data, los renombramos a guitarras y posts
  const [{ data: guitarras }, { data: posts }, { data: curso }] =
    await Promise.all([resGuitarras.json(), resPosts.json(), resCurso.json()]);

  return {
    props: {
      guitarras,
      posts,
      curso,
    },
  };
}

export default function Home({ guitarras, posts, curso }) {
  return (
    <Layout
      title={"Inicio"}
      description={"Blog se musica, venta de guitarras y mucho mas!"}
    >
      <main className="contenedor">
        <h1 className="heading">Nuestra Coleccion</h1>
        <div className={styles.grid}>
          <ListadoGuitarras guitarras={guitarras} />
        </div>
      </main>

      <Curso curso={curso.attributes} />

      <section className="contenedor">
        <h2 className="heading">Blog</h2>
        <div className={styles.grid}>
          {posts?.map((post) => (
            <Post key={post.id} post={post.attributes} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
