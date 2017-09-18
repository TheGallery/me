import React from 'react';
import './sidebar.css';

function Sidebar () {
  return (
    <div className='sidebar'>
      <a href='/' className='website-title'>
        Io.Psychas
      </a>
      <img className='avatar' alt='avatar' src={process.env.PUBLIC_URL + '/images/me.png'} />
      <div className='sidebar-content'>
        <div className='nav-links'>
          <a href='#intro' className='link-light'>Intro</a>
          <a href='#technologies' className='link-light'>Technologies</a>
          <a href='#showroom' className='link-light'>Showroom</a>
        </div>
        <div className='social-links'>
          <a href='https://www.twitter.com/iopsychas' className='link-light' target='_blank'>
            <i className='fa fa-twitter' aria-hidden='true' />
          </a>
          <a href='https://www.github.com/thegallery' className='link-light' target='_blank'>
            <i className='fa fa-github' aria-hidden='true' />
          </a>
          <a href='https://codepen.io/TheGallery/pens/public/' className='link-light' target='_blank'>
            <i className='fa fa-codepen' aria-hidden='true' />
          </a>
          <a href='mailto:hello@iopsychas.me' className='link-light'>
            hello@iopsychas.me
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
