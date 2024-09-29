import React, { useEffect } from 'react';
import prjctimg1 from '../../assets/img/prjctimg1.jpg'
import prjctimg2 from '../../assets/img/prjctimg2.jpg'
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Skeleton from '../../skeleton/Skeleton';


const ProjectsWork = () => {
  
  const [mdata,setMdata]=useState(null)
  
  useEffect(()=>{
    const fetchContactData = async ()=>{
      const res= axios.get('http://localhost:3000/api/v1/ListProject').then(res=> setMdata(res.data.data)).catch(err => console.log(err));
    }
    fetchContactData()
  },[])
  


  return (

    <div className="max-w-[1400px] mx-auto bg-secondery mt-10 rounded-3xl shadow-inner shadow-[#18181c]">
      <h1 className="max-w-[400px] mx-auto text-neutral-50  text-5xl font-semibold p-1 pt-8 text-center">Works & Projects</h1>
      <p className="max-w-[600px] mx-auto py-6 text-neutral-400 text-lg text-center">Check out some of my design projects,
         meticulously crafted with love and dedication,each one refleting the passion and soul I poured into every detail.</p>
      {mdata==null?<Skeleton/>:<div className="grid grid-cols-1 justify-items-center gap-8 p-12  lg:grid-cols-2 xl:grid-cols-3 ">
        
        {mdata && mdata.map((item)=>(
          <div key={item._id} className="group flex flex-col items-start rounded-b-2xl w-[400px] border border-neutral-600 overflow-hidden ">
            <img className="max-w-full"  src={prjctimg2} alt="demo image" />
            <p className="text-neutral-500 text-base font-semibold pt-8 pl-8">{item.projecttitle}</p>
            <p className="text-neutral-400  text-xl font-semibold pl-8 overflow-hidden ">{item.projectshortdes}</p>
            <div className="group-hover:text-primary flex flex-row  pt-5 pl-8 pb-4 text-neutral-500 text-base   ">
              <Link className="pr-10" to={item.projectlivelink}>Live Link</Link>
              <Link to={item.projectgitlink}>Git Link</Link>
            </div>
          </div>
  
        ))}
          
          
  
        </div> }
      
    </div>
  );
};

export default ProjectsWork;