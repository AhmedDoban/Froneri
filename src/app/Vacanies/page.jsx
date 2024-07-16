"use client";
import Image from "next/image";
import "./Vacanies.css";
import { useState } from "react";
import ResponsivePagination from "react-responsive-pagination";

function Vacanies() {
  const [currentPage, setCurrentPage] = useState(1);
  const [VacaniesBox, SetVacaniesBox] = useState(new Array(150).fill(""));
  const totalPages = VacaniesBox.length / 15;

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
          />
        </div>
      </div>
    </div>
  );
}
export default Vacanies;
