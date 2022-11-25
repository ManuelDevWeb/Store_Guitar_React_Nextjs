// Styles
import styles from "../styles/curso.module.css";

const Curso = ({ curso }) => {
  const { imagen, contenido, titulo } = curso;

  return (
    // Agregamos una clase, con jsx damos estilos css y pasamos la variable imagen para el background
    <section className={`${styles.curso} imgCurso`}>
      <style jsx>{`
        .imgCurso {
          background-image: linear-gradient(
              to right,
              rgb(0 0 0 / 0.65),
              rgb(0 0 0 / 0.7)
            ),
            url(${imagen.data?.attributes?.url});
        }
      `}</style>
      <div className={`contenedor ${styles.grid}`}>
        <div className={styles.contenido}>
          <h2 className="heading">{titulo}</h2>
          <p>{contenido}</p>
        </div>
      </div>
    </section>
  );
};

export { Curso };
