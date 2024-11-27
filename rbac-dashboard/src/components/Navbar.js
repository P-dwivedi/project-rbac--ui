import React, { useState } from "react";
import {  FaTimes, FaBars, FaRegUserCircle } from "react-icons/fa";
import logo from "../assets/pass-key.png";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  
    // To toggle the menu visibility for mobile
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
    // To toggle profile menu visibility for desktop
    const toggleProfileMenu = () => setIsProfileMenuOpen(!isProfileMenuOpen);


    return (
        <nav className="bg-gradient-to-r from-[#2b2d42] to-[#8d99ae] text-white fixed w-full top-0 l-0 h-14 z-10">
          <div className="max-w-6xl mx-auto px-6 py-2 flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-x-2 rounded-md bg-transparent justify-start text-2xl font-bold">
              <img src={logo} alt="Logo"  className="h-10 w-10" />
              <span className="cursor-pointer">RBAC</span>
            </div>
    
            
            <div className="flex items-center space-x-6">
              {/* To profile icon with dropdown menu */}
              <div className="relative hidden lg:block" title="This is for decoration only.">
                <button
                  onClick={toggleProfileMenu}
                  className="p-2 rounded-full hover:bg-gray-700 transition duration-300"
                >
                  <FaRegUserCircle size={24} />
                </button>
                {isProfileMenuOpen && (
                  <div
                    onMouseLeave={() => setIsProfileMenuOpen(false)} // To close on mouse leave
                    className="absolute right-0 mt-2 w-40 bg-gray-800 text-white rounded shadow-lg py-2 z-20"
                  >
                    <span className="block px-4 py-2 hover:bg-gray-700 cursor-pointer">
                      Profile
                    </span>
                    <span className="block px-4 py-2 hover:bg-gray-700 cursor-pointer">
                      Dashboard
                    </span>
                    <span className="block px-4 py-2 hover:bg-gray-700 cursor-pointer">
                      Contact
                    </span>
                  </div>
                )}
              </div>
    
              
              <button
                className="lg:hidden p-2 rounded-md hover:bg-gray-700 transition duration-300"
                onClick={toggleMenu}
              >
                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
    
          
          {isMenuOpen && (
            <div className="lg:hidden bg-gray-800 bg-opacity-95 absolute top-0 left-0 w-full h-screen flex items-center justify-center z-40">
              <div className="text-white text-lg space-y-4 text-center" >
                <span className="block py-2 px-4 hover:bg-gray-700 rounded cursor-pointer">
                  Profile
                </span>
                <span className="block py-2 px-4 hover:bg-gray-700 rounded cursor-pointer">
                  Dashboard
                </span>
                <span className="block py-2 px-4 hover:bg-gray-700 rounded cursor-pointer">
                  Contact
                </span>
                <button
                  onClick={toggleMenu}
                  className="absolute top-4 right-4 p-2 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600 transition"
                >
                  <FaTimes size={20} />
                </button>
              </div>
            </div>
          )}
        </nav>
      );
    };
    
    export default Navbar;

