import React, { useEffect, useState } from "react";
import { BsPersonWorkspace } from "react-icons/bs";
import Pwork from "./Pwork";

const Projects = () => {
  const [work,setWork] = useState([]);
  useEffect(() => {
    fetch("/Work.json")
    .then((res) => res.json())
    .then((data) => {
      setWork(data);
    });
  }, []);
  return (
    <div id="projects" className=" bg-base-300 min-h-screen">
      <div className="py-12 w-11/12 mx-auto">
        <h2 className="text-3xl sm:text-4xl flex sm:gap-2 justify-center font-bold text-center">
          <BsPersonWorkspace />
          Projects & Work
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {
          work.map((project) => ( 
            <Pwork key={project.id} project={project}></Pwork>
          ))}
        </div>     
      </div>
    </div>
  );
};

export default Projects;
