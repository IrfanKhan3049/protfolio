const { DecodeToken } = require("../utility/TokenHelper")

var jwt = require('jsonwebtoken');
module.exports = (req,res,next)=>{
  
  // Receive Token
  let token = req.headers['token']
 
   if(!token){
    token = req.cookies['token']
   }
  console.log(token)

  // Token Decode
  let decoded=DecodeToken(token)

  if(decoded===null){
    return res.status(401).json({status:"fail",message:"Unauthorized"})
  }
  else {
    let email = decoded['email'];
    req.headers.email = email;
    next();
  }
  
}