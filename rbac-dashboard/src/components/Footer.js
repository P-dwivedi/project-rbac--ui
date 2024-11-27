import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";



const Footer = () => {
    return (
      <footer className="z-10 bg-gradient-to-r from-[#2b2d42] to-[#8d99ae] text-white">
        <div className="w-full px-6 py-8 flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0">
          {/* App Description */}
          <div className="text-center sm:text-left max-w-3xl">
            <h3 className="text-lg font-bold mb-2">About This App</h3>
            <p className="text-sm">
              This RBAC Dashboard helps manage users, roles, and permissions with ease. 
              <br/><br/>
              TechStack used: ReactJS, Tailwind CSS.
              <h6>Made by: Prakhar Dwivedi</h6>
            </p>
          </div>
  
          {/* Contact */}
          <div className="flex flex-col items-center sm:text-right">
            <h3 className="text-lg font-bold mb-2">Contact Me</h3>
            <div className="flex space-x-4">
              {/* Email */}
              <a
                href="mailto:prakhardwivedi31@gmail.com"
                className="text-white hover:text-yellow-300 transition duration-300"
                aria-label="Email"
              >
                <FaEnvelope size={24} />
              </a>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/dwivediprakhar/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
              {/* GitHub */}
              <a
                href="https://github.com/P-dwivedi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400 transition duration-300"
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </a>
            </div>
          </div>
        </div>
  
        {/* Bottom bar */}
        <div className="mt-6 border-t border-gray-400">
          <p className="text-center text-sm py-4 text-gray-200 font-bold">
            © 2024 RBAC Dashboard. All rights reserved.
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;