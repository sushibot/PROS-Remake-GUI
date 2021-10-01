import Layout from "../components/layout";
import { useFetchUser } from "../lib/user";
import { Card } from "../components/card";
import { Button } from "../components/button";
import { Announcement } from "../components/announcement";
import hula from "../public/hula.jpg";
import "./css/index.css";
import styles from "./css/app.module.css";
function Home() {
  const { user, loading } = useFetchUser();

  return (
    <Layout user={user} loading={loading}>
      <ol>
        <li
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(2,0,36,0) 0%, rgba(0,0,0,0.4) 100%), url(${hula})`,
            backgroundSize: "cover",
            height: "100vh",
          }}
        >
          <section style={{ padding: "1.5rem", height: "100%" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                height: "90%",
                maxWidth: "230px",
              }}
            >
              <h4 style={{ color: "white", marginBottom: "1rem" }}>
                Na Hula Festival
              </h4>
              <p style={{ color: "white", lineHeight: "1.35rem" }}>
                The Honolulu Department of Parks and Recreation is proud to
                debut the 80th annual Na Hula Festival.
              </p>
            </div>
          </section>
        </li>
        <li className={styles.upcoming_events_container}>
          <section className={styles.upcoming_events_header}>
            <h4>Upcoming Events</h4>
            <Button
              text="View All"
              text_color="#067a6f"
              background_color="#fafefd"
              border_color="#8DCEC3"
            />
          </section>

          <ol className={styles.upcoming_events_list}>
            <li>
              <Card></Card>
            </li>
            <li>
              <Card></Card>
            </li>
          </ol>
        </li>
        <li className={styles.announcements_container}>
          <section className={styles.announcements_header}>
            <h4 style={{ color: "white" }}>Announcements</h4>
            <Button
              text="View All"
              text_color="#0AC5B3"
              background_color="#091915"
              border_color="#0B544A"
            />
          </section>
          <ol>
            <li className={styles.announcement_item}>
              <Announcement
                text="As we get closer to 60% vaccination statewide, the Governor
                  and Mayor ..."
                title="Parks & Closure Updates"
                subtitle="June 24, 2021"
              />
            </li>
            <li className={styles.announcement_item}>
              <Announcement
                text="As we get closer to 60% vaccination statewide, the Governor
                  and Mayor ..."
                title="Parks & Closure Updates"
                subtitle="June 24, 2021"
              />
            </li>
            <li className={styles.announcement_item}>
              <Announcement
                text="As we get closer to 60% vaccination statewide, the Governor
                  and Mayor ..."
                title="Parks & Closure Updates"
                subtitle="June 24, 2021"
              />
            </li>
          </ol>
        </li>
      </ol>
    </Layout>
  );
}

export default Home;
