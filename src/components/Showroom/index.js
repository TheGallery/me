import React from 'react';
import './showroom.css';
import projects from '../../data/projects.json';

function Showroom () {
  return (
    <div id='showroom'>
      <h1 className='section-title'>Showroom</h1>
      <div className='projects'>
        {
          projects.map(project => (
            <Project project={project} />
          ))
        }
      </div>
    </div>
  );
}

function Project ({project}) {
  const {
    name,
    url,
    sourceUrl,
    sourceHost,
    img
  } = project;

  return (
    <div
      className='project'
      style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/${img})`}}>
      <div className='title'>{name}</div>
      <div className='show-more'>
        <icon className='fa fa-code' />
      </div>
      <div className='overlay'>
        <a href={url} target='_blank' title='View Project'>
          <icon className='fa fa-eye' />
        </a>
        <div className='divider' />
        <a href={sourceUrl} target='_blank' title='View Source'>
          <icon className={`fa fa-${sourceHost}`} />
        </a>
      </div>
    </div>
  );
}

export default Showroom;
