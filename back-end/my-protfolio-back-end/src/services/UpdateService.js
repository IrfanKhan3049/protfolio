var mongoose = require("mongoose");

const UpdateService=async(Request,DataModel)=>{
  try{
    let id = new mongoose.Types.ObjectId(Request.params.id);
    let PostBody=Request.body;
    let data = await DataModel.updateMany({_id:id},PostBody);
    return {status:"success",data:data};
  }
  catch(error){
    return{status:"fail",data:error.toString()}
  }

}
module.exports=UpdateService