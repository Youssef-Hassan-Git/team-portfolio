import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      <nav>
        <nav className="bg-gray-900 border-gray-700 fixed top-0 left-0 right-0 z-50">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-blue-400 ">Youssef Hassan</span>
            </NavLink>
            <button type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-700" aria-controls="navbar-default" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
            </button>
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-700 rounded-lg bg-gray-800 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-gray-900">
                <li>
                  <a href="#about" className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-400 md:p-0" aria-current="page">AboutMe</a>
                </li>
                <li>
                  <a href="#education"  className="block py-2 px-3 text-gray-300 rounded-sm hover:bg-gray-800 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0">Education</a>
                </li>
                <li>
                  <a href="#skills"  className="block py-2 px-3 text-gray-300 rounded-sm hover:bg-gray-800 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0">Skill</a>
                </li>
                <li>
                  <a href="#trainings" className="block py-2 px-3 text-gray-300 rounded-sm hover:bg-gray-800 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0">Trainings</a>
                </li>
                <li>
                  <a href="#projects" className="block py-2 px-3 text-gray-300 rounded-sm hover:bg-gray-800 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0">Project</a>
                </li>
                <li>
                  <a href="#contact" className="block py-2 px-3 text-gray-300 rounded-sm hover:bg-gray-800 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0">ContactMe</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </nav>
    </>
  )
}
