const mongoose=require('mongoose');

const DataSchema=mongoose.Schema({
  fullname:{type:String},
  emailaddress:{type:String},
  messagetext:{type:String},
  CreatedDate:{type:Date,default:Date.now()}
},{versionKey:false});

const ContactsModel=mongoose.model('contacts',DataSchema);
module.exports=ContactsModel
