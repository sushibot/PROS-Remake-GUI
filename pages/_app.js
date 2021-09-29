import Layout from "../components/layout";
import { useFetchUser } from "../lib/user";
import { Card } from "../components/card";
import { Button } from "../components/button";
import "./css/index.css";
function Home() {
  const { user, loading } = useFetchUser();

  return (
    <Layout user={user} loading={loading}>
      <section
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "1rem",
        }}
      >
        <h4>Upcoming Events</h4>
        <Button text="View All"></Button>
      </section>

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
    </Layout>
  );
}

export default Home;
