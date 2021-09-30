import Layout from "../components/layout";
import { useFetchUser } from "../lib/user";
import { Card } from "../components/card";
import { Button } from "../components/button";
import "./css/index.css";
function Home() {
  const { user, loading } = useFetchUser();

  return (
    <Layout user={user} loading={loading}>
      <ol>
        <li style={{ marginBottom: "2rem", padding: "1.5rem" }}>
          <section
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "2rem",
            }}
          >
            <h4>Upcoming Events</h4>
            <Button
              text="View All"
              text_color="#067a6f"
              background_color="#fafefd"
              border_color="#8DCEC3"
            />
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
        </li>
        <li
          style={{
            padding: "1.5rem",
            background: "#04201B",
            marginBottom: "1rem",
          }}
        >
          <section
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "2rem",
            }}
          >
            <h4 style={{ color: "white" }}>Announcements</h4>
            <Button
              text="View All"
              text_color="#0AC5B3"
              background_color="#091915"
              border_color="#0B544A"
            />
          </section>
          <ol>
            <li
              style={{
                borderBottom: "1px solid #0AC5B3",
                paddingBottom: "2rem",
                marginBottom: "2rem",
              }}
            >
              <section style={{ marginBottom: "1rem" }}>
                <h5 style={{ color: "#0AC5B3", marginBottom: "0.5rem" }}>
                  Park Closures and Updates
                </h5>
                <label style={{ color: "white" }}>June 24, 2021</label>
              </section>
              <section style={{ marginBottom: "0.5rem" }}>
                <p
                  style={{
                    color: "white",
                    lineHeight: "1.35rem",
                  }}
                >
                  As we get closer to 60% vaccination statewide, the Governor
                  and Mayor ...
                </p>
              </section>
              <section>
                <a style={{ color: "#0AC5B3", textDecoration: "underline" }}>
                  Read More
                </a>
              </section>
            </li>
            <li
              style={{
                borderBottom: "1px solid #0AC5B3",
                paddingBottom: "2rem",
                marginBottom: "2rem",
              }}
            >
              <section style={{ marginBottom: "1rem" }}>
                <h5 style={{ color: "#0AC5B3", marginBottom: "0.5rem" }}>
                  Park Closures and Updates
                </h5>
                <label style={{ color: "white" }}>June 24, 2021</label>
              </section>
              <section style={{ marginBottom: "0.5rem" }}>
                <p
                  style={{
                    color: "white",
                    lineHeight: "1.35rem",
                  }}
                >
                  As we get closer to 60% vaccination statewide, the Governor
                  and Mayor ...
                </p>
              </section>
              <section>
                <a style={{ color: "#0AC5B3", textDecoration: "underline" }}>
                  Read More
                </a>
              </section>
            </li>
            <li
              style={{
                borderBottom: "1px solid #0AC5B3",
                paddingBottom: "2rem",
              }}
            >
              <section style={{ marginBottom: "1rem" }}>
                <h5 style={{ color: "#0AC5B3", marginBottom: "0.5rem" }}>
                  Park Closures and Updates
                </h5>
                <label style={{ color: "white" }}>June 24, 2021</label>
              </section>
              <section style={{ marginBottom: "0.5rem" }}>
                <p
                  style={{
                    color: "white",
                    lineHeight: "1.35rem",
                  }}
                >
                  As we get closer to 60% vaccination statewide, the Governor
                  and Mayor ...
                </p>
              </section>
              <section>
                <a style={{ color: "#0AC5B3", textDecoration: "underline" }}>
                  Read More
                </a>
              </section>
            </li>
          </ol>
        </li>
      </ol>
    </Layout>
  );
}

export default Home;
