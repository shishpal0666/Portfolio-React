import React from 'react';
import ProjectCard from './ProjectCard';
import classflowimg from "../assets/images/classflow.jpg";

const projectList = [
  {
    img: classflowimg,
    demoLink: 'https://class-flow.vercel.app/',
    githubLink: 'https://github.com/shishpal0666/ClassFlow',
    name: 'Anamolous Application using MERN'
  }
];

const ProjectsList = () => {
  return (
    <div className="flex flex-col items-center gap-8 p-8 mt-8">
      <span className="text-3xl font-medium text-teal-600 tracking-wide">
        Projects
      </span>
      <div className="flex flex-wrap justify-center gap-16 p-8 pt-0 md:p-4">
        {
          projectList.map((card, index) => (
            <ProjectCard {...card} key={index} />
          ))
        }
      </div>
    </div>
  );
}

export default ProjectsList;
