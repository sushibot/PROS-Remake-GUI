import styles from "./Hero.module.css";
import PropTypes from "prop-types";

export function Hero({ title, text }) {
  return (
    <div className={styles.container}>
      <section className="p-6 h-full">
        {/* below is gonna be menu item */}
        {/* <div style={{ display: "flex", justifyContent: "flex-end" }}></div> */}

        <div className="flex flex-col lg:max-w-24rem max-w-230px justify-end h-full">
          <h2 className="lg:text-5xl text-3xl text-white mb-4">{title}</h2>
          <p className="lg:text-lg md:text-base text-sm text-white leading-snug">
            {text}
          </p>
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
