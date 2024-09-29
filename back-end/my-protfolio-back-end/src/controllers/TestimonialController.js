const DataModel = require('../models/TestimonialsModel');
const CreateService =require('../services/CreateService');
const UpdateService = require('../services/UpdateService');
const DeleteService = require('../services/DeleteService');
const { default: mongoose } = require('mongoose');
const ListService = require('../services/ListService');

exports.CreateTestimonial = async(req,res)=>{
  let Result = await CreateService(req,DataModel)
  res.status(200).json(Result)
}
exports.UpdateTestimonial = async(req,res)=>{
  let Result = await UpdateService(req,DataModel)
  res.status(200).json(Result)
}
exports.DeleteTestimonial = async(req,res)=>{
 
  let Result = await DeleteService(req,DataModel)
  res.status(200).json(Result)
}
exports.ListTestimonial = async(req,res)=>{
 
  let Result = await ListService(req,DataModel)
  res.status(200).json(Result)
}