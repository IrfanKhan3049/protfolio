import React from 'react';
import { useState } from 'react';
import FormData from "form-data";
import axios from "axios"
import AdminLayout from '../adminlayout/admin-layout';
import { getToken } from '../../../SessionHelper/SessionHelper';

const AddTestimonial = () => {

  const AxiosHeader = {headers: {token: getToken()}}

  const [img,setImg] = useState(null)
  const [name,setName] = useState("")
  const [whatsay,setWhatsay] = useState("")
  const [designation,setDesignation] = useState("")
  const [company,setCompany] = useState("")

  const handleSubmit = async(event) => {

     event.preventDefault();
     const formData= new FormData()
     formData.append('clientimage',img)
     formData.append('clientname',name)
     formData.append('clientsay',whatsay)
     formData.append('clienddeg',designation)
     formData.append('clientcompanyname',company)
     const data = Object.fromEntries(formData)
     await axios.post('http://localhost:3000/api/v1/CreateTestimonial',data,AxiosHeader).then(res=>console.log(res)).catch(err=>console.log(err))

  }


  return (

    <AdminLayout>
      <div className="max-w-[890px] mx-auto  p-10">
        <h1 className="text-center text-4xl font-bold mb-10">Add New Testimonial</h1>
          <form onSubmit={handleSubmit} className="flex items-center flex-col gap-10 border border-neutral-800 rounded-3xl py-10" >
            
            <div className="flex flex-col gap-10">
              <label htmlFor="fullName" className="text-neutral-400 text-base font-semibold" >Image <br/><br/>
                <input className="w-96 h-16 rounded-xl text-black text-lg" type="text" id="img" name="img" onChange={ e=> setImg(e.target.value)}  />
              </label>
              
              <label htmlFor="fullEmail" className="text-neutral-400 text-base font-semibold">Name <br/><br/>
                <input className="w-96 h-16 rounded-xl text-black text-lg" type="text" id="name" name="name" onChange={ e=> setName(e.target.value)} />
              </label>

              <label htmlFor="fullEmail" className="text-neutral-400 text-base font-semibold">What Say <br/><br/>
                <input className="w-96 h-16 rounded-xl text-black text-lg" type="text" id="whatsay" name="whatsay" onChange={ e=> setWhatsay(e.target.value)} />
              </label>

              <label htmlFor="fullEmail" className="text-neutral-400 text-base font-semibold">Designation <br/><br/>
                <input className="w-96 h-16 rounded-xl text-black text-lg" type="text" id="designation" name="designation" onChange={ e=> setDesignation(e.target.value)} />
              </label>

              <label htmlFor="fullEmail" className="text-neutral-400 text-base font-semibold">Company Name <br/><br/>
                <input className="w-96 h-16 rounded-xl text-black text-lg" type="text" id="company" name="company" onChange={ e=> setCompany(e.target.value)} />
              </label>

            </div>

            <button className=" w-48 h-14 bg-primary text-black text-base font-semibold text-center rounded-2xl hover:text-primary hover:border hover:border-primary hover:bg-secondery" type="submit"> Submitt <i className='bx bxs-message-square-detail'></i></button>

          </form>
        </div>
      
    </AdminLayout>
    
  );
};

export default AddTestimonial;