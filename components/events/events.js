import styles from "./Events.module.css";
import { Button } from "../button/button";
import { Card } from "../card/card";
export function Events() {
  return (
    <div className={styles.upcoming_events_container}>
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
    </div>
  );
}
