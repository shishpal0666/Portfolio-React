import React from 'react';

const ProjectCard = ({ img, demoLink, githubLink, name }) => {
  return (
    <div className="w-[400px] shadow-lg hover:shadow-2xl md:w-auto">
      <div className="overflow-hidden">
        <img
          src={img}
          alt=""
          className="w-full h-auto object-contain border-b border-gray-300"
        />
      </div>
      <div className="flex items-center justify-center text-center text-medium mt-5 text-[#1c3636]">
        {name}
      </div>
      <div className="p-4 flex flex-row items-center justify-evenly">
        <a
          href={demoLink}
          target="_blank"
          className="bg-transparent cursor-pointer border-2 border-transparent text-center rounded px-3 py-2 text-base font-medium text-[#2a9797] hover:border-[#1c3636] hover:bg-[#1c3636] hover:text-white"
        >
          Demo Link
        </a>
        <a
          href={githubLink}
          target="_blank"
          className="bg-transparent cursor-pointer border-2 border-transparent text-center rounded px-3 py-2 text-base font-medium text-[#2a9797] hover:border-[#1c3636] hover:bg-[#1c3636] hover:text-white"
        >
          Github Link
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
