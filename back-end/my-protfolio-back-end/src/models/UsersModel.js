const mongoose=require('mongoose');
const DataSchema=mongoose.Schema({
  email:{type:String,unique:true},
  password:{type:String,unique:true},
  CreatedDate:{type:Date,default:Date.now()}
},{versionKey:false});
const ContactsModel=mongoose.model('users',DataSchema);
module.exports=ContactsModel
