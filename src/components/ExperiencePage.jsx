import React, { useEffect } from 'react'
import ProjectsList from '../components/ProjectsList'
// import WorkExperience from '../components/WorkExperience'
import { useLocation } from 'react-router'

const ExperiencePage = () => {
  const location = useLocation();
    
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [location]);

  return (
    <div className="p-8 flex flex-col items-center">
      {/* <WorkExperience /> */}
      <ProjectsList />
    </div>
  )
}

export default ExperiencePage;
