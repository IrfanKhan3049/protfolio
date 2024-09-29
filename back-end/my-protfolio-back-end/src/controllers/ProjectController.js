const DataModel = require('../models/ProjectsModel');
const CreateService =require('../services/CreateService');
const UpdateService = require('../services/UpdateService');
const DeleteService = require('../services/DeleteService');
const { default: mongoose } = require('mongoose');
const ListService = require('../services/ListService');

exports.CreateProject = async(req,res)=>{
 
  let Result = await CreateService(req,DataModel)
  res.status(200).json(Result)
}
exports.UpdateProject = async(req,res)=>{
  let Result = await UpdateService(req,DataModel)
  res.status(200).json(Result)
}
exports.DeleteProject = async(req,res)=>{
 
  let Result = await DeleteService(req,DataModel)
  res.status(200).json(Result)
}
exports.ListProject = async(req,res)=>{
 
  let Result = await ListService(req,DataModel)
  res.status(200).json(Result)
}