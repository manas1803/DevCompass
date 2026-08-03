import Header from "../sections/Header";
import Hero from "../sections/Hero";
import Progress from "../sections/Progress";
import Stats from "../sections/Stats";
import TechSelection from "../sections/TechSelection";

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
