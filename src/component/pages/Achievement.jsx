import React, { useEffect, useState } from 'react';

const Achievement = () => {
    const [achievements, setAchievements] = useState([]);
    useEffect(() => {
        fetch('/Certificate.json')
        .then(res => res.json())
        .then(data => {
            setAchievements(data);
        });
    }, []);
    return (
       <div className='bg-gray-100 pb-12'>
         <div className='w-11/12 mx-auto'>
            <h2 className="text-2xl sm:text-4xl flex items-center font-semibold justify-center py-12">Achievements</h2>
            <div>

<div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
  {
  achievements.map((achievement) => (
    <div
      key={achievement.id} className=" group relative overflow-hidden
        rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 " >
      <div className="h-52 overflow-hidden">
        <img src={achievement.image} alt={achievement.title}
          className="  w-full h-full object-cover
            scale-100 group-hover:scale-110 transition-transform duration-700 " />
      </div>
      <div className="  absolute inset-0 bg-black/60  flex items-end
       opacity-0 group-hover:opacity-100 transition-all duration-500 " >
        <h3 className=" w-full text-center text-white text-xl font-semibold
            mb-6 translate-y-6 group-hover:translate-y-0 transition-all duration-500 " >
          {achievement.title}
        </h3>
      </div>
    </div>
  ))}
</div>



            </div>
                
        </div>
       </div>

    );
};

export default Achievement;