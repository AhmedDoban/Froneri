"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import NavLink from "./NavLink";
import "./Header.css";
import { Countries } from "@/app/Countries.js";
import Flag from "react-world-flags";

function Header() {
  const [NavOpen, SetNavOpen] = useState(false);
  const [GlobalPopUp, SetGlobalPopUp] = useState(false);
  const NavRef = useRef();
  const GlobalRef = useRef();

  if (typeof window !== "undefined") {
    window.addEventListener("click", (e) => {
      if (NavRef.current !== null) {
        if (e.target !== NavRef.current) {
          SetNavOpen(false);
        }
      }
      if (GlobalRef.current !== null) {
        if (e.target == GlobalRef.current) {
          SetGlobalPopUp(false);
        }
      }
      return () => {};
    });
  }

  return (
    <div className="Header">
      <div className="container">
        <div className="Top-content">
          <div className="left">
            <span>Follow us on :</span>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-linkedin"></i>
          </div>
          <div className="center">
            <Image src="/logo.svg" width={140} height={40} alt="Logo" />
          </div>
          <div className="right">
            <button onClick={() => SetGlobalPopUp(true)}>
              <Image
                src="/icons/Global.svg"
                width={30}
                height={30}
                alt="Global"
              />
              <span>Global Opportunities</span>
            </button>
            <i
              className="fa-solid fa-bars MobileNav"
              onClick={() => SetNavOpen(!NavOpen)}
              ref={NavRef}
            ></i>
          </div>
        </div>
        <div className={NavOpen ? "bottom-content active" : "bottom-content"}>
          <button className="MobileNavExit">
            <i
              className="fa-solid fa-xmark "
              onClick={() => SetNavOpen(!NavOpen)}
            ></i>
          </button>

          <ul>
            <li>
              <NavLink href="/">Home</NavLink>
            </li>
            <li>
              <NavLink href="/Vacancies">Vacancies</NavLink>
            </li>
            <li>
              <NavLink href="/Fresh_Graduates_Programs">
                Fresh Graduates Programs
              </NavLink>
            </li>
            <li>
              <NavLink href="/Student_Programs">Student Programs</NavLink>
            </li>
            <li>
              <NavLink href="/Froneri_Values">Froneri Values</NavLink>
            </li>
            <li>
              <NavLink href="/Application_Process">Application Process</NavLink>
            </li>
          </ul>
          <div className="Follow">
            <span>Follow us on :</span>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-linkedin"></i>
          </div>
        </div>
      </div>
      {GlobalPopUp && (
        <div className="GlobalPopUp" ref={GlobalRef}>
          <div className="GlobalPopUpBox" data-aos="zoom-in">
            <Image
              src="/icons/exit.svg"
              width={30}
              height={30}
              alt="Exit"
              onClick={() => SetGlobalPopUp(false)}
            />
            <h1>Global job opportunities</h1>
            <div className="Countries-box">
              {Countries.map(({ name, code }) => (
                <div className="SingleCountry" key={name}>
                  <Flag code={code} height="25" width="25" />
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Header;
