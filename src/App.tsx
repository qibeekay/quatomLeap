import { Route, Routes } from "react-router-dom";
import {
  Aboutus,
  CreateProfile,
  Footer,
  Home,
  Login,
  Profile,
  Register,
  ScoutView,
  Talents,
  TalentsCategory,
} from "./components";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <main className=" font-poppins">
      <Routes>
        {/* home page */}
        <Route path="/" element={<Home />} />

        {/* About page */}
        <Route path="/about" element={<Aboutus />} />

        {/* Talents page */}
        <Route path="/talents/:cat" element={<Talents />} />
        {/* talents category */}
        <Route path="/talents-category" element={<TalentsCategory />} />

        {/* Create profile page*/}
        <Route path="/create-profile/:cat" element={<CreateProfile />} />

        {/* scout view user profile */}
        <Route path="/player-profile/:uuid" element={<ScoutView />} />

        {/* register */}
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <ToastContainer />
    </main>
  );
}

export default App;
