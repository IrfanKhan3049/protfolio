const mongoose=require('mongoose');
const DataSchema=mongoose.Schema({
  projectimage:{type:String},
  projecttitle:{type:String,unique:true},
  projectshortdes:{type:String,unique:true},
  projectlivelink:{type:String,unique:true},
  projectgitlink:{type:String,unique:true},
  CreatedDate:{type:Date,default:Date.now()}
},{versionKey:false});
const ContactsModel=mongoose.model('projects',DataSchema);
module.exports=ContactsModel
