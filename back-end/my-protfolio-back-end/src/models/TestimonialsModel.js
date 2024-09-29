const mongoose=require('mongoose');
const DataSchema=mongoose.Schema({
  clientimage:{type:String},
  clientname:{type:String},
  clientsay:{type:String},
  clienddeg:{type:String},
  clientcompanyname:{type:String},
  CreatedDate:{type:Date,default:Date.now()}
},{versionKey:false});
const ContactsModel=mongoose.model('testimonials',DataSchema);
module.exports=ContactsModel
