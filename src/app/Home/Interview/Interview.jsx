import Image from "next/image";
import "./Interview.css";

function Interview() {
  return (
    <div className="Interview">
      <div className="container">
        <div className="LeftSide">
          <div className="InterviewHead">
            <h1 data-aos="fade-down">
              How to get prepared for
              <br /> an interview
            </h1>
            <div className="ApplicationBox" data-aos="zoom-in">
              <Image
                src="/Logo-white.svg"
                width={85}
                height={30}
                alt="Froneri"
              />
              <p>Application Process</p>
            </div>
          </div>
          <ul className="StepsToTake" data-aos="fade-down">
            <li>
              Check “about us, FRONERI to know who we are, our history and what
              we do
            </li>
            <li>
              Prepare set of situations from your experience for expected
              questions
            </li>
            <li>
              Check the Job post you applied for, Responsibilities, requirements
              and make sure you are qualified for it
            </li>
            <li>
              Check our Social media channels to get introduced to our people
              and culture
            </li>
            <li>Check FRONERI behaviors</li>
            <li>Be yourself, be confident and arrive on time</li>
          </ul>
          <div className="ShowMore" data-aos="zoom-in">
            <button>
              <span>Learn more</span>
              <Image
                src="/icons/Arrow-right.svg"
                width={15}
                height={15}
                alt="arrow-right"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="RightSide"></div>
    </div>
  );
}

export default Interview;
