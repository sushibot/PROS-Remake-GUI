import styles from "./Hero.module.css";
import PropTypes from "prop-types";

export function Hero({ title, text }) {
  return (
    <div className={styles.container}>
      <section className={styles.inner_container}>
        <div style={{ display: "flex", justifyContent: "flex-end" }}></div>

        <div className={styles.text_container}>
          <h4 style={{ color: "white", marginBottom: "1rem" }}>{title}</h4>
          <p style={{ color: "white", lineHeight: "1.35rem" }}>{text}</p>
        </div>
      </section>
    </div>
  );
}

Hero.defaultProps = {
  title: "Na Hula Festival",
  text: "The Honolulu Department of Parks and Recreation is proud to debut the 80th annual Na Hula Festival.",
};

Hero.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};
