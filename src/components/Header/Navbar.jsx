import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { HiMenu } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {

  const [isOpen, setIsOpen]=useState(false);
  const toggleMenu=()=>{
    setIsOpen(!isOpen);
    
  }

  useEffect(()=>{
    if(isOpen) {
      document.body.classList.add("no-scroll");
    }
    else {
      document.body.classList.remove("no-scroll");
    }
  },[isOpen])

  useEffect(()=>{
    const handleResize=()=>{
        if(window.innerWidth>=768){
          setIsOpen(false);
        }
    }
    window.addEventListener('resize', handleResize);

    return () =>{
      window.removeEventListener('resize', handleResize);
    }
  },[])

  return (
   <div className='bg-gray-900 poppins py-2'>
     <nav className=' w-11/12 mx-auto text-white'>
      <div className='flex items-center justify-between'>
        <div className='z-20 text-2xl font-bold'>
         <Link to="/">🌿Plant<span className='text-green-500'>pal</span></Link>
        </div>
        {
          !isOpen && (
            <div onClick={toggleMenu} className='cursor-pointer hover:text-green-500 md:hidden'>
              <HiMenu size={30}/>
            </div>
          )
        }
        {
          isOpen && (
            <div onClick={toggleMenu} className='cursor-pointer hover:text-red-500 z-20 md:hidden '>
              <IoCloseSharp size={30}/>
            </div>
          )
        }
       {
        isOpen ? <div className='bg-gray-700 overflow-y-hidden fixed z-10 top-0 left-0 w-screen flex flex-col items-center justify-center gap-5 duration-300 ease-in min-h-[380px] max-h-screen'>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">All Plants</NavLink>
          <NavLink to="/add-plant">Add Plant</NavLink>
          <NavLink>My Plants</NavLink>
          <Link to="/auth/login" className="btn btn-primary">Login</Link>
          <Link to="/auth/registration" className="btn btn-success">Register</Link>
        </div> : <div className='bg-gray-800 overflow-y-hidden fixed z-10 top-0 left-[-150%] w-screen flex flex-col items-center justify-center gap-5 duration-300 ease-in min-h-[380px] max-h-screen'></div>
       }
        <div className='md:flex text-gray-300  md:gap-5 lg:gap-11 items-center justify-center hidden '>
          <NavLink to="/" className="hover:text-white ">Home</NavLink>
          <NavLink  className="hover:text-white " to="/about">All Plants</NavLink>
          <NavLink to="/add-plant" className="hover:text-white ">Add Plant</NavLink>
          <NavLink to="/dkd" className="hover:text-white ">My Plants</NavLink>
          
        </div>
        <div className='md:flex hidden items-center gap-5 justify-between'>
          <Link to="/auth/login" className="btn btn-primary">Login</Link>
          <Link to="/auth/registration" className="btn btn-success">Register</Link>
        </div>
      </div>
    </nav>
   </div>
  );
};

export default Navbar;