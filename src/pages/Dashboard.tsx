import { dashboardData } from "../data/dashBoardData";
import FeaturedWorlds from "../features/featured-worlds";
import Header from "../features/header";
import Hero from "../features/hero";
import PlayerStats from "../features/player-stats";
import Questline from "../features/questline";
import WorldSelection from "../features/world-selection";

function Dashboard() {
  return (
    <>
      <Header />
      <main>
        <Hero userData={dashboardData.user}/>
        <PlayerStats />
        <FeaturedWorlds />
        <WorldSelection />
        <Questline />
      </main>
    </>
  );
}

export default Dashboard;
