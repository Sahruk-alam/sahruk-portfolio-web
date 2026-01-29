import React from 'react';
import { FaUser, FaUserAlt } from 'react-icons/fa';
import sahruk from '../../../public/sahruk.jpg';
const AboutMe = () => {
    return (
        <div className='w-10/12 min-h-screen flex items-center mx-auto my-12'>
           <div>
             <h2 className='text-5xl justify-center flex items-center gap-4 font-semibold'><FaUserAlt /> About <span className='text-fuchsia-700'>Me</span></h2>
          <div className='mt-16 flex flex-col md:flex-row items-center gap-12'>
              <div className='flex-1'>
                <img src={sahruk} className='rounded-3xl object-cover grayscale hover:grayscale-0 transition-all hover:scale-101 duration-300' alt="Sahruk Alam Sarder" />
              </div>
            <div className='flex-1'>
                <h3 className='text-3xl font-semibold mt-8'>I'm <span className='text-fuchsia-700'>Sahruk Alam Sarder</span></h3>
                <h4 className='text-xl font-medium'>Fontend Developer</h4>
                <p className='mt-4 text-lg'>I'm a passionate web developer with expertise in creating dynamic and responsive websites. With a strong foundation in HTML, 
                  CSS, JavaScript, and modern frameworks like React, I strive to build user-friendly and visually appealing web applications. My goal is to continuously 
                  learn and grow in the field of web development while delivering high-quality solutions to clients.</p>
                  <h2 className='my-3'><span className='text-blue-600'>Email : </span> sahrukalam8059@gmail.com</h2>
                  <p><span className='text-blue-600'>Place : </span>Rajshahi, Bangladesh</p>
            </div>
          </div>
           </div>
        </div>
    );
};

export default AboutMe;