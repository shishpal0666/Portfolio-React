import React from "react";
import TechnicalSkills from "./TechnicalSkills";
import Profile from "../assets/images/profile.jpg";

const About = () => {
  return (
    <>
      <div
        id="about"
        name="about"
        className="flex flex-col items-center justify-start gap-8 p-8 lg:p-24"
      >
        <section className="flex flex-row items-start justify-start mb-16 lg:flex-col lg:items-center">
          <div className="flex items-center justify-center w-[40%] mb-8 lg:w-full lg:mb-0">
            <img
              src={Profile}
              alt=""
              className="max-w-full max-h-[350px] object-contain rounded-full mb-12 lg:mb-0"
            />
          </div>
          <article className="flex flex-col items-center justify-start w-1/2 lg:w-full lg:px-5">
            <span className="text-2xl font-medium text-[#2a979b] mb-4">
              About Me
            </span>
            <span className="text-base leading-6 tracking-wide mb-6 text-[#1c3636]">
              Hi, I'm Shishpal Polampally, a passionate Full Stack Developer and
              Machine Learning Enthusiast with a strong foundation in web
              development, artificial intelligence, and reinforcement learning.
              Currently, I'm a pre-final year Computer Science and Engineering
              student at IIIT Pune, where I actively work on projects that blend
              technology with real-world impact.
            </span>
              <span>
                🚀 I'm always excited to build, learn, and innovate, whether
                it's crafting efficient backend systems, optimizing AI models,
                or designing impactful solutions.
              </span>
            <span className="text-[#1c3636]">
              Email :
              <span
                className="cursor-pointer hover:border-b hover:border-[#1c3636]"
                onClick={() => {
                  window.location.href =
                    "mailto:priyanshimaheshwari2015@gmail.com";
                }}
              >
                shishpalpolampally@gmail.com
              </span>
            </span>
          </article>
        </section>
        <TechnicalSkills />
      </div>
    </>
  );
};

export default About;
