import Main from "../components/main/main";
import { Events } from "../components/events/events";
import { Announcements } from "../components/annoucements/announcements";
import { Hero } from "../components/hero/hero";

// import "./css/index.css";
import "tailwindcss/tailwind.css";
function Home() {
  return (
    <Main>
      <Hero />
      <Events />
      <Announcements />
    </Main>
  );
}

export default Home;
