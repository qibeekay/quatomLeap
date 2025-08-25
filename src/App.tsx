import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Suspense, lazy } from "react";
import Loader from "./utils/Loader";

// Lazy-loaded pages
const Home = lazy(() => import("./pages/home"));
const Aboutus = lazy(() => import("./pages/about"));
const Talents = lazy(() => import("./pages/talents"));
const TalentsCategory = lazy(
  () => import("./pages/talents-category/TalentsCategory")
);
const CreateProfile = lazy(() => import("./pages/create-profile"));
const ScoutView = lazy(() => import("./pages/scout-view"));
const Login = lazy(() => import("./pages/auth/login"));
const Register = lazy(() => import("./pages/auth/register"));
const Reset = lazy(() => import("./pages/auth/reset-password"));
const Profile = lazy(() => import("./pages/profile"));
const CreateBlogs = lazy(() => import("./pages/admin/create-blog"));
const Dashboard = lazy(() => import("./pages/admin/dashboard"));
const Blogs = lazy(() => import("./pages/admin/blogs"));
const UsersBlog = lazy(() => import("./pages/blogs"));
const SingleBlog = lazy(() => import("./pages/blogs/single-blog"));
const ContactUs = lazy(() => import("./pages/contact"));

function App() {
  return (
    <main className="font-poppins">
      <Suspense
        fallback={
          <div className="flex justify-center items-center min-h-screen">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-primary border-solid"></div>
          </div>
        }
      >
        <Routes>
          {/* Home page */}
          <Route path="/" element={<Home />} />

          {/* About page */}
          <Route path="/about" element={<Aboutus />} />

          {/* Talents page */}
          <Route path="/talents/:cat" element={<Talents />} />

          {/* Talents category */}
          <Route path="/talents-category" element={<TalentsCategory />} />

          {/* Create profile page */}
          <Route path="/create-profile/:cat" element={<CreateProfile />} />

          {/* Scout view user profile */}
          <Route path="/player-profile/:uuid" element={<ScoutView />} />

          {/* Auth pages */}
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="/auth/forgot-password" element={<Reset />} />
          <Route path="/profile" element={<Profile />} />

          {/* Admin pages */}
          <Route path="/admin/blogs/create" element={<CreateBlogs />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/blogs" element={<Blogs />} />

          {/* Blog pages */}
          <Route path="/blogs" element={<UsersBlog />} />
          <Route path="/blogs/:excerpts" element={<SingleBlog />} />

          {/* Contact page */}
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </Suspense>
      <ToastContainer />
    </main>
  );
}

export default App;
