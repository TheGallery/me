import React from 'react';
import Sidebar from './Sidebar';
import Intro from './Intro';
import Technologies from './Technologies';
import Showroom from './Showroom';
import './app.css';

function App () {
  return (
    <div className='app'>
      <Sidebar />
      <div className='main-content'>
        <Intro />
        <Technologies />
        <Showroom />
      </div>
    </div>
  );
}

export default App;
