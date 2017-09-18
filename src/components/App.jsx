import React from 'react';
import Sidebar from './Sidebar';
import Intro from './Intro';
import Technologies from './Technologies';
import Showroom from './Showroom';
import Footer from './Footer';
import MobileNav from './MobileNav';
import './app.css';

function App () {
  return (
    <div className='app'>
      <Sidebar />
      <MobileNav />
      <div className='main-content'>
        <Intro />
        <Technologies />
        <Showroom />
        <Footer />
      </div>
    </div>
  );
}

export default App;
