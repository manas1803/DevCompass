import { dashboardData } from "../data/dashBoardData";
import Header from "../features/header";
import Hero from "../features/hero";
import RoadmapProgress from "../features/roadmap-progress";
import PlayerStats from "../features/player-stats";
import WorldSelection from "../features/world-selection";

function Dashboard() {
  return (
    <>
      <Header />
      <main>
        <Hero userData={dashboardData.user}/>
        <RoadmapProgress />
        <PlayerStats />
        <WorldSelection />
      </main>
    </>
  );
}

export default Dashboard;
