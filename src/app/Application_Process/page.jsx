import Landing from "./Landing/Landing";
import InterviewsProcess from "./InterviewsProcess/InterviewsProcess";
import Interviews_Tips from "./Interviews_Tips/Interviews_Tips";
import Interview from "../Home/Interview/Interview";

function Page() {
  return (
    <div className="Application_Process">
      <Landing />
      <InterviewsProcess />
      <Interviews_Tips />
      <Interview />
    </div>
  );
}
export default Page;
