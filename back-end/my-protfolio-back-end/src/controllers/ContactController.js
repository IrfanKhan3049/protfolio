const DataModel = require('../models/ContactsModel');
const CreateService =require('../services/CreateService');
const UpdateService = require('../services/UpdateService');
const DeleteService = require('../services/DeleteService');
const { default: mongoose } = require('mongoose');
const ListService = require('../services/ListService');

exports.CreateContact = async(req,res)=>{
  
  let Result = await CreateService(req,DataModel)
  res.status(200).json(Result)
}
exports.UpdateContact = async(req,res)=>{
  let Result = await UpdateService(req,DataModel)
  res.status(200).json(Result)
}
exports.DeleteContact = async(req,res)=>{
 
  let Result = await DeleteService(req,DataModel)
  res.status(200).json(Result)
}
exports.ListContact = async(req,res)=>{
  
  let Result = await ListService(req,DataModel)
  res.status(200).json(Result)
}