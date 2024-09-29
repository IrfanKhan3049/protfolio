const express = require('express');
const ProjectController = require("../controllers/ProjectController");
const BlogController = require("../controllers/BlogController");
const ContactController = require("../controllers/ContactController");
const TestimonialController = require("../controllers/TestimonialController");
const AdminController = require("../controllers/AdminController")
const AuthVerifyMiddleware = require("../middlewares/AuthVerifyMiddleware")
const multer = require('multer');
const path = require('path');

const router = express.Router();

/*
//Multer start 
const storage = multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null,'../../public/images')
  },
  filename:(req,file,cb)=>{
    cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname))
  }

})

const upload=multer({
  storage:storage
})
//Multer end

*/

router.get('/', (req,res) => {
  res.send('Hello World!')
})


//Admin
router.post("/CreateAdmin",AdminController.CreateAdmin);
router.get("/Login",AdminController.Login);

//project
router.post("/CreateProject",AuthVerifyMiddleware,ProjectController.CreateProject);
router.post("/UpdateProject/:id",AuthVerifyMiddleware,ProjectController.UpdateProject);
router.get("/DeleteProject/:id",AuthVerifyMiddleware,ProjectController.DeleteProject);
router.get("/ListProject",ProjectController.ListProject);

//blog
router.post("/CreateBlog",AuthVerifyMiddleware,BlogController.CreateBlog);
router.post("/UpdateBlog/:id",AuthVerifyMiddleware,BlogController.UpdateBlog);
router.get("/DeleteBlog/:id",AuthVerifyMiddleware,BlogController.DeleteBlog);
router.get("/ListBlog",BlogController.ListBlog);

//contact
router.post("/CreateContact",ContactController.CreateContact);
router.post("/UpdateContact/:id",AuthVerifyMiddleware,ContactController.UpdateContact);
router.get("/DeleteContact/:id",AuthVerifyMiddleware,ContactController.DeleteContact);
router.get("/ListContact",ContactController.ListContact);

//testimonial
router.post("/CreateTestimonial",AuthVerifyMiddleware,TestimonialController.CreateTestimonial);
router.post("/UpdateTestimonial/:id",AuthVerifyMiddleware,TestimonialController.UpdateTestimonial);
router.get("/DeleteTestimonial/:id",AuthVerifyMiddleware,TestimonialController.DeleteTestimonial);
router.get("/ListTestimonial",TestimonialController.ListTestimonial);

module.exports=router;