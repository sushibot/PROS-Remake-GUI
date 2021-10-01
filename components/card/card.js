import styles from "./Card.module.css";
import festival_pic from "../../public/food_festival.jpg";

export function Card() {
  return (
    <section className={styles.container}>
      <div className={styles.mb_1}>
        <img className={styles.image_container} src={festival_pic} />
      </div>
      <figure className={styles.text_container}>
        <h5 className={styles.mb_half}>Ala Moana Food Festival</h5>
        <summary>August 3rd, 2021</summary>
      </figure>
    </section>
  );
}
