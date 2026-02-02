import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import vuImg from "../../assets/vu1.jpeg.jpg";
import court from "../../assets/court.webp";
import hamir from "../../assets/hamir.jpeg";
const Education = () => {
  return (
    <div className="bg-blue-100 py-12 min-h-screen flex items-center">
      <div className="w-8/12 mx-auto">
        <h2 className="text-4xl flex font-semibold justify-center gap-2">
          <FaGraduationCap /> My{" "}
          <span className="text-violet-600"> Education</span>
        </h2>
        <div>
          {/* varendra university  */}
          <div className="hover:shadow-2xl rounded-xl shadow-lg bg-white mt-12 flex flex-col sm:flex-row gap-4 ">
            <div className="w-full sm:w-56 h-48 sm:h-32 rounded-xl overflow-hidden flex-shrink-0">
              <img
                src={vuImg}
                alt="VU"
                className="w-full h-full object-cover transition-transform 
        duration-500 group-hover:scale-110 "/>
            </div>
            <div className="px-4 pb-4 md:p-2">
              <h2 className=" text-lg sm:text-xl md:text-2xl font-medium ">
                Bachelor of Science in Computer Science & Engineering{" "}
              </h2>
                <a href="https://vu.edu.bd/" target="_blank"
                className="hover:underline hover:text-violet-600"  >
                Varendra University{" "}
              </a>
              <h2 className=" text-sm sm:text-base text-indigo-700 font-medium ">
                2023–2026 | Currently Studying 
              </h2>
              
            </div>
          </div>
          {/* court college  */}
          <div className="hover:shadow-2xl rounded-xl shadow-lg bg-white mt-12 flex flex-col sm:flex-row gap-4 ">
            <div className="w-full sm:w-56 h-48 sm:h-32 rounded-xl overflow-hidden flex-shrink-0">
              <img src={court}  alt="Court College"
                className="w-full h-full object-cover transition-transform 
        duration-500 group-hover:scale-110 "  />
            </div>
            <div className="px-4 pb-4 md:p-2">
              <h2 className=" text-lg sm:text-xl md:text-2xl font-medium ">
                Higher Secondary Certificate
              </h2>
              <a  href="https://rajcourtcollege.edu.bd/"  target="_blank"
                className="hover:underline hover:text-violet-600"  >
                Rajshahi court college{" "}
              </a>
              <h2 className=" text-sm sm:text-base text-indigo-700 font-medium ">
                GPA : 5.00
              </h2>
              <h2 className=" text-sm sm:text-base text-indigo-700 font-medium ">
                Session : 2018-2019
              </h2>
            </div>
          </div>
          {/* high school  */}
          <div className="hover:shadow-2xl rounded-xl shadow-lg bg-white mt-12 flex flex-col sm:flex-row gap-4 ">
            <div className="w-full sm:w-56 h-48 sm:h-35 rounded-xl overflow-hidden flex-shrink-0">
              <img src={hamir}  alt="High School"
                className="w-full h-full object-cover transition-transform 
        duration-500 group-hover:scale-110 "  />
            </div>
            <div className="px-4 pb-4 md:p-2">
              <h2 className=" text-lg sm:text-xl md:text-2xl font-medium ">
                Secondary School Certificate{" "}
              </h2>
              <p >Hamirkutsha H.M. Ershad high school  </p>
              <h2 className=" text-sm sm:text-base text-indigo-700 font-medium ">
                GPA : 5.00 
              </h2>
              <h2 className=" text-sm sm:text-base text-indigo-700 font-medium ">
                Session : 2016-2017
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
