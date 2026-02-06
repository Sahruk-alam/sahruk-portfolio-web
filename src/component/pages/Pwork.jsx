import React from "react";
import Greennest from "../../assets/Greennest.png";
import Hero from "../../assets/Hero.png";
import Dragon from "../../assets/Dragon_news.png";
import Hotline from "../../assets/Hotline.png";
import English from "../../assets/English.png";

const imageMap = {
  "/Greennest.png": Greennest,
  "/Hero.png": Hero,
  "/Dragon_news.png": Dragon, 
  "/Hotline.png": Hotline,
  "/English.png": English,
};
const Pwork = ({ project }) => {
  const imageSrc = imageMap[project.image] || project.image;
  return (
    <div className="mt-12 w-11/12 mx-auto ">
      <div className="card bg-base-100 md:w-64 shadow-sm overflow-hidden group relative">
        <figure>
          <img
            src={imageSrc}
            alt={project.title}
            className="w-full h-48 object-cover"
          />
        </figure>
        <h2 className="bg-amber-400 text-xl font-semibold text-center">
          {project.title}
        </h2>
        <div
          className="
      absolute inset-0 bg-black/70
      flex flex-col justify-center items-center gap-4
      translate-y-full group-hover:translate-y-0
      transition-all duration-500 ease-out"
        >
          <div className="flex gap-3">
            <a
              href={project.live}
              className="btn btn-sm btn-primary"
              target="_blank"
            >
             Live View
            </a>
            <a
              href={project.code}
              className="btn btn-sm btn-outline btn-secondary"
              target="_blank"
            >
             Github Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pwork;
