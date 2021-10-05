import styles from "./Events.module.css";
import { Button } from "../button/button";
import { Card } from "../card/card";
import festival_pic from "../../public/food_festival.jpg";
export function Events() {
  return (
    <div className={styles.upcoming_events_container}>
      <section className={styles.upcoming_events_header}>
        <h2 className="text-3xl font-semibold mb-4">Upcoming Events</h2>
        <Button
          text="View All"
          text_color="#067a6f"
          background_color="#fafefd"
          border_color="#8DCEC3"
        />
      </section>

      <ol className={styles.upcoming_events_list}>
        <li>
          <Card
            title="Ala Moana Food Festival"
            date="August 3rd, 2021"
            image={festival_pic}
          />
        </li>
        <li>
          <Card
            title="Ward Farmers Market"
            date="August 25th, 2021"
            image={festival_pic}
          />
        </li>
      </ol>
    </div>
  );
}
