import Link from "next/link";
import { useRouter } from "next/router";

const Navegacion = () => {
  // useRouter permite acceder a la info de la URL
  const router = useRouter();

  return (
    <nav className="navegacion">
      <Link href="/" className={router.pathname === "/" ? "active" : ""}>
        Inicio
      </Link>
      <Link
        href="/nosotros"
        className={router.pathname === "/nosotros" ? "active" : ""}
      >
        Nosotros
      </Link>
      <Link
        href="/blog"
        className={router.pathname === "/blog" ? "active" : ""}
      >
        Blog
      </Link>
      <Link
        href="/tienda"
        className={router.pathname === "/tienda" ? "active" : ""}
      >
        Tienda
      </Link>
    </nav>
  );
};

export { Navegacion };
