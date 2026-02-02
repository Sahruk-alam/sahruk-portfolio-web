import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import {
  FaArrowCircleDown,
  FaFacebook,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import Avator from "../../assets/avator.png";

const Hero = () => {
  return (
    <div id="home" className="bg-base-300 min-h-screen items-center flex">
      <div className="w-10/12 mx-auto gap-7 justify-between flex items-center py-11">
        <div>
          <h2 className="text-4xl font-bold">Hi There,</h2>
          <h2 className="text-4xl my-2 font-bold">
            I'm <span className="text-orange-400">Sahruk Alam Sarder</span>
          </h2>
          <p className="font-semibold text-lg">I am into Frontend Developer</p>
          <button className="btn my-3 rounded-2xl btn-primary gap-2 px-8">
            About Me
            <FaArrowCircleDown />
          </button>
          <div className="flex gap-2 mt-4">
            <a
              href="https://www.linkedin.com/in/sahruk-alam-sarder-ab5495304?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="group hover:bg-blue-500 transition  bg-black p-2 rounded-full"
              target="_blank"
            >
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
        </div>

        <div>
          <img
            src={Avator}
            className="rounded-full bg-amber-200 h-90 hidden md:block"
            alt="Avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
