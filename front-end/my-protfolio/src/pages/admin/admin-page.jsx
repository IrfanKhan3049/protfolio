import React from 'react';
import { useState } from 'react';
import FormData from "form-data";
import axios from "axios"
import AdminLayout from '../../components/admincomponents/adminlayout/admin-layout';
import { setToken } from '../../SessionHelper/SessionHelper';



const AdminPage = () => {

  const [user,setUser] = useState("")
  const [password,setPassword] = useState("")

  const handleSubmit = async(event) => {
    
    event.preventDefault();
    const formData= new FormData()
    formData.append('email',user)
    formData.append('password',password)
    const data = Object.fromEntries(formData)
    
    const result =await axios.get('http://localhost:3000/api/v1/Login',data).then(res=>{
      if(res.data.status === 'success'){
        setToken(res.data.token)
        window.location.href = "/"
      }
    }).catch(err=>console.log(err))

 }

  return (

    <AdminLayout>
      <div className="max-w-[890px] mx-auto  p-10">
        <h1 className="text-center text-4xl font-bold mb-10">Login</h1>
          <form onSubmit={handleSubmit} className="flex items-center flex-col gap-10 border border-neutral-800 rounded-3xl py-10" encType="multipart/form-data" >
            
            <div className="flex flex-col gap-10">
              <label htmlFor="file" className="text-neutral-400 text-base font-semibold" >User Name <br/><br/>
                <input className="w-96 h-16 rounded-xl text-black text-lg" type="text" id="username" name="username" onChange={ e=> setUser(e.target.value)}  />
              </label>
              
              <label htmlFor="title" className="text-neutral-400 text-base font-semibold">Password <br/><br/>
                <input className="w-96 h-16 rounded-xl text-black text-lg" type="password" id="password" name="password" onChange={ e=> setPassword(e.target.value)} />
              </label>

            </div>
            <button className=" w-48 h-14 bg-primary text-black text-base font-semibold text-center rounded-2xl hover:text-primary hover:border hover:border-primary hover:bg-secondery" type="submit"> Submit <i className='bx bxs-message-square-detail'></i> </button>     
          </form>
        </div>
    </AdminLayout>
  );
};

export default AdminPage;