import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { getToken } from '../../../SessionHelper/SessionHelper';

const AdminTestimonial = () => {
  const AxiosHeader = {headers: {token: getToken()}}
  const [mdata,setMdata]=useState(null)

  const deleteItem = async(id)=>{
    const itemId = id
    await axios.get(`http://localhost:3000/api/v1/DeleteTestimonial/${itemId}`,AxiosHeader).then(res=>console.log(res)).catch(err=>console.log(err))
  }

  useEffect(()=>{
    const fetchContactData = async ()=>{
      const res= axios.get('http://localhost:3000/api/v1/ListTestimonial').then(res=> setMdata(res.data.data)).catch(err => console.log(err));
    }
    fetchContactData()
  },[])

  return (
    <div className="  h-screen bg-slate-200" >
      <h1 className="text-center text-black text-5xl font-bold p-10">Welcome to the Testimonial Page</h1>
      <div className="m-20">
        <table className="table-fixed w-full   border-collapse border border-slate-400  ">
          <thead>
            <tr className="text-left text-black border-collapse border border-slate-400  ">
              <th className="border-collapse border border-slate-400 ">Image</th>
              <th className="border-collapse border border-slate-400 ">Name</th>
              <th className="border-collapse border border-slate-400 ">Say</th>
              <th className="border-collapse border border-slate-400 ">Designation</th>
              <th className="border-collapse border border-slate-400 ">Company</th>
              <th className="border-collapse border border-slate-400 ">Delete</th>
              <th className="border-collapse border border-slate-400 ">Update</th>
            </tr>
          </thead>
          <tbody>
            
            {mdata && mdata.map((item)=>(
              <tr key={item._id}>
              <td className="border-collapse border border-slate-400 overflow-hidden ">{item.clientimage}</td>
              <td className="border-collapse border border-slate-400 overflow-hidden">{item.clientname}</td>
              <td className="border-collapse border border-slate-400 overflow-hidden">{item.clientsay}</td>
              <td className="border-collapse border border-slate-400 overflow-hidden">{item.clienddeg}</td>
              <td className="border-collapse border border-slate-400 overflow-hidden">{item.clientcompanyname}</td>
              <td className="border-collapse border border-slate-400 overflow-hidden">
                <button onClick={()=>{deleteItem(item._id)}} className="text-red-500">Delete</button>
              </td>
              <td className="border-collapse border border-slate-400 overflow-hidden">
                <button onClick={()=>{""}} className="text-red-500">Update</button>
              </td>
            </tr>

            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminTestimonial;