import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./nav.css";
// import "../App.css";

function NVBar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  window.onscroll = function () {
    changeNavbarColor();
  };

  function changeNavbarColor() {
    const navbar = document.getElementById("navbar");
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (window.innerWidth >= 1000) {
      if (scrollTop >= 400) {
      navbar.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    } else {
      navbar.style.backgroundColor = "transparent";
    }
    }
  }
  
  // window.addEventListener("scroll", function () {
  //   const navbar = document.getElementById("navbar");


  //     if (window.innerWidth >= 1000) {
  //       if (window.pageYOffset >= 400) {
  //             navbar.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
  //       } else {
  //             navbar.style.backgroundColor = "transparent";
  //       }
  //     }
  //   });

  return (
    <nav id="navbar">
      <div className="container">
        <div className="menu-icon" onClick={handleShowNavbar}>
          {showNavbar ? (
            <i>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 12 16"
                // height="1em"
                // width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"
                ></path>
              </svg>
            </i>
          ) : (
            <i>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 448 512"
                // height="1em"
                // width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
              </svg>
            </i>
          )}
          <div className={`nav-elements ${showNavbar && "active"}`}>
            <ul id="coll_menu">
              <li>
                <a href="#Home">HOME</a>
              </li>
              <li>
                <a href="#Services">SERVICES</a>
              </li>
              <li>
                <a href="#Portfolio">PROJECTS</a>
              </li>
              <li>
                <a href="#About">ABOUT</a>
              </li>
              <li>
                <a href="#Contact">CONTACT</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NVBar;
