import React from 'react';
import { useState } from 'react';
import FormData from "form-data";
import axios from "axios"
import AdminLayout from '../adminlayout/admin-layout';
import { getToken } from '../../../SessionHelper/SessionHelper';

const AddBlog = () => {

  const AxiosHeader = {headers: {token: getToken()}}

  const [img,setImg] = useState(null)
  const [title,setTitle] = useState("")
  const [des,setDes] = useState("")

  const handleSubmit = async(event) => {
     event.preventDefault();
     const formData= new FormData()
     formData.append('blogimage',img)
     formData.append('title',title)
     formData.append('shortdes',des)
     const data = Object.fromEntries(formData)
     
     await axios.post('http://localhost:3000/api/v1/CreateBlog',data,AxiosHeader).then(res=>console.log(res)).catch(err=>console.log(err))

  }


  return (
    <AdminLayout>
       <div className="max-w-[890px] mx-auto  p-10">
        <h1 className="text-center text-4xl font-bold mb-10">Add New Blog</h1>
          <form onSubmit={handleSubmit} className="flex items-center flex-col gap-10 border border-neutral-800 rounded-3xl py-10" encType="multipart/form-data" >
            
            <div className="flex flex-col gap-10">
              <label htmlFor="file" className="text-neutral-400 text-base font-semibold" >Image <br/><br/>
                <input className="w-96 h-16 rounded-xl text-black text-lg" type="text" id="file" name="file" onChange={ e=> setImg(e.target.value)}  />
              </label>
              
              <label htmlFor="title" className="text-neutral-400 text-base font-semibold">Title <br/><br/>
                <input className="w-96 h-16 rounded-xl text-black text-lg" type="text" id="title" name="title" onChange={ e=> setTitle(e.target.value)} />
              </label>

              <label htmlFor="des" className="text-neutral-400 text-base font-semibold">Description <br/><br/>
                <input className="w-96 h-16 rounded-xl text-black text-lg" type="text" id="des" name="des" onChange={ e=> setDes(e.target.value)} />
              </label>

            </div>
            <button className=" w-48 h-14 bg-primary text-black text-base font-semibold text-center rounded-2xl hover:text-primary hover:border hover:border-primary hover:bg-secondery" type="submit"> Submit <i className='bx bxs-message-square-detail'></i> </button>     
          </form>
        </div>
      
    </AdminLayout>
  );
};

export default AddBlog;