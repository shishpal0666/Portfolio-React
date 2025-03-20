import React from 'react';
import { NavLink } from 'react-router';
import { BsLinkedin, BsGithub  } from "react-icons/bs";
import Programmer from '../assets/images/programmer.jpg';
import Type from './Type';

const Home = () => {
  return (
    <div id="home" name="home" className="mt-16 px-24 py-8 w-full min-h-screen bg-white flex flex-wrap justify-between items-start">
      <section className="flex-1 mt-10 pl-10">
        <div className="flex flex-col items-start justify-start gap-2 mb-9">
          <span className="text-lg font-medium">Hi There, I'm</span>
          <h2 className="text-4xl font-medium text-teal-600">Priyanshi Maheshwari</h2>
          <span className="text-2xl font-normal text-pink-600">
            <Type />
          </span>
        </div>
        <div className="flex gap-5">
          <NavLink to={"https://github.com/shishpal0666"} target="_blank" className="text-teal-600 text-2xl hover:text-pink-600">
            <BsGithub />
          </NavLink>
          <NavLink to={"https://www.Linkedin.com/in/shishpal-polampally"} target="_blank" className="text-teal-600 text-2xl hover:text-pink-600">
            <BsLinkedin />
          </NavLink>
        </div>
      </section>
      <div className="flex-1 mt-5 flex justify-center items-center max-w-xs">
        <img src={Programmer} alt="Programmer" className="max-w-full max-h-80 object-contain rounded-full" />
      </div>
    </div>
  );
};

export default Home;
