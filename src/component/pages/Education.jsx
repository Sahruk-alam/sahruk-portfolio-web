import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import vuImg from '../../assets/vu1.jpeg.jpg'
import court from '../../assets/court.webp'
import hamir from '../../assets/hamir.jpeg'
const Education = () => {
    return (
       <div className='bg-blue-100 py-12 min-h-screen flex items-center'>
         <div className='w-8/12 mx-auto'>
            <h2 className='text-4xl flex font-semibold justify-center gap-2'><FaGraduationCap/> My <span className='text-violet-600'> Education</span></h2>
        <div>

        <div className='hover:shadow-2xl shadow-lg bg-white mt-12  flex gap-4'>
            <img src={vuImg} className='w-55 h-32
                ' alt="VU" />
            <div>
                <h2 className='text-2xl mt-1.5 font-medium'>Bachelor of Science in Computer Science & Engineering</h2>
                <a href="https://vu.edu.bd/" target='_blank' className='hover:underline hover:text-violet-600'>Varendra University</a>
                <h2 className='text-indigo-700 font-medium mb-1.5'>2023-2026 | Running</h2>
            </div>
        </div>

         <div className='hover:shadow-2xl shadow-lg bg-white mt-12 flex gap-4'>
            <img src={court} className='w-55 h-32  ' alt="VU" />
            <div>
                <h2 className='text-2xl mt-1.5 font-medium'>Higher Secondary Certificate</h2>
                <a href="https://rajcourtcollege.edu.bd/" target='_blank' className='hover:underline hover:text-violet-600'>Rajshahi court college</a>
                <h2>GPA : 5.00</h2>
                <h2 className='text-indigo-700 font-medium mb-1.5'>Session : 2018-2019</h2>
            </div>
        </div>

          <div className='hover:shadow-2xl shadow-lg bg-white mt-12 flex gap-4'>
            <img src={hamir} className='w-55 h-32  ' alt="VU" />
            <div>
                <h2 className='text-2xl mt-1.5 font-medium'>Secondary School Certificate</h2>
                <a >Hamirkutsha H.M. Ershad high school</a>
                <h2>GPA : 5.00</h2>
                <h2 className='text-indigo-700 font-medium mb-1.5'>Session : 2016-2017</h2>
            </div>
        </div>

        </div>
        </div>
       </div>
    );
};

export default Education;