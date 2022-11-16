// Components
import { Guitarra } from "./guitarra";

const ListadoGuitarras = ({ guitarras }) => {
  return guitarras?.map((guitarra) => (
    <Guitarra key={guitarra.id} guitarra={guitarra.attributes} />
  ));
};

export { ListadoGuitarras };
