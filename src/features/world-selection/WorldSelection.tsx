import { dashboardData } from "../../data/dashBoardData";

function TechSelection() {
  return (
    <>
      <section>
          <div className="worlds-container">
                  {dashboardData.featuredWorlds.map((world) => (
                    <div key={world.id} className="world-card">
                      {world.imageUrl && (
                        <img src={world.imageUrl} alt={world.name} className="world-image" />
                      )}
                      <h3>{world.name}</h3>
                    </div>
                  ))}
                </div>
        </section>
    </>
  );
}
export default TechSelection;
