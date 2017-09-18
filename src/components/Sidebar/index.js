import React from 'react';
import './sidebar.css';

function Sidebar () {
  return (
    <div className='sidebar'>
      <a href='/' className='website-title'>
        Io.Psychas
      </a>
      <img className='avatar' alt='avatar' src={process.env.PUBLIC_URL + '/me.jpg'} />
      <div className='sidebar-content'>
        <ul className='nav-links'>
          <li><a href='#intro'>Intro</a></li>
          <li><a href='#technologies'>Technologies</a></li>
          <li><a href='#showroom'>Showroom</a></li>
        </ul>
        <ul className='social-links'>
          <li>
            <a
              href='https://www.twitter.com/iopsychas'
              target='_blank'
            >
              <i className='fa fa-twitter' aria-hidden='true' />
            </a>
          </li>
          <li>
            <a
              href='https://www.github.com/thegallery'
              target='_blank'
            >
              <i className='fa fa-github' aria-hidden='true' />
            </a>
          </li>
          <li>
            <a
              href='https://codepen.io/TheGallery/pens/public/'
              target='_blank'
            >
              <i className='fa fa-codepen' aria-hidden='true' />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
