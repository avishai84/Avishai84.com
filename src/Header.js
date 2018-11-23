import React, { Component } from 'react';
import Navigation from './Navigation.js';

class Header extends Component {

  render() {
    return (
      <div className="header">
        <div className="container">
         <Navigation/>
        </div>
      </div>
    );
  }
}

export default Header;
