import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Footer.scss';
import SocialFooter from './SocialFooter';

export default class Footer extends Component {

  render() {
    return (
      <footer>
        <div className="container">
          <SocialFooter/>
        </div>
      </footer>
    );
  }
}


