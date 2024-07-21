"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import "./VacancyBox.css";
import Link from "next/link";
import ApplyJob from "../ApplyJob/ApplyJob";

function VacancyBox() {
  const [ApplyJobBox, SetApplyJobBox] = useState(false);

  return (
    <>
      <div className="VacancyBox" data-aos="zoom-in">
        <div className="over-layVacanies">
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
        <Link href="/Vacanies/1" className="BoxTitle">
          <h3>Key Accounts Development Supervisor</h3>
        </Link>
        <button className="JobBtn">
          <Image src="/Career/Job.svg" width={20} height={20} alt="Job" />
          <span>Full time</span>
        </button>
        <p>
          Passionate about hitting targets? Here’s your chance to shine! FRONERI
          Egypt is looking for Key Accounts Development Supervisor to join the
          Sales Team who will be delivering accelerated sales, market share
          targets through creating, selling and executing the category
          commercial elements...
        </p>
        <button className="Apply" onClick={() => SetApplyJobBox(true)}>
          <span> Apply Now</span>
          <Image
            src="/icons/Arrow-right.svg"
            width={25}
            height={25}
            alt="arrow-right"
          />
        </button>
      </div>
      {ApplyJobBox && <ApplyJob SetApplyJobBox={SetApplyJobBox} />}
    </>
  );
}
export default VacancyBox;
