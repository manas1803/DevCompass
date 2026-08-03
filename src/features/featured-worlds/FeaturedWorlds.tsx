import { dashboardData } from "../../data/dashBoardData";

function FeaturedWorlds() {
  return (
    <section className="featured-worlds">
      <h2>Featured Worlds</h2>
      <div className="worlds-container">
        {dashboardData.featuredWorlds.map((world) => (
          <div key={world.id} className="world-card">
            {world.imageUrl && (
              <img src={world.imageUrl} alt={world.name} className="world-image" />
            )}
            <h3>{world.name}</h3>
            <p>Progress: {world.progress}%</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default FeaturedWorlds;