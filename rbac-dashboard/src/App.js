import React from 'react';
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import UserManagement from "./pages/UserManagement";
import RoleManagement from "./pages/RoleManagement";
import './App.css';

function App() {
  return (
    <div className="w-screen min-h-screen bg-[#f1f2ff] flex flex-col font-inter">
      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <div className="w-full flex flex-1 bg-gray-100 text-gray-800">
        <Sidebar />
        <div className="ml-52 p-4 my-14 flex-1 bg-gray-100 text-gray-800">
          <h1 className="font-sans text-zinc-950 text-4xl font-bold mb-4 text-center">
            RBAC Dashboard
          </h1>
          <Routes>
            <Route path="/" element={<UserManagement />} />
            <Route path="/roles" element={<RoleManagement />} />
          </Routes>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
