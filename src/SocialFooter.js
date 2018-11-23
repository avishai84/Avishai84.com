import React, { Component } from 'react';
import './SocialFooter.scss';
import Youtube from './images/svgSprite/youtube.svg';
import Linkedin from './images/svgSprite/linkedin.svg';
import Vimeo from './images/svgSprite/vimeo.svg';

const styles1 ={
  paddingLeft:'3px',
  paddingBottom:0,
  marginBottom:0
};
const styles2 ={
  fontSize:'10px',
  paddingBottom:0,
  marginBottom:0
};
const date = new Date();
const day = date.getDay();
const month = date.getMonth();
const daily = date.getDate();
const year = date.getFullYear();
const weekly = ['Sunday', 'Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthly = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

class SocialFooter extends Component {
 
  render() {
    return (
      <div className="socialFooter ">
        <small className="text-muted small" style={styles2}>Last update: Friday, November 23, 2018
          <div id="date" style={styles2}>Today is: {weekly[day]},
            <span style={styles1}>{monthly[month]}</span>
            <span style={styles1}>{daily},</span>
            <span style={styles1}>{year}</span><br></br>
            <span style={styles1}>Made using React - website version: 1.0</span>
        
          </div>
        </small>
        <p className="small">
          Avishai84.com, created by Avishai, a front end developer, {year}.</p>
          <a href="https://www.youtube.com/channel/UCaeHQSEl1OkzWh37mBNhwFQ" target="_blank" rel="noopener noreferrer">
              <i className="icons"><img src={Youtube} alt="youtube icon" /></i>
          </a>
          <a href="http://vimeo.com/user17090744" target="_blank" rel="noopener noreferrer">
            <i className="icons"><img src={Vimeo} alt="Vimeo icon" /></i>
          </a>
          <a href="https://www.linkedin.com/pub/avishai-taashur/5/506/555" target="_blank" rel="noopener noreferrer">
            <i className="icons"><img src={Linkedin} alt="Linkedin icon" /></i>
          </a>
      </div>
    );
  }
}

export default SocialFooter;
