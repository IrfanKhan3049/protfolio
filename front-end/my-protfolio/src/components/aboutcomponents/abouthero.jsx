import React from 'react';
import irfan from '../../assets/img/irfan.png'

const AboutHero = () => {
  return (
    <div className="max-w-[1400px] mx-auto  pb-8  mt-10 ">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-10  ">
        <div className="col-span-1 md:col-span-2 ">
         <div className="flex flex-col items-center h-[400px] bg-secondery rounded-3xl shadow-inner shadow-[#18181c] ">
            <img className="w-36 pt-11 rounded-b-full" src={irfan} alt="irfan img" />
            <p className="text-neutral-400 pt-6 uppercase font-semibold text-xl tracking-tighter">hey! I'm <span className="text-primary">irfan khan</span></p>
            <p className="text-neutral-400 text-base">Software Developer</p>
            <p className="text-neutral-400 text-base pt-5">irfankhanbubt@gmail.com</p>
            <p className="text-neutral-400 text-base  ">+88 01992395213</p>
         </div>

        </div>
        <div className="col-span-1 md:col-span-4 bg-secondery rounded-3xl shadow-inner shadow-[#18181c]  p-10 ">
          <p className="text-neutral-200 text-5xl font-medium pb-6 tracking-wider">I’m Irfan khan, a web designer.</p>
          <p className="text-neutral-400 text-lg pb-6">I am a San francisco-based product designer with a focus on web design, illustration, a visual development. I have a 
            diverse range of experience having worked across various fields and industries.<br/><br/>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin 
            literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin
             professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a 
             Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable 
             source.</p>
          <button className="text-white bg-primary text-sm w-36 h-10 rounded-2xl hover:text-neutral-400 hover:border hover:border-neutral-400 hover:bg-secondery ">Get in Touch <i className='bx bx-message-square-detail'></i></button>

        </div>
      </div>
    </div>
  );
};

export default AboutHero;