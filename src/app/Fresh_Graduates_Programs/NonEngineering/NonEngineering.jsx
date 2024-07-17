"use client";
import Image from "next/image";
import { useState } from "react";
import ResponsivePaginationComponent from "react-responsive-pagination";
import "./NonEngineering.css";

function NonEngineering() {
  const [currentPage, setCurrentPage] = useState(1);
  const [testimonionBox, SettestimonionBox] = useState(new Array(6).fill(""));
  const totalPages = Math.floor(testimonionBox.length / 2);

  return (
    <div className="NonEngineering">
      <div className="container">
        <div className="left">
          <Image
            src="/Graduates/Quote.svg"
            width={50}
            height={50}
            alt="Quote"
          />
          <h3>Program testimonials</h3>
          <div className="testimonionBox-container">
            {testimonionBox
              .slice((currentPage - 1) * 2, currentPage * 2)
              .map((ele, index) => (
                <div className="testimonionBox" key={index}>
                  <Image
                    src="/Graduates/Quote.svg"
                    width={50}
                    height={50}
                    alt="Quote"
                  />
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Rhoncus cursus lorem
                    proin morbi enim ultrices vehicula adipiscing nibh.
                    Suspendisse vitae sit morbi diam orci tincidunt tincidunt
                    cursus felis. A dui cras enim augue interdum. Nec amet leo
                    id enim id pellentesque eget.
                  </p>
                  <div className="userBox">
                    <div className="left">
                      <Image
                        src="/Graduates/Freda.jpeg"
                        width={100}
                        height={100}
                        alt="Freda"
                      />
                      <div className="info">
                        <h3>Freda Okuneva</h3>
                        <p>Freda79@yahoo.com</p>
                      </div>
                    </div>
                    <div className="rate">
                      <Image
                        src="/Graduates/Star.svg"
                        width={18}
                        height={18}
                        alt="Star"
                      />
                      <Image
                        src="/Graduates/Star.svg"
                        width={18}
                        height={18}
                        alt="Star"
                      />
                      <Image
                        src="/Graduates/Star.svg"
                        width={18}
                        height={18}
                        alt="Star"
                      />
                      <Image
                        src="/Graduates/Star.svg"
                        width={18}
                        height={18}
                        alt="Star"
                      />
                      <Image
                        src="/Graduates/Star.svg"
                        width={18}
                        height={18}
                        alt="Star"
                      />
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="PaginationPanal">
            <ResponsivePaginationComponent
              current={currentPage}
              total={totalPages}
              onPageChange={setCurrentPage}
              previousLabel={<i className="fa-solid fa-arrow-left"></i>}
              nextLabel={<i className="fa-solid fa-arrow-right"></i>}
              maxWidth={100}
            />
          </div>
        </div>
        <div className="right">
          <div className="Headprogram">
            <div className="left">
              <div className="image-Large">
                <Image
                  src="/Graduates/NonEngineeringLarge.jpeg"
                  width={400}
                  height={400}
                  alt="Landing Large"
                />
              </div>
              <div className="image-Small">
                <Image
                  src="/Graduates/NonEngineeringSmall.jpeg"
                  width={200}
                  height={200}
                  alt="Landing Small"
                />
              </div>
            </div>
            <div className="right">
              <h1>Graduate Program for Non engineering/non tech roles</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur. Phasellus feugiat
                malesuada scelerisque id pellentesque lobortis at adipiscing
                etiam. Purus vestibulum fringilla diam felis. Mauris mauris
                tempus sem ultrices justo. In posuere gravida lorem arcu et.
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
          </div>
        </div>
      </div>
    </div>
  );
}
export default NonEngineering;
