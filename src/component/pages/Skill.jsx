import React from "react";
import { FaGithub, FaHtml5, FaJsSquare, FaNode, FaReact } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { IoLogoCss3, IoLogoFirebase, IoLogoPython } from "react-icons/io5";
import { LuSpeech } from "react-icons/lu";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMysql } from "react-icons/si";
const Skill = () => {
  return (
    <div id="skill" className="mt-15 bg-violet-600 py-10 min-h-screen ">
      <div className="w-11/12 mx-auto ">
        <h2 className="text-4xl flex text-amber-300 gap-2 justify-center font-bold">
          <GiSkills />
          Skills & Abilities
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 bg-violet-300 rounded-2xl mt-10">
          <div className="bg-black p-2 flex flex-col items-center justify-center w-30 h-30 rounded-lg mx-auto mt-10 hover:scale-105 transition-all duration-300 cursor-pointer">
            <FaReact size={40} className="text-blue-500" />
            <h3 className="text-white mt-1 font-semibold">ReactJS</h3>
          </div>

          <div className="bg-black p-2 flex flex-col items-center justify-center w-30 h-30 rounded-lg mx-auto mt-10 hover:scale-105 transition-all duration-300 cursor-pointer">
            <FaJsSquare size={40} className="text-yellow-500" />
            <h3 className="text-white mt-1 font-semibold">JavaScript</h3>
          </div>
          <div className="bg-black p-2 flex flex-col items-center justify-center w-30 h-30 rounded-lg mx-auto mt-10 hover:scale-105 transition-all duration-300 cursor-pointer">
            <IoLogoFirebase size={40} className="text-yellow-500" />
            <h3 className="text-white mt-1 font-semibold">Firebase</h3>
          </div>

          <div className="bg-black p-2 flex flex-col items-center justify-center w-30 h-30 rounded-lg mx-auto mt-10 hover:scale-105 transition-all duration-300 cursor-pointer">
            <FaNode size={40} className="text-gray-400" />
            <h3 className="text-white mt-1 font-semibold">NodeJS</h3>
          </div>

          <div className="bg-black p-2 flex flex-col items-center justify-center w-30 h-30 rounded-lg mx-auto mt-10 hover:scale-105 transition-all duration-300 cursor-pointer">
            <RiTailwindCssFill size={40} className="text-blue-500" />
            <h3 className="text-white mt-1 font-semibold">Tailwind CSS</h3>
          </div>

          <div className="bg-black p-2 flex flex-col items-center justify-center w-30 h-30 rounded-lg mx-auto mt-10 hover:scale-105 transition-all duration-300 cursor-pointer">
            <FaHtml5 size={40} className="text-orange-500" />
            <h3 className="text-white mt-1 font-semibold">HTML5</h3>
          </div>

          <div className="bg-black p-2 flex flex-col items-center justify-center w-30 h-30 rounded-lg mx-auto mt-10 hover:scale-105 transition-all duration-300 cursor-pointer">
            <IoLogoCss3 size={40} className="text-blue-500" />
            <h3 className="text-white mt-1 font-semibold">CSS3</h3>
          </div>

          <div className="bg-black p-2 flex flex-col items-center justify-center w-30 h-30 rounded-lg mx-auto mt-10 hover:scale-105 transition-all duration-300 cursor-pointer">
            <IoLogoPython size={40} className="text-yellow-500" />
            <h3 className="text-white mt-1 font-semibold">Python</h3>
          </div>

          <div className="bg-black p-2 flex flex-col items-center justify-center w-30 h-30 rounded-lg mx-auto mt-10 hover:scale-105 transition-all duration-300 cursor-pointer">
            <SiMysql size={40} className="text-gray-300" />
            <h3 className="text-white mt-1 font-semibold">MySQL</h3>
          </div>

          <div className="bg-black p-2 flex flex-col items-center justify-center w-30 h-30 rounded-lg mx-auto mt-10 hover:scale-105 transition-all duration-300 cursor-pointer">
            <FaGithub size={40} className="text-white" />
            <h3 className="text-white mt-1 font-semibold">GitHub</h3>
          </div>

          <div className="bg-black p-2 flex flex-col items-center m-10 justify-center w-30 h-30 rounded-lg mx-auto mt-10 hover:scale-105 transition-all duration-300 cursor-pointer">
            <LuSpeech size={40} className="text-violet-500" />
            <h3 className="text-white mt-1 font-semibold text-center">
              Public Speech
            </h3>
          </div>

           <div className="bg-black p-2 flex flex-col items-center m-10 justify-center w-30 h-30 rounded-lg mx-auto mt-10 hover:scale-105 transition-all duration-300 cursor-pointer">
            <SiExpress size={40} className="text-violet-500" />
            <h3 className="text-white mt-1 font-semibold text-center">
              ExpressJS
            </h3>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Skill;
