import Head from "next/head";

const Layout = ({ children, title = "", description = "" }) => {
  return (
    <>
      {/* Informacion meta */}
      <Head>
        <title>{`GuitarLA - ${title}`}</title>
        <meta name="description" content={description} />
      </Head>
      <h1>Desde layout</h1>
      {children}
    </>
  );
};

export { Layout };
