const DataModel = require("../models/UsersModel");
const CreateService = require("../services/CreateService");
const AdminLoginService = require("../services/AdminLoginService");


exports.CreateAdmin = async(req,res)=>{
  let Result = await CreateService(req,DataModel)
  res.status(200).json(Result)
}

exports.Login=async(req,res)=>{
  let result=await AdminLoginService(req,DataModel)
  if(result['status']=="success"){
    
    //Cookies with Response
    let cookieOption={expires:new Date(Date.now()+24*6060*1000),httpOnly:false}
    
    //set Cookies With Response 
    res.cookie('token',result['token'], cookieOption)
    return res.status(200).json(result)

  }else{
   return res.status(200).json(result)
  }
  
}