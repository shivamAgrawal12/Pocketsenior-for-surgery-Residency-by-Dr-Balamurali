import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa";
import { logo } from "../../data/cloudinary";
import testimonialsData from "../../data/testimonials";
import longcasestudyData from "../../data/longcases";
import shortcasestudyData from "../../data/shortcases";

import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const navbarRef = useRef(null);


  /** CLOSE WHEN CLICKING OUTSIDE NAVBAR **/

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target)
      ) {
        setDropdownOpen(null);
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutsideClick
      );
    };
  }, []);

  /** CLOSE WITH ESCAPE **/

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setDropdownOpen(null);
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, []);

  /** NAVIGATION **/

  const handleNavigate = (path) => {
    // Close everything first
    setIsOpen(false);
    setDropdownOpen(null);

    // Navigate
    navigate(path);

    // Scroll to top
    requestAnimationFrame(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    });
  };

  /** DROPDOWN **/

  const toggleDropdown = (menu) => {
    setDropdownOpen((current) =>
      current === menu ? null : menu
    );
  };

  /** DROPDOWN RENDER **/

  const renderDropdown = (menu, items, basePath) => {
    const isDropdownOpen = dropdownOpen === menu;

    const menuTitle =
      menu === "chapters"
        ? "CHAPTERS"
        : menu === "longcases"
        ? "LONG CASES"
        : "SHORT CASES";

    return (
      <li
        className={`nav-item dropdown ${
          isDropdownOpen ? "dropdown-open" : ""
        }`}
      >

        <button
          type="button"
          className="nav-link dropdown-toggle"
          onClick={() => toggleDropdown(menu)}
          aria-expanded={isDropdownOpen}
          aria-haspopup="true"
        >
          {menuTitle}

          <span className="dropdown-arrow">
            {isDropdownOpen ? "▴" : "▾"}
          </span>
        </button>


        <ul
          className={`dropdown-menu ${
            isDropdownOpen ? "dropdown-visible" : ""
          }`}
        >

          {items.map((item, index) => {
            const id =
              item.chapterId ??
              item.id ??
              index;

            return (
              <li key={id}>

                <button
                  type="button"
                  onClick={() =>
                    handleNavigate(`${basePath}/${id}`)
                  }
                >
                  {item.name}
                </button>

              </li>
            );
          })}

        </ul>
      </li>
    );
  };


  return (
    <header className="navbar" ref={navbarRef} >
      <div className="navbar-container">

        {/** LOGO **/}

        <button
          type="button"
          className="logo-button"
          onClick={() => handleNavigate("/")}
          aria-label="Go to home"
        >
          <img
            src={logo}
            alt="Medical Study"
            className="navbar-logo"
            onError={(event) => {
              console.error(
                "Navbar logo failed to load:",
                logo
              );

              event.currentTarget.style.display = "none";
            }}
          />
        </button>


        {/* =====================================
            MOBILE MENU BUTTON
        ===================================== */}

        <button
          type="button"
          className={`menu-toggle ${
            isOpen ? "menu-open" : ""
          }`}
          onClick={() => {
            setIsOpen((current) => !current);
            setDropdownOpen(null);
          }}
          aria-label={
            isOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={isOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>


        {/* =====================================
            NAVIGATION
        ===================================== */}

        <nav
          className={`nav-wrapper ${
            isOpen ? "nav-active" : ""
          }`}
        >

          <ul className="nav-list">

            {/* HOME */}

            <li className="nav-item">

              <button
                type="button"
                className="nav-link"
                onClick={() => handleNavigate("/")}
              >
                HOME
              </button>

            </li>


            {/* ABOUT */}

            <li className="nav-item">

              <button
                type="button"
                className="nav-link"
                onClick={() => handleNavigate("/about")}
              >
                ABOUT
              </button>

            </li>


            {/* CHAPTERS */}

            {renderDropdown(
              "chapters",
              testimonialsData,
              "/chapter"
            )}


            {/* LONG CASES */}

            {renderDropdown(
              "longcases",
              longcasestudyData,
              "/Longcasechapter"
            )}


            {/* SHORT CASES */}

            {renderDropdown(
              "shortcases",
              shortcasestudyData,
              "/Shortcaseschapter"
            )}

          </ul>
        </nav>
        <div className="header-social">
          <a
            href="https://www.instagram.com/dr.balamuralikrishnan/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

          <a 
            href="mailto:balamuralikrishna97@gmail.com"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://www.instagram.com/thetamilsurgeon.in.ranchi?stkn=cWY0ZGkzZmY4anhs"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="The Tamil Surgeon Instagram"
          >
            <FaInstagram />
          </a>

        </div>
      </div>
    </header>
  );
};

export default Navbar;