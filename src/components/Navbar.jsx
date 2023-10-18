import React, { useState } from "react";
import { Link } from "react-scroll";
import { RxHamburgerMenu } from "react-icons/rx";
import { FcManager } from "react-icons/fc";
import "../styling/navbardesktop.css";
const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar z-10 fixed top-0 left-0 right-0">
      <div className="container">
        <div className="logo">
          <h1 className="text-4xl">
            <FcManager />
          </h1>
        </div>
        <div className="menu-icon " onClick={handleShowNavbar}>
          <h1 className="text-4xl text-newgreen ">
            <RxHamburgerMenu />
          </h1>
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul className="">
            <li>
              <Link
                to="intro"
                smooth={true}
                duration={500}
                className="transition ease-in hover:text-lightSlate text-newgreen cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="transition ease-in hover:text-lightSlate text-newgreen cursor-pointer"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="education"
                smooth={true}
                duration={500}
                className="transition ease-in hover:text-lightSlate text-newgreen cursor-pointer"
              >
                Education
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="transition ease-in hover:text-lightSlate text-newgreen cursor-pointer"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={700}
                className="transition ease-in hover:text-lightSlate text-newgreen cursor-pointer"
              >
                Contact
              </Link>
            </li>
            <li>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1ceAigvQMYzhQcwKI79E-qWUKM_vUx60L/view?usp=share_link"
                  )
                }
                className="resume-btn border border-newgreen px-6 py-3 rounded-lg text-newgreen
                hover:bg-greenTint transition ease-in"
              >
                Resume
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
