import styles from "./css/Card.module.css";
import festival_pic from "../public/food_festival.jpg";
export function Card() {
  return (
    <section className={styles.container}>
      <div className={styles.mb_1}>
        <img className={styles.image_container} src={festival_pic} />
      </div>
      <figure className={styles.text_container}>
        <h3 style={{ fontWeight: 600, marginBottom: "0.5rem" }}>
          Ala Moana Food Festival
        </h3>
        <summary style={{ color: "#646464" }}>August 3rd, 2021</summary>
      </figure>
    </section>
  );
}
