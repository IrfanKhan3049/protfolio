import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { getToken } from '../../../SessionHelper/SessionHelper';

const AdminContactTable = () => {
  
  const AxiosHeader = {headers: {token: getToken()}}
  const [mdata,setMdata]=useState(null)

  const deleteMessage = async(id)=>{
    const itemId = id
    await axios.get(`http://localhost:3000/api/v1/DeleteContact/${itemId}`,AxiosHeader).then(res=>console.log(res)).catch(err=>console.log(err))
  }

  useEffect(()=>{
    const fetchContactData = async ()=>{
      const res= axios.get('http://localhost:3000/api/v1/ListContact').then(res=> setMdata(res.data.data)).catch(err => console.log(err));
    }
    fetchContactData()
  },[])
 
  return (
    <div className="  h-screen bg-slate-200" >
      <h1 className="text-center text-black text-5xl font-bold p-10">Welcome to the Contact Page</h1>
      <div className="m-20">
        <table className="table-fixed w-full   border-collapse border border-slate-400  ">
          <thead>
            <tr className="text-left text-black border-collapse border border-slate-400  ">
              <th className="border-collapse border border-slate-400 ">Name</th>
              <th className="border-collapse border border-slate-400 ">Email</th>
              <th className="border-collapse border border-slate-400 ">Message</th>
              <th className="border-collapse border border-slate-400 ">delete</th>
            </tr>
          </thead>
          <tbody>
            
            {mdata && mdata.map((item)=>(
              <tr key={item._id}>
              <td className="border-collapse border border-slate-400 ">{item.fullname}</td>
              <td className="border-collapse border border-slate-400 ">{item.emailaddress}</td>
              <td className="border-collapse border border-slate-400 ">{item.messagetext}</td>
              <td className="border-collapse border border-slate-400 ">
                <button onClick={()=>{deleteMessage(item._id)}} className="text-red-500">Delete</button>
              </td>
            </tr>

            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminContactTable;