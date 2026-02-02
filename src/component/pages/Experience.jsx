import React from 'react';
import TimelineItem from './TimelinelItem';
import Achievement from './Achievement';

const Experience = () => {
    return (
        <div className='py-12 min-h-screen' id='experience'>
            <h2 className="text-2xl sm:text-4xl flex items-center font-semibold justify-center">Experience & Achievement</h2>
        <div>
           <TimelineItem></TimelineItem> 
           <Achievement></Achievement>
        </div>
        </div>
    );
};

export default Experience;