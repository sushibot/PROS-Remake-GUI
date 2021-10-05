import Layout from "../components/layout/layout";
import { useFetchUser } from "../lib/user";
import { Events } from "../components/events/events";
import { Announcements } from "../components/annoucements/announcements";
import { Hero } from "../components/hero/hero";

// import "./css/index.css";
import "tailwindcss/tailwind.css";
function Home() {
  const { user, loading } = useFetchUser();
  return (
    <Layout user={user} loading={loading}>
      <Hero />
      <Events />
      <Announcements />
    </Layout>
  );
}

export default Home;
