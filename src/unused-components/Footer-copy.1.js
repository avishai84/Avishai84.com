import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './Footer.scss';
import navigation from './navigation.json';
import SocialFooter from './SocialFooter';


 const nav = navigation.nav;

class Footer extends Component {
  constructor(props){
    super(props);
    this.state={
      nav:''
    };
  }

  render() {
    return (
      <div className="footer text-center">
        <nav className="Page navigation" aria-label="Page navigation footer">
          <ul className="pagination">
            {nav.map((item) => <li key={item.id} className="page-item"><a href={item.href} title={item.title} className="page-link">{item.name}</a></li>)}
          </ul>
        </nav>
        <SocialFooter/>
      </div>
    );
  }
}

export default Footer;
