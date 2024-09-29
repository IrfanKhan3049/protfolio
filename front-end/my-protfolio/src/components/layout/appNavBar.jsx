import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/img/logo.png';


const AppNavBar = () => {
  const [open,setOpen]=useState(true);

  const [isDarkMode,setDarkMode]=useState(true);
  
  
  const toggleMenu=()=>{
    setOpen(!open);
  }
  const toggleMode=()=>{
    setDarkMode(!isDarkMode);
  }

  return (
    <div className="relative">
    <div className="max-w-[1400px] mx-auto h-24 bg-secondery rounded-3xl flex justify-between items-center px-10 sticky top-0 border-b-2 border-black shadow-inner shadow-[#18181c] ">
     <Link to="/"><img className={` text-primary text-3xl px-2 font-bold  cursor-pointer `} src={''} alt="IRFAN." /></Link> 
      <div>
        <ul className=" hidden md:flex gap-8">
          <li><NavLink to="/" className= {(navInfo)=>(navInfo.isActive?'text-primary text-base font-semibold':`text-neutral-400 text-base font-semibold  hover:text-primary `)}>Home</NavLink></li>
          <li><NavLink to="/about" className= {(navInfo)=>(navInfo.isActive?'text-primary text-base font-semibold':`text-neutral-400 text-base font-semibold  hover:text-primary `)}>About</NavLink></li>
          <li><NavLink to="/services" className= {(navInfo)=>(navInfo.isActive?'text-primary text-base font-semibold':`text-neutral-400 text-base font-semibold  hover:text-primary `)}>Services</NavLink></li>
          <li><NavLink to="/projectswork" className= {(navInfo)=>(navInfo.isActive?'text-primary text-base font-semibold':`text-neutral-400 text-base font-semibold  hover:text-primary `)}>Works</NavLink></li>
          <li><NavLink to="/contact" className= {(navInfo)=>(navInfo.isActive?'text-primary text-base font-semibold':`text-neutral-400 text-base font-semibold  hover:text-primary `)}>Contact</NavLink></li>
          <li><NavLink to="/blog" className= {(navInfo)=>(navInfo.isActive?'text-primary text-base font-semibold':`text-neutral-400 text-base font-semibold  hover:text-primary `)}>Blog</NavLink></li>
        </ul>
      </div>
      <div className="flex gap-4 justify-center ">
      <i onClick={()=>{toggleMode()}} className={`hidden md:inline-block text-primary bx   bx-sm ${isDarkMode ? "bxs-sun ":"bxs-moon"} bx-border-circle border-neutral-700 cursor-pointer hover:text-primary hover:border-primary active:text-primary focus:text-primary focus:border-primary `}></i>
      <Link to="/contact" className="hidden md:inline-block text-center align-middle  text-neutral-400 rounded-md text-base font-semibold w-24 border border-neutral-600 hover:text-primary hover:border-primary active:text-primary active:border-primary focus:text-primary focus:border-primary pt-1">Hire Me</Link>
      <i onClick={toggleMenu} className={open ? " text-neutral-400  bx bx-menu bx-md cursor-pointer hover:text-primary md:hidden":" text-neutral-400  bx bx-x bx-md cursor-pointer hover:text-primary md:hidden"}></i>
      </div>
    </div>

    <ul className={open? "hidden" : " bg-black bg-opacity-80 w-screen  p-8 gap-2 absolute right-0 flex flex-col items-end md:hidden"}>
          <li><a href="#" className="text-neutral-400 text-base font-semibold  hover:text-primary active:text-primary focus:text-primary focus:border-b-2 focus:border-primary focus:w-1/2 ">Home</a></li>
          <li><a href="#" className="text-neutral-400 text-base font-semibold hover:text-primary active:text-primary focus:text-primary focus:border-b-2 focus:border-primary">About</a></li>
          <li><a href="#" className="text-neutral-400 text-base font-semibold hover:text-primary active:text-primary focus:text-primary focus:border-b-2 focus:border-primary">Services</a></li>
          <li><a href="#" className="text-neutral-400 text-base font-semibold hover:text-primary active:text-primary focus:text-primary focus:border-b-2 focus:border-primary">Works</a></li>
          <li><a href="#" className="text-neutral-400 text-base font-semibold hover:text-primary active:text-primary focus:text-primary focus:border-b-2 focus:border-primary">Contact</a></li>
          <li><a href="#" className="text-neutral-400 text-base font-semibold hover:text-primary active:text-primary focus:text-primary focus:border-b-2 focus:border-primary">Blog</a></li>
    </ul>

    </div>
    
  );
};

export default AppNavBar;