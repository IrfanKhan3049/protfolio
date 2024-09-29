const mongoose=require('mongoose');

const ListService=async(Request,DataModel)=>{
  try{
   
    let data;
    data = await DataModel.aggregate([
     {$match:{}},
    ])
    
    return {status:"success",data:data}
  }catch(error){
    return {status:"fail",data:error.toString()}
  }

}
module.exports=ListService