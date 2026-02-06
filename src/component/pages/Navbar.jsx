import React, { useState, useEffect } from "react";
import sahruk from "../../assets/sahruk.jpg";
import { Link, NavLink } from "react-router";
const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "skill",
        "education",
        "projects",
        "experience",
      ];
      const scrollPosition = window.scrollY + 100;

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const links = (
    <div className="flex flex-col sm:font-semibold sm:flex-row gap-2">
      <NavLink to="/" onClick={() => handleNavClick("home")}>
        Home
      </NavLink>
      <NavLink to="/about" onClick={() => handleNavClick("about")}>
        About
      </NavLink>
      <NavLink to="/skill" onClick={() => handleNavClick("skill")}>
        Skills
      </NavLink>
      <NavLink to="/education" onClick={() => handleNavClick("education")}>
        Education
      </NavLink>
      <NavLink to="/projects" onClick={() => handleNavClick("projects")}>
        Projects
      </NavLink>
      <NavLink to="/experience" onClick={() => handleNavClick("experience")}>
        Experience
      </NavLink>
    </div>
  );
  return (
    <div className="navbar sticky top-0 z-50 bg-base-100 shadow-sm  px-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost sm:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor" >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link  to="/"
          onClick={() => handleNavClick("home")}
          className="font-bold hover:text-amber-500 ml-3 text-xl"
        > Sahruk
        </Link>
      </div>
      <div className="navbar-center hidden sm:flex">
        <ul className="menu font-semibold menu-horizontal px-1 gap-5 ">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <img src={sahruk} onClick={() => handleNavClick("about")} className="w-10 h-10 rounded-full" alt="Sahruk" />
      </div>
    </div>
  );
};

export default Navbar;
