// Components
import { Layout } from "../components/layout";
import { ListadoGuitarras } from "../components/listadoGuitarras";

// Styles
import styles from "../styles/grid.module.css";

// Consultando API

// Se recomienda StaticProps cuando la información no cambia en cada request: Una página informativa, documentación, trámites, anuncios.
// export async function getStaticProps() {
//   const res = await fetch(`${process.env.API_URL}/guitarras/?populate=imagen`);

//   const { data: guitarras } = await res.json();

//   console.log(guitarras);

//   return {
//     props: {
//       guitarras,
//     },
//   };
// }

// Se recomienda ServerSideProps cuando la información cambia de forma continua en cada request o donde la página se actualiza cada poco tiempo.
export async function getServerSideProps() {
  const res = await fetch(`${process.env.API_URL}/guitarras/?populate=imagen`);

  const { data: guitarras } = await res.json();

  return {
    props: {
      guitarras,
    },
  };
}

const Tienda = ({ guitarras }) => {
  return (
    <Layout
      title={"Tienda Virtual"}
      description={"Sobre Nosotros, GuitarLA, tienda de musica!"}
    >
      <main className="contenedor">
        <h1 className="heading">Nuestra Coleccion</h1>

        <div className={styles.grid}>
          <ListadoGuitarras guitarras={guitarras} />
        </div>
      </main>
    </Layout>
  );
};

export default Tienda;
