"use client";
import Image from "next/image";
import "./Vacanies.css";
import { useState } from "react";
import ResponsivePagination from "react-responsive-pagination";
import { Countries } from "../Countries.js";

function Vacanies() {
  const [currentPage, setCurrentPage] = useState(1);
  const [VacaniesBox, SetVacaniesBox] = useState(new Array(150).fill(""));
  const totalPages = VacaniesBox.length / 15;
  const [FilterActive, SetFilterActive] = useState(false);

  return (
    <div className="Vacanies">
      <div className="container">
        <div className="info" data-aos="fade-down">
          <div className="leftInfo">
            <h3>Find your Vacanies</h3>
            <p>FRONERI Job opportunities for professionals</p>
          </div>
          <div className="search">
            <div className="input-box">
              <Image
                src="/Vacanies/Search.svg"
                width={30}
                height={30}
                alt="Search"
              />
              <input type="search" placeholder="Search for role.." />
            </div>
            <div className="filter-btn">
              <button onClick={() => SetFilterActive(true)}>
                <Image
                  src="/Career/Setting.svg"
                  width={30}
                  height={30}
                  alt="Search"
                />
                <span>Filter</span>
              </button>
            </div>
          </div>
        </div>
        <div className="Navigation-Info">
          <div className="left">
            <p>Showing</p>
            <span>{currentPage * 15}</span>
            <p>From {VacaniesBox.length} jobs</p>
          </div>
          <div className="PaginationPanal">
            <ResponsivePagination
              current={currentPage}
              total={totalPages}
              onPageChange={setCurrentPage}
              previousLabel={<i className="fa-solid fa-arrow-left"></i>}
              nextLabel={<i className="fa-solid fa-arrow-right"></i>}
              maxWidth={100}
            />
          </div>
        </div>
        <div className="Vacanies_Container">
          {VacaniesBox.slice((currentPage - 1) * 15, currentPage * 15).map(
            (ele, index) => (
              <div className="box" data-aos="zoom-in" key={index}>
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
                <h3>Key Accounts Development Supervisor</h3>
                <button className="JobBtn">
                  <Image
                    src="/Career/Job.svg"
                    width={20}
                    height={20}
                    alt="Job"
                  />
                  <span>Full time</span>
                </button>
                <p>
                  Passionate about hitting targets? Here’s your chance to shine!
                  FRONERI Egypt is looking for Key Accounts Development
                  Supervisor to join the Sales Team who will be delivering
                  accelerated sales, market share targets through creating,
                  selling and executing the category commercial elements...
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
            )
          )}
        </div>
        <div className="PaginationPanal">
          <ResponsivePagination
            current={currentPage}
            total={totalPages}
            onPageChange={setCurrentPage}
            previousLabel={<i className="fa-solid fa-arrow-left"></i>}
            nextLabel={<i className="fa-solid fa-arrow-right"></i>}
            maxWidth={100}
          />
        </div>
      </div>
      <div
        className={
          FilterActive ? "Filter-box-container active" : "Filter-box-container"
        }
      >
        <div className="head-filter">
          <h1>Filter</h1>
          <Image
            src="/icons/exit.svg"
            width={50}
            height={50}
            alt="exit"
            onClick={() => SetFilterActive(false)}
          />
        </div>
        <div className="body-Filter">
          <div className="box">
            <h4>Job Department</h4>
            <ul>
              <li>
                <input
                  type="checkbox"
                  name=""
                  id="SalesandBusinessDevelopment"
                  hidden
                />
                <label htmlFor="SalesandBusinessDevelopment">
                  Sales and Business Development
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  name=""
                  id="FinanceandAccounting"
                  hidden
                />
                <label htmlFor="FinanceandAccounting">
                  Finance and Accounting
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  name=""
                  id="TechnicalcareerOpportunities"
                  hidden
                />
                <label htmlFor="TechnicalcareerOpportunities">
                  Technical career Opportunities
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  name=""
                  id="FactoryEngineeringteam"
                  hidden
                />
                <label htmlFor="FactoryEngineeringteam">
                  Factory Engineering team
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  name=""
                  id="NewProductDevelopment"
                  hidden
                />
                <label htmlFor="NewProductDevelopment">
                  New Product Development
                </label>
              </li>
              <li>
                <input type="checkbox" name="" id="QualityAssurance" hidden />
                <label htmlFor="QualityAssurance">Quality Assurance</label>
              </li>
              <li>
                <input type="checkbox" name="" id="Logistics" hidden />
                <label htmlFor="Logistics">Logistics</label>
              </li>
              <li>
                <input type="checkbox" name="" id="Supplychain" hidden />
                <label htmlFor="Supplychain">Supply chain</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  name=""
                  id="Non-TechnicalcareerOpportunities"
                  hidden
                />
                <label htmlFor="Non-TechnicalcareerOpportunities">
                  Non-Technical career Opportunities
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  name=""
                  id="SupplychainandProcurement"
                  hidden
                />
                <label htmlFor="SupplychainandProcurement">
                  Supply chain and Procurement
                </label>
              </li>
              <li>
                <input type="checkbox" name="" id="HR" hidden />
                <label htmlFor="HR">HR</label>
              </li>
              <li>
                <input type="checkbox" name="" id="Marketing" hidden />
                <label htmlFor="Marketing">Marketing</label>
              </li>
            </ul>
          </div>
          <div className="box">
            <h4>Job Type</h4>
            <ul>
              <li>
                <input type="checkbox" name="" id="FullTime" hidden />
                <label htmlFor="FullTime">Full Time</label>
              </li>
              <li>
                <input type="checkbox" name="" id="PartTime" hidden />
                <label htmlFor="PartTime">Part Time</label>
              </li>
              <li>
                <input type="checkbox" name="" id="Internship" hidden />
                <label htmlFor="Internship">Internship</label>
              </li>
              <li>
                <input type="checkbox" name="" id="FreshGrads" hidden />
                <label htmlFor="FreshGrads">Fresh Grads</label>
              </li>
            </ul>
          </div>
          <div className="box">
            <h4>Required Major</h4>
            <ul>
              <li>
                <input
                  type="checkbox"
                  name=""
                  id="ScienceTechnologyEngineeringMath"
                  hidden
                />
                <label htmlFor="ScienceTechnologyEngineeringMath">
                  Science, Technology, Engineering, and Math
                </label>
              </li>
              <li>
                <input type="checkbox" name="" id="ArtsHumanities" hidden />
                <label htmlFor="ArtsHumanities">Arts and Humanities</label>
              </li>
              <li>
                <input type="checkbox" name="" id="Business" hidden />
                <label htmlFor="Business">Business</label>
              </li>
              <li>
                <input type="checkbox" name="" id="HealthMedicine" hidden />
                <label htmlFor="HealthMedicine">Health and Medicine</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  name=""
                  id="Multi-InterdisciplinaryStudies"
                  hidden
                />
                <label htmlFor="Multi-InterdisciplinaryStudies">
                  Multi-Interdisciplinary Studies
                </label>
              </li>
              <li>
                <input type="checkbox" name="" id="PublicSocial" hidden />
                <label htmlFor="PublicSocial">Public and Social </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  name=""
                  id="TradesPersonalServices"
                  hidden
                />
                <label htmlFor="TradesPersonalServices">
                  Trades and Personal Services
                </label>
              </li>
            </ul>
          </div>
          <div className="box">
            <h4>Location</h4>
            <ul>
              {Countries.map((country) => (
                <li key={country.name}>
                  <input type="checkbox" name="" id={country.name} hidden />
                  <label htmlFor={country.name}>{country.name}</label>
                </li>
              ))}
            </ul>
          </div>
          <div className="box">
            <h4>Experience Level</h4>
            <ul>
              <li>
                <input type="checkbox" name="" id="Graduates" hidden />
                <label htmlFor="Graduates">Graduates</label>
              </li>{" "}
              <li>
                <input
                  type="checkbox"
                  name=""
                  id="Internships&WorkingStudents"
                  hidden
                />
                <label htmlFor="Internships&WorkingStudents">
                  Internships & Working Students
                </label>
              </li>
              <li>
                <input type="checkbox" name="" id="EntryLevel" hidden />
                <label htmlFor="EntryLevel">Entry Level</label>
              </li>
              <li>
                <input type="checkbox" name="" id="Executive" hidden />
                <label htmlFor="Executive">Executive</label>
              </li>
              <li>
                <input type="checkbox" name="" id="Leadership" hidden />
                <label htmlFor="Leadership">Leadership</label>
              </li>
              <li>
                <input type="checkbox" name="" id="ProfessionalLevel" hidden />
                <label htmlFor="ProfessionalLevel">Professional Level</label>
              </li>
            </ul>
          </div>
        </div>
        <div className="Filter-Action">
          <button>
            <Image
              src="/Career/Setting.svg"
              width={30}
              height={30}
              alt="Search"
            />
            <span>Filter</span>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Vacanies;
