import styles from "./Button.module.css";
export function Button({ text, background_color, text_color, border_color }) {
  return (
    <button
      className={styles.button}
      style={{
        backgroundColor: background_color,
        color: text_color,
        border: `1px solid ${border_color}`,
      }}
    >
      {text}
    </button>
  );
}
Button.defaultProps = {
  text: "Click",
};
