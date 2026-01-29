import React from 'react';
import sahruk from '../../assets/sahruk.jpg';
import { Link, NavLink } from 'react-router';
const Navbar = () => {
    const links=<>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/skill">Skills</NavLink>
    <NavLink to="/education">Education</NavLink>
    <NavLink to="/projects">Projects</NavLink>
    <NavLink to="/contact">Contact</NavLink>
    </>
    return (
       <div className="navbar sticky top-0 z-1 bg-base-100 shadow-sm  px-4">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost sm:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <Link to="/" className="font-bold hover:text-amber-500 ml-3 text-xl">Sahruk</Link>
  </div>
  <div className="navbar-center hidden sm:flex">
    <ul className="menu font-semibold menu-horizontal px-1 gap-5 ">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    <img src={sahruk} className='w-10 h-10 rounded-full' alt="Sahruk" />
  </div>
</div>
    );
};

export default Navbar;