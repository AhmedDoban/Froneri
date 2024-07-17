import Image from "next/image";
import "./Interviews_Tips.css";

function Interviews_Tips() {
  return (
    <div className="Interviews_Tips">
      <div className="container">
        <div className="left">
          <h1 data-aos="fade-down">General Interviews Tips</h1>
          <ul className="StepsToTake" data-aos="fade-down">
            <li>Be honest in your CV</li>
            <li>Arrive 15 minutes prior to your interview</li>
            <li>
              Check google maps earlier to know the distance and time, Take care
              of the traffic
            </li>
            <li>Be neat and clean</li>
            <li>
              Check the company’s invitation, there will be a dress code for the
              interview
            </li>
            <li>Do not lie nor answer a question that you do not understand</li>
          </ul>
          <p data-aos="fade-down">
            Be confident, interviews are not school tests, it is a process to
            make sure that the candidate is qualified for the job requirements,
            job nature and employer’s competencies
          </p>
        </div>
        <div className="right" data-aos="zoom-in">
          <Image
            src="/Application/GeneralInterviewsTips.jpeg"
            width={500}
            height={500}
            alt="GeneralInterviewsTips"
          />
        </div>
      </div>
    </div>
  );
}
export default Interviews_Tips;
