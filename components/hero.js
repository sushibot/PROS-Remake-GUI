import styles from "./css/Hero.module.css";
import hula from "../public/hula.jpg";

export function Hero() {
  return (
    <div className={styles.container}>
      <section className={styles.inner_container}>
        <div className={styles.text_container}>
          <h4 style={{ color: "white", marginBottom: "1rem" }}>
            Na Hula Festival
          </h4>
          <p style={{ color: "white", lineHeight: "1.35rem" }}>
            The Honolulu Department of Parks and Recreation is proud to debut
            the 80th annual Na Hula Festival.
          </p>
        </div>
      </section>
    </div>
  );
}
