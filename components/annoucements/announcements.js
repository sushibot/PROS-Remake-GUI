import styles from "./Announcment.module.css";
import { AnnouncementItem } from "./announcement_item";
import { Button } from "../button/button";
export function Announcements() {
  return (
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
          <AnnouncementItem
            text="As we get closer to 60% vaccination statewide, the Governor
                  and Mayor ..."
            title="Parks & Closure Updates"
            subtitle="June 24, 2021"
          />
        </li>
        <li className={styles.announcement_item}>
          <AnnouncementItem
            text="As we get closer to 60% vaccination statewide, the Governor
                  and Mayor ..."
            title="Parks & Closure Updates"
            subtitle="June 24, 2021"
          />
        </li>
        <li className={styles.announcement_item}>
          <AnnouncementItem
            text="As we get closer to 60% vaccination statewide, the Governor
                  and Mayor ..."
            title="Parks & Closure Updates"
            subtitle="June 24, 2021"
          />
        </li>
      </ol>
    </li>
  );
}
