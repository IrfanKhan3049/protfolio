import React, { useState } from 'react';
import irfan from '../../../assets/img/irfan.png'
import AdminProjectPage from '../../../pages/admin/admin-project-page';
import { Link } from 'react-router-dom';
import { removeToken } from '../../../SessionHelper/SessionHelper';


const Sidebar = () => {

  const [projectOpen,setProjectOpen]=useState(false)
  const [blogOpen,setBlogOpen]=useState(false)
  const [testimonialOpen,setTestimonialOpen]=useState(false)
  const [contactOpen,setContactOpen]=useState(false)

  const projecttoggle=()=>{
    setProjectOpen(!projectOpen);
  }
  const blogtoggle=()=>{
    setBlogOpen(!blogOpen);
  }
  const testimonialtoggle=()=>{
    setTestimonialOpen(!testimonialOpen);
  }
  const handleLogut=()=>{
    removeToken();
    window.location.href = '/'
  }
  
  return (
    <div className="flex flex-col justify-evenly items-center w-2/12 h-screen bg-secondery  ">
      <div>
      <div className="flex flex-col items-center  py-8 gap-3 ">
        <img className="w-20 h-20 border rounded-full border-white " src={irfan} alt="" />
        <p className="text-neutral-100 text-lg font-semibold pl-3 md:pl-none ">Irfan Khan</p>
      </div>
      
      <ul className=" pl-2 md:pl-8 text-start text-neutral-400 ">
        <li onClick={projecttoggle} className="py-2 hover:text-primary cursor-pointer relative">
          <Link to="/adminproject" className="  flex gap-2 items-center  ">
          <i className='bx bxs-message-square' ></i>
          <span  className='hidden md:flex pb-1'> Project </span>
          <i className={`hidden md:flex bx ${projectOpen?"bx-chevron-down":"bx-chevron-right"}`} ></i>
          </Link>
        <ul className={`${projectOpen?"flex":"hidden"} flex-col pl-2 md:pl-8`}>
          <li className="pt-1 hover:text-white"><Link to="/adminproject/add">Add New Project </Link></li>
          
        </ul>
        </li>

        <li onClick={blogtoggle} className="py-2 hover:text-primary cursor-pointer relative">
          <Link to="/adminblog" className="  flex gap-2 items-center  ">
          <i className='bx bxs-message-square' ></i>
          <span  className='hidden md:flex pb-1'> Blog </span>
          <i className={`hidden md:flex bx ${blogOpen?"bx-chevron-down":"bx-chevron-right"}`} ></i>
          </Link>
        <ul className={`${blogOpen?"flex":"hidden"} flex-col pl-2 md:pl-8`}>
          <li className="pt-1 hover:text-white"><Link to="/adminblog/add">Add New Blog </Link></li>
          
        </ul>
        </li>

        <li onClick={testimonialtoggle} className="py-2 hover:text-primary cursor-pointer relative">
          <Link to="/admintestimonial" className="  flex gap-2 items-center  ">
          <i className='bx bxs-message-square' ></i>
          <span  className='hidden md:flex pb-1'> Testimonial </span>
          <i className={`hidden md:flex bx ${testimonialOpen?"bx-chevron-down":"bx-chevron-right"}`} ></i>
          </Link>
        <ul className={`${testimonialOpen?"flex":"hidden"} flex-col pl-2 md:pl-8`}>
          <li className="pt-1 hover:text-white"><Link to="/admintestimonial/add">Add New Testimonial </Link></li>
          
        </ul>
        </li>
        <li  className="py-2 hover:text-primary cursor-pointer relative">
          <Link to="/admincontact" className="  flex gap-2 items-center  ">
          <i className='bx bxs-message-square' ></i>
          <span  className='hidden md:flex pb-1'> Contact </span>
          
          </Link>
        
        </li>
      </ul>

      </div>
      
      
      <button onClick={handleLogut} className=" mb-10 text-primary text-lg font-semibold">Logout</button>
    </div>
  );
};

export default Sidebar;