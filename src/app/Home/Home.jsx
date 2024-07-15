import Landing from "./Landing/Landing";
import OurPrograms from "./OurPrograms/OurPrograms";
import Career from "./Career/Career";
import Values from "./Values/Values";
import Interview from "./Interview/Interview";

function Home() {
  return (
    <div className="Home">
      <Landing />
      <OurPrograms />
      <Career />
      <Values />
      <Interview />
    </div>
  );
}
export default Home;
