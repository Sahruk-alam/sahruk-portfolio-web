import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaRegAddressBook,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import { Link } from "react-router";
 const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
const Footer = () => {
  return (
    <div id="contact" className=" bg-[#0B1C2D]">
      <footer className="footer  sm:footer-horizontal text-white text-base-content p-10">
        <nav className="flex-1">
          <h2 className="text-xl">Sahruk Portfolio</h2>
          <p>
            Thank you for visiting my personal portfolio website. Connect with
            me over socials.
          </p>
        </nav>
        <nav className="flex-1 mx-10">
          <h2 className="text-lg">Social Link</h2>
          <ul className="flex flex-col gap-2">
            <Link onClick={() => handleNavClick("home")} to="/">Home</Link>
            <Link onClick={() => handleNavClick("about")} to="/about">About</Link>
            <Link onClick={() => handleNavClick("skill")} to="/skill">Skills</Link>
            <Link onClick={() => handleNavClick("education")} to="/education">Education</Link>
            <Link onClick={() => handleNavClick("projects")} to="/projects">Projects</Link>
            <Link onClick={() => handleNavClick("experience")} to="/experience">Experience</Link>
          </ul>
        </nav>
        <nav className="flex-1">
          <h2 className="text-lg">Contact Info</h2>
          <div className="gap-3 flex flex-col">
            <h2 className="flex gap-2 items-center">
              <FaPhone className="text-yellow-600" />
              +8801734748059
            </h2>
            <h2 className="flex gap-2 items-center">
              <MdEmail className="text-yellow-600" />
              sahrukalam8059@gmail.com
            </h2>
            <h2 className="flex gap-2 items-center">
              <FaRegAddressBook className="text-yellow-600" />
              Rajshahi, Bangladesh
            </h2>
          </div>
          <div className="flex gap-2 mt-4">
            <a
              href="https://www.linkedin.com/in/sahruk-alam-sarder-ab5495304?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="group hover:bg-blue-500 transition  bg-black p-2 rounded-full"
              target="_blank"
            >
              {" "}
              <FaLinkedin
                size={25}
                className="group-hover:text-white transition text-blue-400"
              />
            </a>
            <a
              href="https://github.com/Sahruk-alam"
              className="group hover:bg-gray-800 transition  bg-black p-2 rounded-full"
              target="_blank"
            >
              <FaGithub
                size={25}
                className="group-hover:text-white transition text-blue-400"
              />
            </a>
            <a
              href="https://www.facebook.com/share/18EXxx5dzC/"
              className="group hover:bg-blue-700 transition  bg-black p-2 rounded-full"
              target="_blank"
            >
              {" "}
              <FaFacebook
                size={25}
                className="group-hover:text-white transition text-blue-400"
              />
            </a>
            <a
              href="mailto:sahrukalam8059@gmail.com"
              className="group hover:bg-blue-500 transition  bg-black p-2 rounded-full"
              target="_blank"
            >
              {" "}
              <TfiEmail
                size={24}
                className="group-hover:text-white transition text-blue-400"
              />
            </a>
            <a
              href="https://wa.me/8801734748059"
              className="group hover:bg-green-600 transition  bg-black p-2 rounded-full"
              target="_blank"
            >
              <BsWhatsapp
                size={24}
                className="group-hover:text-white transition text-blue-400"
              />
            </a>
          </div>
        </nav>
      </footer>

      <div className="border-t-1 border-gray-500">
        <h2 className="text-white py-3 text-center text-sm">
          Design by Sahruk Alam
        </h2>
      </div>
    </div>
  );
};

export default Footer;
