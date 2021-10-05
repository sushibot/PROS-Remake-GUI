import Head from "next/head";

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>PROS Remake</title>
      </Head>

      {/* <Header user={user} loading={loading} /> */}

      <main>
        <div>{children}</div>
      </main>
    </>
  );
}

export default Layout;
