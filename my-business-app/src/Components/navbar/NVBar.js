import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./nav.css";

function NVBar({ cartItems, subtotal }) {
  const [showNavbar, setShowNavbar] = useState(false);
  // const [menuOpen, setMenuOpen] = useState(false);
  // const [icon, setIcon] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav id="navbar">
      <div className="container">
        <Link to="/" className="title">
          DNK{" "}
        </Link>
        <div className="menu-icon" onClick={handleShowNavbar}>
          {showNavbar ? (
            <i>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 1024 1024"
                // height="1em"
                // width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM676.1 657.9c4.4 5.2.7 13.1-6.1 13.1h-58.9c-4.7 0-9.2-2.1-12.3-5.7L512 561.8l-86.8 103.5c-3 3.6-7.5 5.7-12.3 5.7H354c-6.8 0-10.5-7.9-6.1-13.1L470.2 512 347.9 366.1A7.95 7.95 0 0 1 354 353h58.9c4.7 0 9.2 2.1 12.3 5.7L512 462.2l86.8-103.5c3-3.6 7.5-5.7 12.3-5.7H670c6.8 0 10.5 7.9 6.1 13.1L553.8 512l122.3 145.9z"></path>
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
                <Link to="/everything">EVERYTHING</Link>
              </li>
              <li>
                <Link to="/women">WOMEN</Link>
              </li>
              <li>
                <Link to="/men">MEN</Link>
              </li>
              <li>
                <Link to="/accessories">ACCESSORIES</Link>
              </li>
            </ul>
            <ul id="value_menu">
              <li>
                <Link to="/about">ABOUT</Link>
              </li>
              <li>
                <Link to="/contactUs">CONTACT US</Link>
              </li>
              <li>$ {subtotal}</li>
              <li>
                <Link to="/cart">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="currentColor"
                      class="bi bi-cart-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg>
                    <span>{cartItems ?.length}</span>
                    {/* <span>{cartItems.length == 0 ? "" : cartItems.length}</span> */}
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/user">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    class="bi bi-person-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path
                      fill-rule="evenodd"
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                    />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NVBar;
