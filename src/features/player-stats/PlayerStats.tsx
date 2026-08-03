import Card from "../../components/Card";
import { dashboardData } from "../../data/dashBoardData";

function PlayerStats() {
  return (
    <>
      <section>
        <Card title="Level" description={dashboardData.user.level} />
        <Card title="Streak" description={dashboardData.user.streak} />
        <Card title="XP Earned" description={dashboardData.user.xp} />
      </section>
    </>
  );
}
export default PlayerStats;
