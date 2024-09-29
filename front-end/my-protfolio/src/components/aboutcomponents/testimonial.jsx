import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import tsclnt1 from '../../assets/img/tsclnt1.jpg';
import tsclnt2 from '../../assets/img/prjctimg2.jpg';
import tsclnt3 from '../../assets/img/tsclnt3.jpg';
import tsclnt4 from '../../assets/img/tslclnt4.jpg';
import { useState,useEffect } from 'react';
import axios from 'axios';


const Testimonial = () => {
  const [mdata,setMdata]=useState(null)

  useEffect(()=>{
    const fetchContactData = async ()=>{
      const res= axios.get('http://localhost:3000/api/v1/ListTestimonial').then(res=> setMdata(res.data.data)).catch(err => console.log(err));
    }
    fetchContactData()
  },[])

  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
    
    
  };

  return (
    <div className="max-w-[1400px] mx-auto  pb-8   bg-secondery rounded-3xl p-10 ">
      <p className="text-neutral-400 text-center pb-5 ">Testinomials</p>
      <p className="text-neutral-200 text-center text-5xl font-semibold mb-10">What clients say!</p>
      <div className="">
      <Slider {...settings}>
        
      {mdata && mdata.map((item)=>( 
         <div key={item._id}>

         <div className="  p-6 border border-neutral-800 rounded-xl m-4 hover:border-primary">
         <img className="w-14 h-14 rounded-full mb-6 " src={tsclnt1} alt="" />
         <p className=" text-neutral-400 text-base pb-8">{item.clientsay}</p>
         <div>
           <p className="text-neutral-200 text-xl font-medium">{item.clientname}</p>
           <p className="text-neutral-400 ">{item.clienddeg +" & "+item.clientcompanyname }</p>
         </div>
       </div>
 
         </div>

      ))}
        
      

       

       

    </Slider>
      </div>
    </div>
  );
};

export default Testimonial;