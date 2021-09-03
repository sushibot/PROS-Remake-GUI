import Image from "next/image";
import festival_pic from "../public/food_festival.jpg";
export function Card() {
  return (
    <section
      style={{
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "350px",
      }}
    >
      <div style={{ width: "100%", marginBttom: "1rem" }}>
        <img
          src={festival_pic}
          style={{ width: "100%", height: "100%", borderRadius: "20px" }}
        />
      </div>
      <figure
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "flex-start",
          width: "100%",
        }}
      >
        <h3 style={{ marginBottom: "0.5rem", margin: "0" }}>
          Ala Moana Food Festival
        </h3>
        <summary style={{ color: "#646464" }}>August 3rd, 2021</summary>
      </figure>
    </section>
  );
}
