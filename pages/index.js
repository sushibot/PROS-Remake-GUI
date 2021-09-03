import Layout from "../components/layout";
import { useFetchUser } from "../lib/user";
import { Card } from "../components/card";
function Home() {
  const { user, loading } = useFetchUser();

  return (
    <Layout user={user} loading={loading}>
      <ol
        style={{
          listStyle: "none",
          margin: "0",
          padding: "0",
          display: "flex",
          flexDirection: "row",

          overflowX: "auto",
        }}
      >
        <li>
          <Card></Card>
        </li>
        <li>
          <Card></Card>
        </li>
      </ol>

      {/* {loading && <p>Loading login info...</p>} */}

      {user && (
        <>
          <h4>Rendered user info on the client</h4>
          <img src={user.picture} alt="user picture" />
          <p>nickname: {user.nickname}</p>
          <p>name: {user.name}</p>
        </>
      )}
    </Layout>
  );
}

export default Home;
