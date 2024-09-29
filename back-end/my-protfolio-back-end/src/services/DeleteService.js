var mongoose = require("mongoose");

const DeleteService= async (Request,Model)=>{
  try{
  
    let DeleteID=new mongoose.Types.ObjectId(Request.params.id);
    
    let QueryObject={};
    QueryObject['_id']=DeleteID;
    
    let Delete=await Model.deleteMany(QueryObject)
    return {status:"success",Delete:Delete}
  }
  catch(error){
    return {status:"fail",data:error.toString()}
  }
}
module.exports=DeleteService;