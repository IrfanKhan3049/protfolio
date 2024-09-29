import React from 'react';
import { useState } from 'react';
// let FormData = require("form-data");
import axios from "axios"
import AdminLayout from '../adminlayout/admin-layout';
import { getToken } from '../../../SessionHelper/SessionHelper';

const AddProject = () => {

  const AxiosHeader = {headers: {token: getToken()}}

  const [img,setImg] = useState(null)
  const [title,setTitle] = useState("")
  const [des,setDes] = useState("")
  const [livelink,setLivelink] = useState("")
  const [gitlink,setGitlink] = useState("")

  const handleSubmit = async(event) => {
     event.preventDefault();
    //  const formData= new FormData()
    //  let data ={
      // formData.append('projectimage',img),
      // formData.append('projecttitle',title),
      // formData.append('projectshortdes',des),
      // formData.append('projectlivelink',livelink),
      // formData.append('projectgitlink',gitlink)
    //  }
    
     const data = {
      'projectimage':img,
      'projecttitle':title,
      'projectshortdes':des,
      'projectlivelink':livelink,
      'projectgitlink':gitlink
     }
     console.log(data)
     await axios.post('http://localhost:3000/api/v1/CreateProject',data, AxiosHeader).then(res=>console.log(res)).catch(err=>console.log(err))

  }



  return (
    <AdminLayout>
       <div className="max-w-[890px] mx-auto  p-10">
        <h1 className="text-center text-4xl font-bold mb-10">Add New Project</h1>
          <form onSubmit={handleSubmit} className="flex items-center flex-col gap-10 border border-neutral-800 rounded-3xl py-10" >
            
            <div className="flex flex-col gap-10">
              <label htmlFor="fullName" className="text-neutral-400 text-base font-semibold" >Image <br/><br/>
                <input className="w-96 h-16 rounded-xl text-black text-lg" type="text" id="file" name="file" onChange={ e=> setImg(e.target.value)} />
              </label>
              
              <label htmlFor="fullEmail" className="text-neutral-400 text-base font-semibold">Title <br/><br/>
                <input className="w-96 h-16 rounded-xl text-black text-lg" type="text" id="title" name="title" onChange={ e=>setTitle(e.target.value)}  />
              </label>

              <label htmlFor="fullEmail" className="text-neutral-400 text-base font-semibold">Description <br/><br/>
                <input className="w-96 h-16 rounded-xl text-black text-lg" type="text" id="des" name="des" onChange={ e=> setDes(e.target.value)} />
              </label>

              <label htmlFor="fullEmail" className="text-neutral-400 text-base font-semibold">Liv Link <br/><br/>
                <input className="w-96 h-16 rounded-xl text-black text-lg" type="text" id="livelink" name="livelink"  onChange={ e=> setLivelink(e.target.value)} />
              </label>

              <label htmlFor="fullEmail" className="text-neutral-400 text-base font-semibold">Git Link <br/><br/>
                <input className="w-96 h-16 rounded-xl text-black text-lg" type="text" id="gitlink" name="gitlink" onChange={ e=> setGitlink(e.target.value)} />
              </label>

            </div>

            <button className=" w-48 h-14 bg-primary text-black text-base font-semibold text-center rounded-2xl hover:text-primary hover:border hover:border-primary hover:bg-secondery" type="submit"> Submitt <i className='bx bxs-message-square-detail'></i> </button>
             
          </form>
        </div>
      
    </AdminLayout>
  );
};

export default AddProject;