import React, { Component } from 'react';
import './mobileNav.css';

class MobileNav extends Component {
  state = { showMenu: false };

  toggleMenu = (e) => {
    e.preventDefault();

    this.setState({
      showMenu: !this.state.showMenu
    });
  };

  closeMenu = () => {
    this.setState({
      showMenu: false
    });
  };

  render () {
    return (
      <div className='mobile-nav'>
        <a href='/'>IO.PSYCHAS</a>
        <a
          href='/#'
          className='nav-btn'
          onClick={this.toggleMenu}
        >
          <icon className='fa fa-bars' />
        </a>
        <div
          className='nav-links'
          style={{display: this.state.showMenu ? 'flex': 'none'}}>
          <a href='#intro' onClick={this.closeMenu}>Intro</a>
          <a href='#technologies' onClick={this.closeMenu}>Technologies</a>
          <a href='#showroom' onClick={this.closeMenu}>Showroom</a>
        </div>
      </div>
    );
  }
}

export default MobileNav;
