import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router'
import { FaBars } from "react-icons/fa"
import * as Scroll from "react-scroll";

const Navbar = ({ toggle }) => {

  const navigate = useNavigate();
  const scroller = Scroll.scroller;
  const [activeLink, setActiveLink] = useState("");

  const handleScrollLink = async(selector) => {
    await navigate("/");
    setActiveLink(selector);
    scroller.scrollTo(selector, {
      duration: 500,
      smooth: true,
      offset: -100,
      spy: true
    });
  }

  return ( 
    <>
      <nav className="bg-gradient-to-b from-teal-200 to-white fixed top-0 w-full h-20 z-10">
        <div className="flex justify-between items-center h-full px-6">
          <NavLink to="/" className="text-black text-2xl font-medium cursor-pointer font-cursive ml-6">
            Shishpal
          </NavLink>
          <div className="md:hidden block absolute top-0 right-0 transform translate-x-1/2 translate-y-3/5 cursor-pointer text-2xl" onClick={toggle}>
            <FaBars />
          </div>
          <ul className="hidden md:flex items-center space-x-4">
            <li className="h-full">
              <button 
                className={`text-${activeLink === "home" ? 'rose-600' : 'gray-900'} hover:text-rose-600 px-4 py-2`}
                onClick={() => {handleScrollLink("home")}}
              >
                Home
              </button>
            </li>
            <li className="h-full">
              <button 
                className={`text-${activeLink === "about" ? 'rose-600' : 'gray-900'} hover:text-rose-600 px-4 py-2`}
                onClick={() => {handleScrollLink("about")}}
              >
                About
              </button>
            </li>
            <li className="h-full">
              <NavLink 
                to="/project" 
                className="text-gray-900 hover:text-rose-600 px-4 py-2"
                onClick={() => setActiveLink("")}
              >
                Projects
              </NavLink>
            </li>
            <li className="h-full">
              <NavLink 
                to="/resume" 
                className="text-gray-900 hover:text-rose-600 px-4 py-2"
                onClick={() => setActiveLink("")}
              >
                Resume
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar;
