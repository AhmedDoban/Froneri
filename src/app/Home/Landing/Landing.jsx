import Image from "next/image";
import React from "react";
import "./Landing.css";

export default function Landing() {
  return (
    <div className="Landing">
      <div className="container">
        <div className="top" data-aos="fade-down">
          <h1>Chart your way to success with Froneri</h1>
          <span>
            Joining our team means immersing yourself in a dynamic,
            innovation-driven environment where you&apos;ll collaborate with
            some of the brightest minds in the industry
          </span>
          <button>
            <span>All Vacancies</span>
            <Image
              src="/icons/Arrow-right.svg"
              width={30}
              height={30}
              alt="Arrow-right"
            />
          </button>
        </div>
        <div className="img-content">
          <Image
            width={1200}
            height={1200}
            alt="HomeLanding"
            src="/HomeLanding.png"
          />
        </div>
      </div>
    </div>
  );
}
