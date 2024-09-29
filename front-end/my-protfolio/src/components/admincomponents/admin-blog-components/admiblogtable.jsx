import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { getToken } from '../../../SessionHelper/SessionHelper';

const AdmiBlogTable = () => {
  const AxiosHeader = {headers: {token: getToken()}}

  const [mdata,setMdata]=useState(null)

  const deleteItem = async(id)=>{
    const itemId = id
    await axios.get(`http://localhost:3000/api/v1/DeleteBlog/${itemId}`, AxiosHeader).then(res=>console.log(res)).catch(err=>console.log(err))
  }

  useEffect(()=>{
    const fetchContactData = async ()=>{
      const res= axios.get('http://localhost:3000/api/v1/ListBlog').then(res=> setMdata(res.data.data)).catch(err => console.log(err));
    }
    fetchContactData()
  },[])

  return (
    <div className="  h-screen bg-slate-200" >
      <h1 className="text-center text-black text-5xl font-bold p-10">Welcome to the Blog Page</h1>
      <div className="m-20">
        <table className="table-fixed w-full   border-collapse border border-slate-400  ">
          <thead>
            <tr className="text-left text-black border-collapse border border-slate-400  ">
              <th className="border-collapse border border-slate-400 ">image</th>
              <th className="border-collapse border border-slate-400 ">Title</th>
              <th className="border-collapse border border-slate-400 ">Description</th>
              <th className="border-collapse border border-slate-400 ">delete</th>
              <th className="border-collapse border border-slate-400 ">Update</th>
            </tr>
          </thead>
          <tbody>
            
            {mdata && mdata.map((item)=>(
              <tr key={item._id}>
              <td className="border-collapse border border-slate-400 overflow-hidden ">{item.blogimage}</td>
              <td className="border-collapse border border-slate-400 overflow-hidden">{item.title}</td>
              <td className="border-collapse border border-slate-400 overflow-hidden">{item.shortdes}</td>
              
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

export default AdmiBlogTable;