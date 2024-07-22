import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <div className="container">
        <div className="FooterHead">
          <div className="info">
            <span>Find your career</span>
            <h1>We can do amazing things together</h1>
          </div>
          <button>
            <span>All Vacancies</span>
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
        <div className="FooterBody">
          <div className="DescriptionBox">
            <Image src="/Logo-white.svg" width={150} height={40} alt="logo" />
            <p>
              Joining our team means immersing yourself in a dynamic,
              innovation-driven environment where you&apos;ll collaborate with
              some of the brightest minds in the industry
            </p>
          </div>
          <div className="box">
            <h3>Quick links</h3>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/Vacancies">Vacancies</Link>
              </li>
              <li>
                <Link href="/Froneri_Values">Froneri Values</Link>
              </li>
              <li>
                <Link href="/Application_Process">Application Process</Link>
              </li>
            </ul>
          </div>
          <div className="box">
            <h3>Our programs</h3>
            <ul>
              <li>
                <Link href="/Fresh_Graduates_Programs">
                  Fresh Graduates Programs
                </Link>
              </li>
              <li>
                <Link href="/Student_Programs">Student Programs</Link>
              </li>
            </ul>
          </div>
          <div className="box">
            <h3>Contact us</h3>
            <a className="email-box" href="mailto:support@uxtheme.net">
              <Image
                src="/icons/Email.svg"
                width={30}
                height={30}
                alt="Email"
              />
              <div className="EmailInfo">
                <span>Email:</span>
                <p>support@uxtheme.net</p>
              </div>
            </a>
            <div className="Follow">
              <span>Follow us on :</span>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-linkedin"></i>
            </div>
          </div>
        </div>
        <div className="CopyRight">
          <p>
            All rights reserved by Froneri / © 2024 Proudly Powered by
            O-Projects
          </p>
          <button>
            <Image
              src="/icons/GlobalFooter.svg"
              width={15}
              height={15}
              alt="Global"
            />
            <span>Global</span>
            <Image
              src="/icons/ArrowRightFooter.svg"
              width={15}
              height={15}
              alt="Arrow Right"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Footer;
