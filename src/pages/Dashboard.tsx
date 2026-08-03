import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Progress from "../components/Progress/Progress";
import Stats from "../components/Stats/Stats";
import TechSelection from "../components/TechSelection/TechSelection";

function Dashboard() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Progress />
        <Stats />
        <TechSelection />
      </main>
    </>
  );
}

export default Dashboard;
