import Head from "next/head";

// Components
import { Header } from "./header";
import { Footer } from "./footer";

const Layout = ({ children, title = "", description = "" }) => {
  return (
    <>
      {/* Informacion meta */}
      <Head>
        <title>{`GuitarLA - ${title}`}</title>
        <meta name="description" content={description} />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export { Layout };
