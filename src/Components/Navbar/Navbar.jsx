import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <nav className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border-b border-slate-700/50 backdrop-blur-xl fixed top-0 left-0 right-0 z-50">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* Logo/Brand */}
          <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse group">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
              <i className="fas fa-code text-white text-xl"></i>
            </div>
            <div>
              <span className="self-center text-2xl font-bold whitespace-nowrap bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Team DevNest
              </span>
              <p className="text-xs text-gray-400 -mt-1">MERN Stack & AWS Experts</p>
            </div>
          </NavLink>

          {/* Mobile Menu Button */}
          <button 
            type="button" 
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-controls="navbar-default" 
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>

          {/* Navigation Menu */}
          <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-slate-700 rounded-xl bg-slate-800/90 backdrop-blur-xl md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent">
              <li>
                <a 
                  href="#about" 
                  className="block py-2 px-3 text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg md:bg-transparent md:text-blue-400 md:p-0 hover:text-purple-400 transition-colors duration-300" 
                  aria-current="page"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <i className="fas fa-users mr-2"></i>About Team
                </a>
              </li>
              <li>
                <a 
                  href="#skills"  
                  className="block py-2 px-3 text-gray-300 rounded-lg hover:bg-slate-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <i className="fas fa-tools mr-2"></i>Technologies
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className="block py-2 px-3 text-gray-300 rounded-lg hover:bg-slate-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <i className="fas fa-project-diagram mr-2"></i>Portfolio
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="block py-2 px-3 text-gray-300 rounded-lg hover:bg-slate-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <i className="fas fa-cogs mr-2"></i>Services
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="block py-2 px-3 text-gray-300 rounded-lg hover:bg-slate-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <i className="fas fa-envelope mr-2"></i>Contact Us
                </a>
              </li>
              {/* CTA Button */}
              <li className="md:ml-4">
                <a 
                  href="#contact" 
                  className="block py-2 px-4 text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 font-semibold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <i className="fas fa-rocket mr-2"></i>Start Project
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
