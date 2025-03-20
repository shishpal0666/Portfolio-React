import React from 'react'
import { CgCPlusPlus } from "react-icons/cg";
import { IoLogoJavascript } from 'react-icons/io';
import { FaNode } from 'react-icons/fa';
import { SiTailwindcss, SiRedux, SiStyledcomponents, SiPostman } from 'react-icons/si';
import { DiVisualstudio, DiHtml5, DiCss3, DiReact, DiMongodb, DiPython, DiGit, DiBootstrap } from "react-icons/di";
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

const TechnicalSkills = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-start">
        <span className="text-3xl font-medium text-teal-600 mb-8">Skillset</span>
        <div className="flex flex-wrap items-center justify-center gap-8 px-8">
          <div className="tech-icon" data-tooltip-id="cplusplus" data-tooltip-content="C++" data-tooltip-place="bottom">
            <Tooltip id="cplusplus" />
            <CgCPlusPlus />
          </div>
          <div className="tech-icon" data-tooltip-id="html" data-tooltip-content="HTML" data-tooltip-place="bottom">
            <Tooltip id="html" />
            <DiHtml5 />
          </div>
          <div className="tech-icon" data-tooltip-id="css" data-tooltip-content="CSS" data-tooltip-place="bottom">
            <Tooltip id="css" />
            <DiCss3 />
          </div>
          <div className="tech-icon" data-tooltip-id="javascript" data-tooltip-content="JavaScript" data-tooltip-place="bottom">
            <Tooltip id="javascript" />
            <IoLogoJavascript />
          </div>
          <div className="tech-icon" data-tooltip-id="react" data-tooltip-content="React.JS" data-tooltip-place="bottom">
            <Tooltip id="react" />
            <DiReact />
          </div>
          <div className="tech-icon" data-tooltip-id="redux" data-tooltip-content="Redux" data-tooltip-place="bottom">
            <Tooltip id="redux" />
            <SiRedux />
          </div>
          <div className="tech-icon" data-tooltip-id="node" data-tooltip-content="Node.JS" data-tooltip-place="bottom">
            <Tooltip id="node" />
            <FaNode />
          </div>
          <div className="tech-icon" data-tooltip-id="mongodb" data-tooltip-content="MongoDB" data-tooltip-place="bottom">
            <Tooltip id="mongodb" />
            <DiMongodb />
          </div>
          <div className="tech-icon" data-tooltip-id="python" data-tooltip-content="Python" data-tooltip-place="bottom">
            <Tooltip id="python" />
            <DiPython />
          </div>
          <div className="tech-icon" data-tooltip-id="tailwindcss" data-tooltip-content="TailwindCSS" data-tooltip-place="bottom">
            <Tooltip id="tailwindcss" />
            <SiTailwindcss />
          </div>
          <div className="tech-icon" data-tooltip-id="styledcomponents" data-tooltip-content="Styled Components" data-tooltip-place="bottom">
            <Tooltip id="styledcomponents" />
            <SiStyledcomponents />
          </div>
          <div className="tech-icon" data-tooltip-id="bootstrap" data-tooltip-content="Bootstrap" data-tooltip-place="bottom">
            <Tooltip id="bootstrap" />
            <DiBootstrap />
          </div>
          <div className="tech-icon" data-tooltip-id="git" data-tooltip-content="Git" data-tooltip-place="bottom">
            <Tooltip id="git" />
            <DiGit />
          </div>
          <div className="tech-icon" data-tooltip-id="visualStudio" data-tooltip-content="VS Code" data-tooltip-place="bottom">
            <Tooltip id="visualStudio" />
            <DiVisualstudio  />
          </div>
          <div className="tech-icon" data-tooltip-id="postman" data-tooltip-content="Postman" data-tooltip-place="bottom">
            <Tooltip id="postman" />
            <SiPostman />
          </div>
        </div>
      </div>
    </>
  )
}

export default TechnicalSkills;
