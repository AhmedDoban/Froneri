"use client";
import Image from "next/image";
import "./ApplyJob.css";
import Select from "react-dropdown-select";
import { useRef } from "react";

function ApplyJob({ SetApplyJobBox }) {
  const FormRef = useRef();

  if (typeof window !== "undefined") {
    window.addEventListener("click", (e) => {
      if (FormRef.current !== null) {
        if (e.target == FormRef.current) {
          SetApplyJobBox(false);
        }
      }
      return () => {};
    });
  }

  const options = [
    {
      value: 1,
      label: "Cairo Uni",
    },
    {
      value: 2,
      label: "Helwan Uni",
    },
  ];

  return (
    <div className="ApplyJobBoxPopUp" ref={FormRef}>
      <div className="Form-content" data-aos="zoom-in">
        <Image
          src="/icons/exit.svg"
          width={30}
          height={30}
          alt="Exit"
          onClick={() => SetApplyJobBox(false)}
        />
        <h1>Key Accounts Development Supervisor</h1>
        <div className="Form-box">
          <h3>Basic Info</h3>
          <div className="flex-box">
            <input type="text" name="" id="" placeholder="Your Name" />
            <input type="email" name="" id="" placeholder="Email" />
          </div>
          <div className="flex-box">
            <input type="tel" name="" id="" placeholder="Mobile Number" />
            <input type="text" name="" id="" placeholder="Address" />
          </div>
          <div className="flex-box">
            <div className="drop-down-box">
              <Select
                options={options}
                style={{
                  border: "1px solid #B5B5B5",
                  width: "100%",
                }}
                className="DropDownSelectBox"
                placeholder="University"
                dropdownPosition="auto"
              />
            </div>
            <div className="Major">
              <input type="text" name="" id="" placeholder="Major" />
            </div>
          </div>
          <div className="flex-box">
            <input type="text" name="" placeholder="Graduation Year" />
            <input type="date" name="" id="" placeholder="Birth Date" />
          </div>
          <div className="flex-box">
            <input type="text" name="" placeholder="High School" />
          </div>
          <div className="flex-box">
            <div className="GenderType">
              <input type="radio" id="Male" name="Gender" hidden />
              <label htmlFor="Male">Male</label>
            </div>
            <div className="GenderType">
              <input type="radio" id="Female" name="Gender" hidden />
              <label htmlFor="Female">Female</label>
            </div>
          </div>
          <h3>Work Experience</h3>
          <div className="flex-box">
            <input type="text" name="" placeholder="Years Of Experience" />
            <input type="text" name="" id="" placeholder="Employer" />
          </div>
          <div className="flex-box">
            <input type="text" name="" placeholder="Current Job Tiltle" />
            <input type="text" name="" id="" placeholder="Availability" />
          </div>
          <div className="flex-box">
            <input type="text" name="" placeholder="Current Salary" />
            <input type="text" name="" id="" placeholder="Expected Salary" />
          </div>
          <div className="flex-box">
            <div className="drop-down-box">
              <Select
                options={options}
                style={{
                  border: "1px solid #B5B5B5",
                  width: "100%",
                }}
                className="DropDownSelectBox"
                placeholder="English proficiency"
                dropdownPosition="auto"
              />
            </div>
            <div className="drop-down-box">
              <Select
                options={options}
                style={{
                  border: "1px solid #B5B5B5",
                  width: "100%",
                }}
                className="DropDownSelectBox"
                placeholder="Other Languages"
                dropdownPosition="auto"
              />
            </div>
          </div>
          <div className="flex-box">
            <input type="text" placeholder="Employee Email" />
            <input type="text" placeholder="Employee linkedin" />
          </div>
          <div className="flex-box">
            <textarea placeholder="What Makes you part of the Froneri Team?"></textarea>
          </div>
          <div className="flex-box">
            <div className="drop-down-box">
              <Select
                options={options}
                style={{
                  border: "1px solid #B5B5B5",
                  width: "100%",
                }}
                className="DropDownSelectBox"
                placeholder="How did you know abou us"
                dropdownPosition="auto"
              />
            </div>
          </div>
          <div className="flex-box">
            <div className="input-File">
              <input type="file" name="" id="CVFile" hidden />
              <label htmlFor="CVFile">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 12V3.85L4.4 6.45L3 5L8 0L13 5L11.6 6.45L9 3.85V12H7ZM2 16C1.45 16 0.979333 15.8043 0.588 15.413C0.196666 15.0217 0.000666667 14.5507 0 14V11H2V14H14V11H16V14C16 14.55 15.8043 15.021 15.413 15.413C15.0217 15.805 14.5507 16.0007 14 16H2Z"
                    fill="black"
                  />
                </svg>
                <span>Upload CV</span>
              </label>
            </div>
            <button>
              <span>Submit</span>
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ApplyJob;
