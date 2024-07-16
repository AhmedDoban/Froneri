"use client";
import Image from "next/image";
import "./Career.css";
import { useState } from "react";

function Career() {
  const [careerBox, SetCareerBox] = useState([{}, {}, {}]);

  return (
    <div className="Career">
      <div className="container">
        <div className="info" data-aos="fade-down">
          <div className="leftInfo">
            <h3>Find your career</h3>
            <p>FRONERI Job opportunities for professionals</p>
          </div>
          <div className="search">
            <div className="input-box">
              <Image
                src="/Career/Search.svg"
                width={30}
                height={30}
                alt="Search"
              />
              <input type="search" placeholder="Search for role.." />
            </div>
            <div className="filter-btn">
              <button>
                <Image
                  src="/Career/Setting.svg"
                  width={30}
                  height={30}
                  alt="Search"
                />
                <span>Filter</span>
              </button>
              <div className="Filter-box-container"></div>
            </div>
          </div>
        </div>
        <div className="Career_Container">
          {careerBox.map((ele, index) => (
            <div className="box" data-aos="zoom-in" key={index}>
              <div className="over-layCareer">
                <span>Finance and Accounting</span>
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
              <h3>Key Accounts Development Supervisor</h3>
              <button className="JobBtn">
                <Image src="/Career/Job.svg" width={20} height={20} alt="Job" />
                <span>Full time</span>
              </button>
              <p>
                Passionate about hitting targets? Here’s your chance to shine!
                FRONERI Egypt is looking for Key Accounts Development Supervisor
                to join the Sales Team who will be delivering accelerated sales,
                market share targets through creating, selling and executing the
                category commercial elements...
              </p>
              <button className="Apply">
                <span> Apply Now</span>
                <Image
                  src="/icons/Arrow-right.svg"
                  width={25}
                  height={25}
                  alt="arrow-right"
                />
              </button>
            </div>
          ))}
        </div>
        <div className="ShowMore">
          <button>
            <span>All Vacanies</span>
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Career;
