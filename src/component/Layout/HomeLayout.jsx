import React from 'react';
import Navbar from '../pages/Navbar';
import Hero from '../pages/Hero';
import AboutMe from '../pages/AboutMe';
import { Outlet } from 'react-router';
import Skill from '../pages/Skill';
import Education from '../pages/Education';

const HomeLayout = () => {
    return (
        <div>
            <Navbar />
            <Hero/>
            
            {/* https://jigarsable.netlify.app/ */}
            <AboutMe/>
            <Skill/>
            <Education/>
        </div>
    );
};

export default HomeLayout;