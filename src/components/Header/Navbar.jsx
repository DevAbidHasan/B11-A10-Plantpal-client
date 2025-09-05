import React from 'react';
import { Link, NavLink } from 'react-router';
import { PiPlant } from "react-icons/pi";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-lg dropdown-content bg-base-100 shadow">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/blogs">All Plants</NavLink>
        <NavLink>Add Plants</NavLink>
        <NavLink>My Plants</NavLink>
      </ul>
    </div>
    <Link to="/" className="text-xl flex items-center gap-2"><PiPlant className='text-green-600' size={30}/><span className='text-blue-500 font-bold'>PlantPal</span></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu text-blue-500 gap-12 menu-horizontal px-1">
      <NavLink to="/">Home</NavLink>
        <NavLink to="/blogs">All Plants</NavLink>
        <NavLink to="/about">Add Plants</NavLink>
        <NavLink to="/contact">My Plants</NavLink>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Login</a>
    <a className="btn">Register</a>
  </div>
</div>
    );
};

export default Navbar;