import React from 'react';

const Pwork = ({ project }) => {
    console.log(project);
    return (
        <div className='mt-12 w-11/12 mx-auto '>

       <div className="card bg-base-100 w-64 shadow-sm overflow-hidden group relative">

  {/* IMAGE */}
  <figure>
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-48 object-cover"
    />
  </figure>
  {/* TITLE */}
    <h2 className="bg-amber-400 text-xl font-semibold text-center">
      {project.title}
    </h2>
  {/* OVERLAY CONTENT */}
  <div
    className="
      absolute inset-0 bg-black/70
      flex flex-col justify-center items-center gap-4
      translate-y-full group-hover:translate-y-0
      transition-all duration-500 ease-out" >
  
    {/* BUTTONS */}
    <div className="flex gap-3">
      <a href={project.live} className="btn btn-sm btn-primary" target='_blank'>
        view
      </a>
      <a href={project.code} className="btn btn-sm btn-outline btn-secondary" target='_blank'>
        GitHub
      </a>
    </div>
  </div>
</div>


        </div>
    );
};

export default Pwork;