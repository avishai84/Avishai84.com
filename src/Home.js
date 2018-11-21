import React, { Component } from 'react';
import './Home.scss';
import HeadShot from './images/headShot.png';

class Home extends Component {

  render() {
    
    return (
      <div className="home"> 
        <div className="jumbotron">
          <div className="relative">
            <span className="fadeThis" data-tooltip>
              <img src={HeadShot} alt="headShot" data-title="head shot" className="img-circle pull-left headShot"/>
            </span>
          </div>
          <div className="frontEnd">a front-end<div className="dot">web<div className="bracket"></div><div className="blue">developer</div></div><div className="bracket"></div></div> 
          <p>My name is Avishai and I am very excited about new front-end technologies. This is an exciting time to be involved with web technology.</p>
          <p> This website is all about React JS and a showcase of my evolving web developer skills. I am passionate 
          about making elegant and usable websites. Many new features of HTML5, CSS3 and React
           {/* <a className="colorThis" href="http://www.avishai84.com/animationExample.html" target="_blank">CSS3</a>  */}
           {/* <i className="fa fa-external-link-square "></i>*/} are implemented in this website; I hope you'll enjoy it.</p> 
          <p>Avishai</p>
        </div>
        {this.props.message}
      </div>
    );
  }
}

export default Home;
