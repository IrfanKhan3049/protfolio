const mongoose=require('mongoose');
const DataSchema=mongoose.Schema({
  blogimage:{type:String},
  title:{type:String},
  shortdes:{type:String},
  CreatedDate:{type:Date,default:Date.now()}
},{versionKey:false});
const BlogsModel=mongoose.model('blogs',DataSchema);
module.exports=BlogsModel
