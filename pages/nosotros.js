import Image from "next/image";

// Components
import { Layout } from "../components/layout";

// Styles
import styles from "../styles/nosotros.module.css";

const Nosotros = () => {
  return (
    <Layout
      title={"Nosotros"}
      description={"Sobre Nosotros, GuitarLA, tienda de musica!"}
    >
      <main className="contenedor">
        <h1 className="heading">Nosotros</h1>

        <div className={styles.contenido}>
          <Image
            src="/img/nosotros.jpg"
            width={1000}
            height={800}
            alt="Imagen sobre nosotros"
          />
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu
              aliquet leo, ut consectetur risus. Donec faucibus ultrices felis,
              eget malesuada lacus auctor et. Donec nisl magna, feugiat eget
              magna in, posuere dapibus libero. Integer semper purus eget orci
              eleifend convallis. Nunc congue sollicitudin pellentesque. Nullam
              eu massa ipsum.
            </p>
            <p>
              Nullam id tellus ultrices enim elementum aliquam sit amet id urna.
              Proin luctus turpis augue, id feugiat risus iaculis eget. Praesent
              pellentesque elit vitae ligula dictum, in hendrerit enim iaculis.
              Vivamus in nisi imperdiet, mattis nulla id, dapibus diam. Sed at
              faucibus sapien.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Nosotros;
