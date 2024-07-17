import Landing from "./Landing/Landing";
import InterviewsProcess from "./InterviewsProcess/InterviewsProcess";
import Interview from "../Home/Interview/Interview";

function Page() {
  return (
    <div className="Application_Process">
      <Landing />
      <InterviewsProcess />
      <Interview />
    </div>
  );
}
export default Page;
