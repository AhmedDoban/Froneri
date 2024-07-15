import Landing from "./Landing/Landing";
import OurPrograms from "./OurPrograms/OurPrograms";
import Career from "./Career/Career";
import Values from "./Values/Values";
import Interview from "./Interview/Interview";
import Footer from "@/Components/Footer/Footer";

function Home() {
  return (
    <div className="Home">
      <Landing />
      <OurPrograms />
      <Career />
      <Values />
      <Interview />
      <Footer />
    </div>
  );
}
export default Home;
