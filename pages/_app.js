import { useState } from "react";

// Global styles
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  // State para manejar el carrito
  const [carrito, setCarrito] = useState([]);

  // Funciones que vamos a compartir al contexto MyApp

  // Funcion para agregar producto al carrito
  const agregarCarrito = (producto) => {
    // Validamos si la guitarra ya esta en el carrito
    if (carrito.some((productoState) => productoState.id === producto.id)) {
      // Si el producto ya existe, actualizamos cantidad
      const carritoActualizado = carrito.map((productoState) => {
        if (productoState.id === producto.id) {
          productoState.cantidad = parseInt(producto.cantidad);
        }
        return productoState;
      });
      // Actualizamos el state con el carrito actualizado
      setCarrito([...carritoActualizado]);
      // Almacenamos en local storage
      localStorage.setItem("carrito", JSON.stringify(carrito));
    } else {
      // Si no existe en el carrito, significa que es nueva y la agregamos
      setCarrito([...carrito, producto]);
      // Almacenamos en local storage
      localStorage.setItem("carrito", JSON.stringify(carrito));
    }
  };

  // Funcion para eliminar producto del carrito
  const eliminarProducto = (id) => {
    // Obtenemos la posicion del elemento
    const indexElement = carrito.findIndex(
      (productoState) => productoState.id === id
    );

    if (indexElement === -1) {
      alert("Producto no existe");
    }

    // Eliminamos el elemento
    const carritoActualizado = carrito.slice(indexElement, 1);

    // Actualizamos el state con el carrito actualizado
    setCarrito(carritoActualizado);

    // Almacenamos en local storage
    window.localStorage.setItem("carrito", JSON.stringify(carrito));
  };

  // Funcion para actualizar cantidad producto del carrito
  const actualizarCantidad = (producto) => {
    const carritoActualizado = carrito.map((productoState) => {
      if (productoState.id === producto.id) {
        productoState.cantidad = parseInt(producto.cantidad);
      }
      return productoState;
    });

    // Actualizamos el state con el carrito actualizado
    setCarrito(carritoActualizado);

    // Almacenamos en local storage
    window.localStorage.setItem("carrito", JSON.stringify(carrito));
  };

  return (
    <Component
      {...pageProps}
      carrito={carrito}
      agregarCarrito={agregarCarrito}
      eliminarProducto={eliminarProducto}
      actualizarCantidad={actualizarCantidad}
    />
  );
}

export default MyApp;
