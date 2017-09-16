import React from 'react';
import Sidebar from './Sidebar';
import Intro from './Intro';

function App () {
  return (
    <div className='app'>
      <Sidebar />
      <div className='main-content'>
        <Intro />
      </div>
    </div>
  );
}

export default App;
