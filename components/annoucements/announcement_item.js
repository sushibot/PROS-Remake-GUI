import styles from "./Announcment.module.css";

export function AnnouncementItem({ text, title, subtitle, Button }) {
  return (
    <div>
      <section className={styles.mb_1}>
        <h3 className="text-secondary leading-normal font-semibold text-2xl">
          {title}
        </h3>
        <label className={styles.subtitle}>{subtitle}</label>
      </section>
      <section className={styles.mb_half}>
        <p className={styles.text}>{text}</p>
      </section>
      <section>
        <a style={{ color: "#0AC5B3", textDecoration: "underline" }}>
          Read More
        </a>
        {/* {Button} */}
      </section>
    </div>
  );
}
