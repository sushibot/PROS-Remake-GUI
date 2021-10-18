export function Button({ text, background_color, text_color, border_color }) {
  return (
    <button
      className="py-1 px-4 rounded-3xl font-normal"
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
