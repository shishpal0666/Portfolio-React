import React, { useState } from 'react';
import { NavLink as LinkR, useNavigate } from 'react-router';
import { FaTimes } from 'react-icons/fa';
import * as Scroll from "react-scroll";

const Sidebar = ({ isOpen, toggle }) => {
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

  const handleRouterLink = () => {
    setActiveLink("");
    toggle();
  }

  return (
    <div 
      className={`fixed z-12 top-0 left-0 w-full h-full bg-white transition-all duration-300 ease-in-out 
        ${isOpen ? 'opacity-100 top-0' : 'opacity-0 top-[-100%]'} flex flex-col items-center justify-center`}
      onClick={toggle}
    >
      <div className="absolute top-4 right-6 cursor-pointer" onClick={toggle}>
        <FaTimes className="text-black text-2xl" />
      </div>

      <div className="text-black">
        <ul className="grid grid-rows-[repeat(6,60px)] text-center">
          <li>
            <button 
              className={`text-xl px-4 transition-all duration-200 ease-in-out cursor-pointer 
                ${activeLink === "home" ? 'text-[#bb3459]' : 'text-[rgb(28,54,54)]'} hover:text-[#bb3459]`} 
              onClick={() => {handleScrollLink("home")}}
            >
              Home
            </button>
          </li>
          <li>
            <button 
              className={`text-xl px-4 transition-all duration-200 ease-in-out cursor-pointer 
                ${activeLink === "about" ? 'text-[#bb3459]' : 'text-[rgb(28,54,54)]'} hover:text-[#bb3459]`} 
              onClick={() => {handleScrollLink("about")}}
            >
              About
            </button>
          </li>
          <li>
            <LinkR 
              to="/experience" 
              className="text-xl px-4 transition-all duration-200 ease-in-out cursor-pointer 
                text-[rgb(28,54,54)] hover:text-[#bb3459]"
              onClick={() => {handleRouterLink()}}
            >
              Experience
            </LinkR>
          </li>
          <li>
            <LinkR 
              to="/resume" 
              className="text-xl px-4 transition-all duration-200 ease-in-out cursor-pointer 
                text-[rgb(28,54,54)] hover:text-[#bb3459]"
              onClick={() => {handleRouterLink()}}
            >
              Resume
            </LinkR>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar;
