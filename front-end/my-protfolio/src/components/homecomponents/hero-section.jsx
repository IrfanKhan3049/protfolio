import React from 'react';
import irfan from "../../assets/img/irfan.png"
import htmllogo from "../../assets/img/html-logo.png"
import tailwindlogo from "../../assets/img/tailwind-logo.png"
import reactlogo from "../../assets/img/react-logo.png"
import nodelogo from "../../assets/img/node-logo.png"
import expresslogo from "../../assets/img/express-logo.png"
import mongologo from "../../assets/img/mongo-logo.png"
import wave from "../../assets/img/wave.png"


const HeroSection = () => {
  return (
    <div className="max-w-[1400px] mx-auto mt-10 grid grid-cols-1 md:grid-cols-6 md:grid-rows-2  gap-10 ">

      <div className="bg-secondery grid md:col-span-2 md:row-span-2 place-items-center rounded-3xl shadow-inner shadow-[#18181c]  ">
        <img className="w-36 pt-11 rounded-b-full" src={irfan} alt="irfan img" />
        <p className="text-neutral-400 pt-6 uppercase font-semibold text-xl tracking-tighter">hey! I'm <span className="text-primary">irfan khan</span></p>
        <p className="text-neutral-400 text-base">Software Developer</p>
        <p className="text-neutral-400 text-base pt-5">irfankhanbubt@gmail.com</p>
        <p className="text-neutral-400 text-base  ">+88 01992395213</p>
        <div className="flex flex-row gap-3 pt-5 pb-5">
          <i className="bx bxl-facebook bx-sm text-neutral-400  bx-border border-neutral-800 cursor-pointer "></i>
          <i className="bx bxl-github bx-sm text-neutral-400  bx-border border-neutral-800 cursor-pointer" ></i>
          <i className="bx bxl-linkedin bx-sm text-neutral-400  bx-border border-neutral-800 cursor-pointer" ></i>
          <i className="bx bxl-instagram bx-sm text-neutral-400   bx-border border-neutral-800 cursor-pointer" ></i>
        </div>
        <button className=" text-black  w-60 md:w-52 lg:w-60 h-12 mb-5 bg-primary   border-2 border-primary rounded-3xl hover:text-primary hover:bg-[#121214] ">Hire me!</button>
        <button  className="text-neutral-400   w-60 md:w-52 lg:w-60 h-12 mb-10 border border-neutral-600 rounded-3xl hover:border-primary hover:text-primary">download cv</button>
      </div>

      <div className="bg-secondery md:col-span-4 rounded-3xl p-8 shadow-inner shadow-[#18181c]">
        <h4 className="text-neutral-400 text-lg"><span className="text-primary ">Hi! </span>There I'm</h4>
        <h1 className="pt-4 uppercase text-neutral-50 text-5xl font-bold leading-snug tracking-tight">professional <span className="text-primary">web application </span> specialist</h1>
        <p className="text-neutral-400 pt-6 ">Full Stack Web Developer and Web Application specializing 
          in front-end and back-end development. Experienced with all stages of the development cycle 
          for dynamic websites. Well versed in numerous programming languages JavaScript ES6 Nodejs, 
          structured language HTML5 CSS3, open-source front-end JavaScript library ReactJS, NextJS With 
          MongoDB & MySql Database.</p>
      </div>

      <div className="bg-secondery md:col-span-2 rounded-3xl p-10 shadow-inner shadow-[#18181c]">
        
        <p className=" text-neutral-50 text-3xl font-semibold ">My Expert Area</p>

        <div className="grid grid-cols-3 gap-5 pt-6 md:grid-cols-2 lg:grid-cols-3 ">

          <div className="flex flex-col items-center gap-2">
            <img className="w-14 h-14 border rounded-full outline outline-4 outline-neutral-50 outline-offset-1 " src={htmllogo} alt="" />
            <p className="text-neutral-400 ">html5</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <img className="w-14 h-14 border rounded-full outline outline-4 outline-neutral-50 outline-offset-1 "  src={tailwindlogo} alt="" />
            <p className="text-neutral-400">tailwind css</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <img className="w-14 h-14 border rounded-full outline outline-4 outline-neutral-50 outline-offset-1 "  src={reactlogo} alt="" />
            <p className="text-neutral-400">React.js</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <img className="w-14  h-14 border rounded-full outline outline-4 outline-neutral-50 outline-offset-1 "  src={nodelogo} alt="" />
            <p className="text-neutral-400 ">node.js</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <img className="w-14 h-14 border rounded-full outline outline-4 outline-neutral-50 outline-offset-1 "  src={expresslogo} alt="" />
            <p className="text-neutral-400 ">express.js</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <img className="w-14 h-14 border rounded-full outline outline-4 outline-neutral-50 outline-offset-1 "  src={mongologo} alt="" />
            <p className="text-neutral-400 ">mongoDB</p>
          </div>
        </div>
      </div>

      <div className="bg-secondery md:col-span-2 rounded-3xl p-6 shadow-inner shadow-[#18181c]">
        <h3 className=" w-80 mx-auto h-10  bg-black rounded-xl text-neutral-400 text-md  pl-4 pt-1 overflow-hidden ">Hi i am expert web developer lets work!</h3>
        <h1 className=" text-neutral-50 text-4xl leading-normal font-bold pl-4 pt-10 pb-16 md:pb-20 lg:pb-16"> Lets <img className="w-10 h-10 inline-block" src={wave} alt="" /> <br />Work Together!</h1>
        <a className="pl-4 text-primary text-center underline underline-offset-4 " href="#"> Let's Talk <i className='bx bx-trending-up' ></i> </a>
        
      </div>

    </div>
  );
};

export default HeroSection;