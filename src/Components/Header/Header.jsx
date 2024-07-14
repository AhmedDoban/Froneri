"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import NavLink from "./NavLink";
import "./Header.css";

function Header() {
  const [NavOpen, SetNavOpen] = useState(false);
  const NavRef = useRef();

  if (window !== "undefined") {
    window.addEventListener("click", (e) => {
      if (NavRef.current !== null) {
        if (e.target !== NavRef.current) {
          SetNavOpen(false);
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
            <button>
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
              <NavLink href="/Vacanies">Vacanies</NavLink>
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
    </div>
  );
}
export default Header;
