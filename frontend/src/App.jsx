import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Doctor from "./Pages/Doctor";
import Login from "./Pages/Login";
import MyAppointments from "./Pages/MyAppointments";
import Profile from "./Pages/Profile";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Appointment from "./Pages/Appointment";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Doctor" element={<Doctor />} />
        <Route path="/Doctor/:speciality" element={<Doctor />} />
        <Route path="/MyAppointment" element={<MyAppointments />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Appointment/:docId" element={<Appointment />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
