import Head from "next/head";

function Main({ children }) {
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

export default Main;
