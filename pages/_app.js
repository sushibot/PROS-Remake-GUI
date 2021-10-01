import Layout from "../components/layout";
import { useFetchUser } from "../lib/user";
import { Card } from "../components/card";
import { Button } from "../components/button";
import { Announcement } from "../components/announcement";
import { Hero } from "../components/hero";
import "./css/index.css";
import styles from "./css/app.module.css";

function Home() {
  const { user, loading } = useFetchUser();

  return (
    <Layout user={user} loading={loading}>
      <ol>
        <Hero />
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
              <Card />
            </li>
            <li>
              <Card />
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
