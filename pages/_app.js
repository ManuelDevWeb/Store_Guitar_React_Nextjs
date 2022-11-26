import { useState, useEffect } from "react";

// Global styles
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  // Si el codigo es del servidor indicamos que no haga nada, si es del navegador obtenemos el valor de carrito del local storage y si no existe, asignamos arreglo vacio a la variable
  const carritoLocalStorage =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("carrito")) ?? []
      : [];

  // State para manejar el carrito
  const [carrito, setCarrito] = useState(carritoLocalStorage);
  // State para manejar que el documento este listo
  const [paginaLista, setPaginaLista] = useState(false);

  // useEffect que se ejecuta una sola vez
  useEffect(() => {
    setPaginaLista(true);
  }, []);

  // useEffect que se ejecuta cada que cambie el state carrito
  useEffect(() => {
    // Almacenamos en local storage
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

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
  const eliminarProducto = async (id) => {
    const carritoActualizado = carrito.filter(
      (productoState) => productoState.id !== id
    );

    // Actualizamos el state con el carrito actualizado
    setCarrito(carritoActualizado);

    // Almacenamos en local storage
    localStorage.setItem("carrito", JSON.stringify(carrito));
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
    localStorage.setItem("carrito", JSON.stringify(carrito));
  };

  // El state de paginaLista nos evita errores de hidratacion (Esto ocurre cuando la UI inicial no coincide con la renderizada)
  return paginaLista ? (
    <Component
      {...pageProps}
      carrito={carrito}
      agregarCarrito={agregarCarrito}
      eliminarProducto={eliminarProducto}
      actualizarCantidad={actualizarCantidad}
    />
  ) : null;
}

export default MyApp;
