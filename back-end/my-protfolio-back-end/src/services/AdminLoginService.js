const {EncodeToken} = require("../utility/TokenHelper");

const AdminLoginService=async (Request,DataModel)=>{
  try{
    let data = await DataModel.aggregate([{$match:Request.body},{$project:{_id:0,email:1}}])
    if(data.length>0){
      let token = await EncodeToken(data[0]['email'])
      //req.headers.token=token;
      return {status:"success",token:token,data:data[0]}
      
      
    }else{
      return {status:"unauthorized"}
    }
  }
  catch(error){
    return{status:"fail",data:error.toString()}
  }
}
module.exports=AdminLoginService