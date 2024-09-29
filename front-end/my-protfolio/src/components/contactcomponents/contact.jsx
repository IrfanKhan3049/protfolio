import React from 'react';
import { useState,useEffect } from 'react';
import axios from "axios"

const Contact = () => {
  const initialValues = {fullname:"",emailaddress:"",messagetext:""};
  const [formValues,setFormValues] = useState(initialValues);
  const [formErrors,setFormErrors] = useState({});
  const [isSubmit,setSubmit] = useState(false);

  const handleChanhe = (e)=>{
    const {name,value}= e.target;
    setFormValues({...formValues,[name]:value})
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();
    let result = setFormErrors(validate(formValues));
    setSubmit(true)
  
  };
  useEffect(()=>{
    if (Object.keys(formErrors).length === 0 && isSubmit){
      try{
        axios.post('http://localhost:3000/api/v1/CreateContact',formValues).then(res=>console.log(res)).catch(err=>console.log(err))
        alert('Your Message Submitted')

      }catch(e){

      }
       
     }

  },[formErrors])

  const validate = (values)=>{
    const errors={};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if(!values.fullname){
      errors.fullname = "Name is required";
    }
    if(!values.emailaddress){
      errors.emailaddress="Email is required";
    }else if(!regex.test(values.emailaddress)){
      errors.emailaddress="This is not a valid email format";
    }
    if(!values.messagetext){
      errors.messagetext="Message is required";
    }
    
    return errors;
  }

  return (
    <div className="max-w-[1400px] mx-auto bg-secondery rounded-3xl shadow-inner shadow-[#18181c] mt-10 ">
      <p className="text-neutral-400 text-lg text-center py-8">contact</p>
      <p className="text-neutral-200 text-5xl font-semibold text-center pb-10 ">Get in Touch with Me!</p>
      <div className="flex flex-col items-center lg:flex-row gap-8  p-10 justify-center">
       
        <div className=" max-w-[450px]  border border-neutral-800 rounded-3xl p-10 flex flex-col gap-8">
       
        <div>
          <i className='bx bx-location-plus text-primary' ></i>
          <p className="text-neutral-200  text-lg font-semibold ">Our office:</p>
          <p className="text-neutral-400 text-base font-medium">Dhanmondi, Dhaka,Bangladesh.</p>
        </div>

        <div>
          <i className='bx bx-location-plus text-primary' ></i>
          <p className="text-neutral-200  text-lg font-semibold ">Our office:</p>
          <p className="text-neutral-400 text-base font-medium">Dhanmondi, Dhaka,Bangladesh.</p>
        </div>

        <div>
          <i className='bx bx-location-plus text-primary' ></i>
          <p className="text-neutral-200  text-lg font-semibold ">Our office:</p>
          <p className="text-neutral-400 text-base font-medium">Dhanmondi, Dhaka,Bangladesh.</p>
        </div>

       
        </div>

        <div className="max-w-[890px] border border-neutral-800 rounded-3xl p-10">
          <form onSubmit={handleSubmit} className="flex flex-col items-center gap-10" >
            
            <div className="flex flex-col lg:flex-row gap-10">
              <label htmlFor="fullname" className="text-neutral-400 text-base font-semibold" >Full Name <br/><br/>
                <input className="w-56 sm:w-96 lg:w-60 xl:w-96 h-16 rounded-xl text-black text-lg p-2 border border-black outline-none focus:border-green-500" type="text" id="fullname" name="fullname" value={formValues.fullname} onChange={handleChanhe} />
                <p className="text-primary font-semibold ">{formErrors.fullname}</p>
              </label>
              
              <label htmlFor="emailaddress" className="text-neutral-400 text-base font-semibold">Email Address <br/><br/>
                <input className="w-56 sm:w-96 lg:w-60 xl:w-96 h-16 rounded-xl text-black text-lg p-2 border border-black outline-none focus:border-green-500" type="text" id="emailaddress" name="emailaddress" value={formValues.emailaddress} onChange={handleChanhe} />
                <p className="text-primary font-semibold ">{formErrors.emailaddress}</p>
              </label>
              
            </div>

            <label htmlFor="messagetext" className="text-neutral-400 text-base font-semibold" >Your Message<br/><br/>
             <textarea className="w-56 sm:w-96 lg:w-[520px] xl:w-[800px]  h-32 rounded-xl text-black text-lg p-2 border border-black outline-none focus:border-green-500" type="text" id="messagetext" name="messagetext" value={formValues.messagetext} onChange={handleChanhe}/>
             <p className="text-primary font-semibold ">{formErrors.messagetext}</p>
            </label>
            

            <button className=" w-48 h-14 bg-primary text-black text-base font-semibold text-center rounded-2xl hover:text-primary hover:border hover:border-primary hover:bg-secondery" type="submit"> Send me Message <i className='bx bxs-message-square-detail'></i> </button>
             
          </form>
        </div>

      </div>
      
    </div>
  );
};

export default Contact;

