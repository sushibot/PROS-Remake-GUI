import styles from "./css/Announcment.module.css";

export function Announcement({ text, title, subtitle, Button }) {
  return (
    <div>
      <section className={styles.mb_1}>
        <h5 className={styles.title}>{title}</h5>
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
