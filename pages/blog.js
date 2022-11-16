// Components
import { Layout } from "../components/layout";
import { Post } from "../components/post";

// Styles
import styles from "../styles/grid.module.css";

// Consultando API

// Se recomienda StaticProps cuando la información no cambia en cada request: Una página informativa, documentación, trámites, anuncios.
export async function getStaticProps() {
  const res = await fetch(`${process.env.API_URL}/posts/?populate=imagen`);

  const { data: posts } = await res.json();

  return {
    props: {
      posts,
    },
  };
}

const Blog = ({ posts }) => {
  return (
    <Layout
      title={"Blog"}
      description={"Sobre Nosotros, GuitarLA, tienda de musica!"}
    >
      <main className="contenedor">
        <h2 className="heading">Blog</h2>
        <div className={styles.grid}>
          {posts?.map((post) => (
            <Post key={post.id} post={post.attributes} />
          ))}
        </div>
      </main>
    </Layout>
  );
};

export default Blog;
