"use client";
import { useState } from "react";
import "./JobDetails.css";
import Image from "next/image";
import ApplyJob from "../ApplyJob/ApplyJob";

function Page() {
  const [ApplyJobBox, SetApplyJobBox] = useState(false);

  return (
    <>
      <div className="JobDetails">
        <div className="container">
          <div className="main-box">
            <div className="box">
              <div className="JobHead">
                <Image
                  src="/Vacancies/JobDesc.png"
                  width={70}
                  height={70}
                  alt="Job"
                />
                <div className="info">
                  <h3>Senior Graphic Designer</h3>
                  <span>New Nozha Office</span>
                </div>
              </div>
              <button onClick={() => SetApplyJobBox(true)}>
                Apply to this Job
                <Image
                  src="/icons/Arrow-right.svg"
                  width={25}
                  height={25}
                  alt="arrow-right"
                />
              </button>
            </div>
            <div className="box">
              <div className="JobDescrip">
                <div className="JobTime">
                  <Image
                    src="/Career/Job.svg"
                    width={20}
                    height={20}
                    alt="Job"
                  />
                  <span> Full time</span>
                </div>
                <div className="location">
                  <Image
                    src="/Career/Location.svg"
                    width={20}
                    height={20}
                    alt="location"
                  />
                  <span>FRONERI Sales Office, New Cairo</span>
                </div>
              </div>
              <span>Career Level</span>
              <h2>Marketing</h2>
              <div className="skills">
                <span>Skills</span>
                <ul>
                  <li>
                    Design and produce high-quality graphics for social media
                    platforms (e.g., Facebook, Instagram, Twitter, LinkedIn).
                  </li>
                  <li>
                    Create visually engaging presentations that align with our
                    brand guidelines.
                  </li>
                  <li>
                    Collaborate with the marketing team to develop creative
                    concepts and campaigns.
                  </li>
                  <li>
                    Stay updated with the latest design trends and tools to keep
                    our content fresh and innovative.
                  </li>
                  <li>
                    Manage multiple projects simultaneously while meeting
                    deadlines.
                  </li>
                  <li>
                    Provide input on design strategies and participate in
                    brainstorming sessions.
                  </li>
                </ul>
              </div>
            </div>
            <div className="box">
              <div className="jobDescription">
                <h2>Job Description</h2>
                <p>
                  We are seeking a talented and creative Graphic Designer with
                  over 3 years of experience to join our dynamic team. The ideal
                  candidate will have a strong portfolio showcasing their skills
                  in designing eye-catching social media posts and professional
                  presentations. You will play a key role in shaping our
                  brandâ€™s visual identity and communicating our message
                  effectively to our audience.
                </p>
              </div>
              <h4>What you will be doing:</h4>
              <ul>
                <li>
                  Bachelor’s degree in Graphic Design, Visual Arts, or a related
                  field.
                </li>
                <li>
                  Minimum of 3 years of professional graphic design experience.
                </li>
                <li>
                  Proficiency in Adobe Creative Suite (Photoshop, Illustrator,
                  InDesign).
                </li>
                <li>Experience in designing for social media platforms.</li>
                <li>
                  Strong portfolio demonstrating expertise in social media
                  graphics and presentations.
                </li>
                <li>
                  Excellent understanding of typography, color theory, and
                  layout design.
                </li>
                <li>Strong communication skills and attention to detail.</li>
              </ul>
              <button onClick={() => SetApplyJobBox(true)}>
                Apply to this Job
                <Image
                  src="/icons/Arrow-right.svg"
                  width={25}
                  height={25}
                  alt="arrow-right"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {ApplyJobBox && <ApplyJob SetApplyJobBox={SetApplyJobBox} />}
    </>
  );
}

export default Page;
