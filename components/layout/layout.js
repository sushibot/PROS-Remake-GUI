import Head from "next/head";

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>PROS Remake</title>
      </Head>

      {/* <Header user={user} loading={loading} /> */}

      <main>
        <div className="container">{children}</div>
      </main>

      <style jsx>{`
        .container {
          max-width: 42rem;
          margin: 0 auto;
        }
      `}</style>
      <style jsx global>{`
        body {
          margin: 0;
          color: #333;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        }
      `}</style>
    </>
  );
}

export default Layout;