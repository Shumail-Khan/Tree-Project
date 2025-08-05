import Blogs from "./components/Blogs.jsx"
import { Route, Routes } from "react-router-dom"
import ProtectedRoutes from "./utils/ProtectedRoutes.jsx"

import Home from "./Pages/Home.jsx"
import ContactUS from "./Pages/ContactUs.jsx"
import AboutUs from "./Pages/AboutUs.jsx"
import PrivacyPolicies from "./Pages/PrivacyPolicies.jsx"
import TreeRemoval from "./Pages/TreeRemoval.jsx"
import TreeTrimming from "./Pages/TreeTrimming.jsx"
import StructuralPruning from "./Pages/StructuralPruning.jsx"
import LandClearing from "./Pages/LandClearing.jsx"
import StormCleanUp from "./Pages/StormCleanUp.jsx"
import CommercialTreeServices from "./Pages/CommercialTreeServices.jsx"
import ScrolltoTop from "./components/ScrolltoTop.jsx"
import Services from "./Pages/Services.jsx"
import ServiceArea from "./Pages/ServiceArea.jsx"
import Evansville from "./Pages/Evansville.jsx"
import Newburgh from "./Pages/Newburgh.jsx"

import AdminLogin from "./Pages/AdminPanel/AdminLogin.jsx"
import MainLayout from "./layouts/MainLayout.jsx"
import AdminLayout from "./layouts/AdminLayouts.jsx"
import AdminDashboard from "./components/Admin/AdminDashboard.jsx"
import AddBlog from "./components/Admin/AddBlog.jsx"
import EditBlogs from "./components/Admin/EditBlogs.jsx"
import UpdateBlog from "./components/Admin/UpdateBlog.jsx"
import DeleteCategory from "./components/Admin/DeleteCategory.jsx"
import AddCategory from "./components/Admin/AddCategory.jsx"
import PhotoGallery from "./Pages/PhotoGallery.jsx"
import Boonville from "./Pages/Boonville.jsx"
import Henderson from "./Pages/Henderson.jsx"
import WarrickCounty from "./Pages/WarrickCounty.jsx"
import JobRequests from "./components/Admin/JobRequests.jsx"
import BlogDescription from "./Pages/BlogDescription.jsx"
import CategoryBlogs from "./Pages/CategoryBlogs.jsx"
import SiteMap from "./Pages/SiteMap.jsx"
import Testimonial from "./Pages/Testimonial.jsx"
import AdminProfile from "./Pages/AdminPanel/AdminProfile.jsx"
import UpdateProfile from "./components/Admin/UpdateProfile.jsx"
import ProfileLayout from "./layouts/ProfileLayout.jsx"
import ChangePassword from "./components/Admin/ChangePassword.jsx"
function App() {
  return (
    <div className="">

      <ScrolltoTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/testimonials" element={<Testimonial/>} />
          <Route path="/services" element={<Services />}>
            <Route index element={<TreeRemoval />} />
            <Route path="/services/tree-removal/" element={<TreeRemoval />} />
            <Route path="/services/tree-trimming-pruning/" element={<TreeTrimming />} />
            <Route path="/services/structural-pruning/" element={<StructuralPruning />} />
            <Route path="/services/land-clearing/" element={<LandClearing />} />
            <Route path="/services/storm-clean-up/" element={<StormCleanUp />} />
            <Route path="/services/commercial-tree-services/" element={<CommercialTreeServices />} />
          </Route>
          <Route path="/service-areas" element={<ServiceArea />}>
            <Route index element={<Evansville />} />
            <Route path="/service-areas/tree-service-evansville-in/" element={<Evansville />} />
            <Route path="/service-areas/tree-service-newburgh-in/" element={<Newburgh />} />
            <Route path="/service-areas/tree-service-boonville-in/" element={<Boonville />} />
            <Route path="/service-areas/tree-service-henderson-ky/" element={<Henderson />} />
            <Route path="/service-areas/tree-service-warrick-county/" element={<WarrickCounty />} />
          </Route>
          <Route path="/photo-gallery" element={<PhotoGallery />} />
          <Route path="/contact-us" element={<ContactUS />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/blog/:id" element={<BlogDescription />} />
          <Route path="/category/:id" element={<CategoryBlogs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicies />} />
          <Route path="/sitemap" element={<SiteMap   />} />
        </Route>


        <Route path="/admin-login" element={<AdminLogin />} />
        <Route element={
          <ProtectedRoutes>
            <AdminLayout />
          </ProtectedRoutes>
        }>
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/admin-dashboard/add-blog" element={<AddBlog />} />
          <Route path="/admin-dashboard/edit-blogs" element={<EditBlogs />} />
          <Route path="/admin-dashboard/update-blog/:id" element={<UpdateBlog />} />
          <Route path="/admin-dashboard/add-category" element={<AddCategory />} />
          <Route path="/admin-dashboard/delete-category" element={<DeleteCategory />} />
          <Route path="/admin-dashboard/job-requests" element={<JobRequests />} />
          <Route index element={<ProfileLayout />} />
            <Route path="/admin-dashboard/admin-profile" element={<AdminProfile />} />
            <Route path="/update-profile" element={<UpdateProfile />} />
            <Route path="/change-password" element={<ChangePassword />} />

          <Route/>

          
          <Route/>
          
          
        </Route>

      </Routes>

    </div>
  )
}

export default App
