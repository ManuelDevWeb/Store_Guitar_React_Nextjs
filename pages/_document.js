import { Html, Head, Main, NextScript } from "next/document";

// Componente para agregar hojas de estilos externas, links y informacion meta
export default function Document() {
  return (
    <Html>
      <Head>
        {/* Informacion meta */}
        <meta
          name="description"
          content="GuitarLA - Venta de guitarras y blog de musica"
        />
        {/* Links y hojas de estilos externas */}
        {/* Normalize */}
        <link
          rel="stylesheet"
          href="https://necolas.github.io/normalize.css/8.0.1/normalize.css"
        />
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap"
        />
      </Head>

      <body>
        {/* Main invoca _app.js */}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
