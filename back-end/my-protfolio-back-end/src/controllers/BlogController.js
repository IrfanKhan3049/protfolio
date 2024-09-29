const DataModel = require('../models/BlogsModel');
const CreateService =require('../services/CreateService');
const UpdateService = require('../services/UpdateService');
const DeleteService = require('../services/DeleteService');
const { default: mongoose } = require('mongoose');
const ListService = require('../services/ListService');

exports.CreateBlog = async(req,res)=>{
 // let img="hello"//JSON.stringify(req.body.blogimage);
  //req.body.blogimage = img;
  
  let Result = await CreateService(req,DataModel)
  res.status(200).json(Result)
}
exports.UpdateBlog = async(req,res)=>{
  let Result = await UpdateService(req,DataModel)
  res.status(200).json(Result)
}
exports.DeleteBlog = async(req,res)=>{
 
  let Result = await DeleteService(req,DataModel)
  res.status(200).json(Result)
}
exports.ListBlog = async(req,res)=>{
 
  let Result = await ListService(req,DataModel)
  res.status(200).json(Result)
}