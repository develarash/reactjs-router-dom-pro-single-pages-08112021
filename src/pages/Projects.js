import React from 'react'
import ProjectItem from "../components/ProjectItem"
import {ProjectList} from "../helpers/ProjectList"
import "../styles/projects.css";
// import img 
const Projects = () => {
  return (
    <div className='projects'>
      <h1>My Personal Projects</h1>
    <div className='projectList'>
    {ProjectList.map((project,idx)=>{
      return <ProjectItem id={idx} name={project.name} image={project.image}></ProjectItem>
    })}
    </div>
    </div>

  )
}

export default Projects