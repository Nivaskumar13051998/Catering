// import React from "react";
// import "./NavBar.css";
// import logo1 from "../Assests/NavBar logo.png";
// const NavBar = () => {
//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">
//         <img src={logo1} alt="Sri Sudarsan Catering Logo" className="logo" />
//         <span className="brand-name">SRI SUDARSAN CATERING</span>
//       </div>
//       <div className="navbar-links">
//         <ul>
//           <li><a href="#home" className="active">HOME</a></li>
//           <li className="dropdown">
//             <a href="#about" className="dropdown-toggle">ABOUT US</a>
//             <ul className="dropdown-menu">
//               <li><a href="#about-mission">What We Do</a></li>
//               <li><a href="#about-vision">Vision & Mission</a></li>
//             </ul>
//           </li>
//           {/* <li><a href="#brahmin-wedding">BRAHMIN WEDDING</a></li> */}
//           <li><a href="#services">EVENTS & SERVICES</a></li>
//           {/* <li><a href="#testimonials">TESTIMONIALS & GALLERY</a></li> */}
//           <li><a href="#contact">CONTACT US</a></li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;

import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header className="navbar">
      <div className="navbar-brand">
        <h1>Sri Sudarsan Catering</h1>
      </div>
      <nav className="nav-menu">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <div className="dropdown">
              <button className="dropdown-toggle">About Us ▼</button>
              <ul className="dropdown-menu">
                <li>
                  <a href="#what-we-do">What We Do</a>
                </li>
                <li>
                  <a href="#vision-mission">Vision & Mission</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#services">Events & Services</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;

