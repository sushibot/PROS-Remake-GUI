import styles from "./Events.module.css";
import { Button } from "../button/button";
import { Card } from "../card/card";
import festival_pic from "../../public/food_festival.jpg";
export function Events() {
  return (
    <div className="p-8">
      <section className="flex justify-between align-middle md:justify-center mb-8">
        <h2 className="text-2xl md:text-4xl font-semibold">Upcoming Events</h2>
        <div className="block md:hidden">
          <Button
            text="View All"
            text_color="#067a6f"
            background_color="#fafefd"
            border_color="#8DCEC3"
          />
        </div>
      </section>
      <section className="sm:hidden mb-8">
        <ul className="flex flex-row overflow-x-auto w-full">
          <li className="w-mobile-event-image flex-shrink-0 pr-4 mb-4">
            <Card
              title="Ala Moana Food Festival"
              date="August 3rd, 2021"
              image={festival_pic}
            />
          </li>
          <li className="w-mobile-event-image flex-shrink-0 pr-4">
            <Card
              title="Ward Farmers Market"
              date="August 25th, 2021"
              image={festival_pic}
            />
          </li>
        </ul>
      </section>
      <section
        className="hidden sm:block mx-auto my-8"
        style={{ width: "90%" }}
      >
        <ul className="lg:flex lg:flex-row align-middle justify-between mb-8 md:grid md:grid-cols-2">
          <li className=" md:w-1/4 pr-4 pb-4">
            <Card
              title="Ala Moana Food Festival"
              date="August 8th, 2021"
              image={festival_pic}
            />
          </li>
          <li className=" md:w-1/4 pr-4">
            <Card
              title="Hawaii Film Festival"
              date="August 25th, 2021"
              image={festival_pic}
            />
          </li>
          <li className=" md:w-1/4 pr-4">
            <Card
              title="Ward Farmers Market"
              date="September 3rd, 2021"
              image={festival_pic}
            />
          </li>
          <li className=" md:w-1/4  pr-4">
            <Card
              title="Kaka'ako Farmers Market"
              date="September 12th, 2021"
              image={festival_pic}
            />
          </li>
        </ul>
      </section>
      <section className="sm:flex sm:justify-center hidden sm:block">
        <Button
          text="View All"
          text_color="#067a6f"
          background_color="#fafefd"
          border_color="#8DCEC3"
        />
      </section>
    </div>
  );
}
