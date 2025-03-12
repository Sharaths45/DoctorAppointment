import React, { useContext } from "react";
import Login from "./Pages/Login";
import { ToastContainer } from "react-toastify";
import { AdminContext } from "./Context/AdminContext";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Admin/Dashboard";
import AllAppointment from "./Pages/Admin/AllAppointment";
import AddDoctor from "./Pages/Admin/AddDoctor";
import DoctorList from "./Pages/Admin/DoctorList";
import { DoctorContext } from "./Context/DoctorContext";
import DoctorDashboard from "./Pages/Doctor/DoctorDashboard";
import DoctorAppointment from "./Pages/Doctor/DoctorAppointment";
import DoctorProfile from "./Pages/Doctor/DoctorProfile";
const App = () => {
  const { aToken } = useContext(AdminContext);
  const { dToken } = useContext(DoctorContext);

  return aToken || dToken ? (
    <div className="bg-[#f8f9fd]">
      <ToastContainer />
      <Navbar />
      <div className="flex items-start">
        <Sidebar />
        <Routes>
          {/* Admin Route */}
          <Route path="/" element={<></>} />
          <Route path="/admin-dashboard" element={<Dashboard />} />
          <Route path="/all-appointment" element={<AllAppointment />} />
          <Route path="/add-doctor" element={<AddDoctor />} />
          <Route path="/doctor-list" element={<DoctorList />} />

          {/* Doctor Route */}
          <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
          <Route path="/doctor-appointment" element={<DoctorAppointment />} />
          <Route path="/doctor-profile" element={<DoctorProfile />} />
        </Routes>
      </div>
    </div>
  ) : (
    <>
      <Login />
      <ToastContainer />
    </>
  );
};

export default App;
