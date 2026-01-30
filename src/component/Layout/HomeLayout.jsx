import React from 'react';
import Navbar from '../pages/Navbar';
import Hero from '../pages/Hero';
import AboutMe from '../pages/AboutMe';
import { Outlet } from 'react-router';
import Skill from '../pages/Skill';
import Education from '../pages/Education';
import Projects from '../pages/Projects';
import Footer from '../pages/Footer';
import Experience from '../pages/Experience';

const HomeLayout = () => {
    return (
        <div>
            <Navbar />
            <Hero/>
            
            {/* https://jigarsable.netlify.app/ */}
            <AboutMe/> 
            <Skill/>
            <Education/>
            <Projects/>
            <Experience/>
            <Footer/>
        </div>
    );
};

export default HomeLayout;