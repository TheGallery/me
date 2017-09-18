import React from 'react';
import Project from './Project';
import './showroom.css';
import projects from '../../data/projects.json';

function Showroom () {
  return (
    <div id='showroom'>
      <h1 className='section-title'>Showroom</h1>
      <div className='projects'>
        {
          projects.map(project => (
            <Project key={project.name} project={project} />
          ))
        }
      </div>
    </div>
  );
}

export default Showroom;
