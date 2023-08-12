// import { useState } from "react";
// import "../styling/navbardesktop.css";
// import { RxHamburgerMenu } from "react-icons/rx";
// import { FcManager } from "react-icons/fc";

// const Navbar = () => {
//   const [showNavbar, setShowNavbar] = useState(false);

//   const handleShowNavbar = () => {
//     setShowNavbar(!showNavbar);
//   };

//   return (
//     <nav className="navbar z-10 fixed top-0 left-0 right-0">
//       <div className="container">
//         <div className="logo">
//           <h1 className="text-4xl">
//             <FcManager />
//           </h1>
//         </div>
//         <div className="menu-icon " onClick={handleShowNavbar}>
//           <h1 className="text-4xl text-newgreen ">
//             <RxHamburgerMenu />
//           </h1>
//         </div>
//         <div className={`nav-elements  ${showNavbar && "active"}`}>
//           <ul className="">
//             <li>
//               <a
//                 href="#"
//                 className=" transition ease-in hover:text-lightSlate  text-newgreen"
//               >
//                 Home
//               </a>
//             </li>
//             <li>
//               <a
//                 className=" transition ease-in hover:text-lightSlate  text-newgreen"
//                 href="#"
//               >
//                 Education
//               </a>
//             </li>
//             <li>
//               <a
//                 className=" transition ease-in hover:text-lightSlate  text-newgreen"
//                 href="#"
//               >
//                 Projects
//               </a>
//             </li>
//             <li>
//               <a
//                 className=" transition ease-in hover:text-lightSlate  text-newgreen"
//                 href="#"
//               >
//                 Contact
//               </a>
//             </li>

//             <li>
//               <button
//                 className="resume-btn border border-newgreen px-6 py-3 rounded-lg text-newgreen
//               hover:bg-greenTint transition ease-in"
//               >
//                 Resume
//               </button>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

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
                    "https://drive.google.com/file/d/1GIS1OYqCHM_nbOl1vgtb0mDdVrzUyXvw/view?usp=sharing"
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
