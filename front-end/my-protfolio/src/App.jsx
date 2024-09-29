import HomePage from "./pages/home-page"
import AboutPage from "./pages/about-page"
import BlogPage from "./pages/blog-page"
import ContactPage from "./pages/contact-page"
import ProjectsWorkPage from "./pages/projectswork-page"
import ServicePage from "./pages/servic-page"
import NotFoundPage from "./pages/notfound-page"
import AdminPage from "./pages/admin/admin-page"
import AdminProjectPage from "./pages/admin/admin-project-page"
import AdminBlogPage from "./pages/admin/admin-blog-page"
import AdminTestimonialPage from "./pages/admin/admin-testimonial-page"
import AdminContactPage from "./pages/admin/admin-contact-page"
import AddProject from "./components/admincomponents/admin-project-components/addproject"
import AddBlog from "./components/admincomponents/admin-blog-components/addblog"
import BlogDetailsPage from "./pages/blogdetails-page"
import AddTestimonial from "./components/admincomponents/admin-testimonial-components/addtestimonial"
import { BrowserRouter,Routes,Route } from "react-router-dom"

function App() {
  
  return (
    <div className="bg-black">
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/services" element={<ServicePage/>}/>
        <Route path="/projectswork" element={<ProjectsWorkPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/blog" element={<BlogPage/>}/>
        <Route path="/blog/details/:id" element={<BlogDetailsPage/>}/>

        {/*Admin Routes Start */}

        <Route path="/admin" element={<AdminPage/>}/>
        

        {/*Admin Routes End */}

        {/*Private Routes Start */}
        
          <Route path="/adminproject" element={<AdminProjectPage/>}/>
          <Route path="/adminproject/add" element={<AddProject/>}/>
          <Route path="/adminblog" element={<AdminBlogPage/>}/>
          <Route path="/adminblog/add" element={<AddBlog/>}/>
          <Route path="/admintestimonial" element={<AdminTestimonialPage/>}/>
          <Route path="/admintestimonial/add" element={<AddTestimonial/>}/>
          <Route path="/admincontact" element={<AdminContactPage/>}/>
       

        {/*Private Routes End */}

        <Route path="*" element={<NotFoundPage/>}/>
       </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
