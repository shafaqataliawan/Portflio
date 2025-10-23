import React from 'react'
import PrijectCard from "./ProjectCard";

const Project = () => {
  return (
    <div id='project' className='p-10 md:p-24 text-white'>
        <h1 className='text-2xl md:text-4xl font-bold text-white'> Project</h1>
        <div className='py-12 px-8 flex flex-wrap flex-row gap-5 justify-center '>
      <PrijectCard title='Blogging Website' main='this is a blogging website project'/>
        <PrijectCard title='YouTube clone' main='this is a blogging website project'/>
          <PrijectCard title='Netflix clone' main='this is a blogging website project'/>
          </div> 
    </div>
  )
}

export default Project
