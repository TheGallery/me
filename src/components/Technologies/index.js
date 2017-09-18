import React from 'react';
import './technologies.css';
import data from '../../data/skills.json';

function Technologies () {
  return (
    <div id='technologies'>
      <h1 className='section-title'>Technologies<span>.Experience</span></h1>
      <div className='skills-container'>
        {
          data.sort((a, b) => b.exp - a.exp)
            .map(tech => (
              <div>
                <div className='skill-name'>{tech.name}</div>
                <Scale points={tech.exp} />
              </div>
            ))
        }
      </div>
      <h1 className='section-title'><span>.Things I love</span></h1>
      <div className='stuff-container'>
        <a href='https://www.sublimetext.com/'>Sublime Text</a>
        <a href='http://jshint.com/about/'>JSHint</a>
        <a href='http://www.devdocs.io'>devdocs.io</a>
        <a href='https://standardjs.com/'>StandardJS</a>
        <a href='https://lodash.com/'>Lodash</a>
      </div>
    </div>
  );
}

function Scale ({points}) {
  return (
    <div className={`scale x${points}`}>
      <div className='point' />
      <div className='point' />
      <div className='point' />
      <div className='point' />
    </div>
  );
}

export default Technologies;
