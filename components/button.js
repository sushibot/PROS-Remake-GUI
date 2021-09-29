import styles from "./css/Button.module.css";
export function Button({ text }) {
  return <button className={styles.button}>{text}</button>;
}
Button.defaultProps = {
  text: "Click",
};
