import React, { Component } from 'react';
import './Portfolio.scss';
import Sticker from './Sticker';
import GapImg from './images/gap/HpGfol.png';
import WineCom1 from './images/wine/wine-com-email.png';
import WineCom2 from './images/wine/mobile-email2.png';
import gsl from './images/gsl/gsl.png';

const vimeoIframe = '<iframe src="//player.vimeo.com/video/61961717?title=0&amp;byline=0&amp;portrait=0" width="100%" height="223" kwframeid="1" frameborder="0"  webkitallowfullscreen=true  mozallowfullscreen=true  allowfullscreen=true ></iframe>';


class Portfolio extends Component {

  constructor(props){
    super(props);
    this.state = ({
      caroselaStart: 'paused' 
    });
    this.caroselaFn = this.caroselaFn.bind(this);
  }

  caroselaFn(arr){
    if(arr.length > 0){
      const isStart = this.state.caroselaStart === 'paused' ? 'starting' : 'paused';
      this.setState({
        caroselaStart : isStart
      });
    }
 
    // create a fade in/out
    // set first img with .current
      arr[0].classList.add('current');
        setInterval(function(){
        if(arr[0].classList.value.includes('current')){
          arr[1].classList.add('current');
          arr[0].classList.remove('current');
        }else{
          arr[0].classList.add('current');
          arr[1].classList.remove('current');
        }
      }, 2500);
  
  }

  componentDidMount(){
    const caroselaArr = document.querySelectorAll('.portfolio .carosela');
    const vimeoPlacement = document.querySelectorAll('.portfolio .vimeoPlacement');
     // start carousel 
     this.caroselaFn(caroselaArr);
     vimeoPlacement[0].innerHTML = vimeoIframe;
  }

  render() {
    return (
      <div className="portfolio">
        <section>
           {/* <h2>portfolio</h2> */}
            <div className="well">
              {/* <p className="lead">.....</p>  */}
            </div>
            {/* Gap */}
            <div className="row featurette">
              <hr className="featurette-divider" />
              <div className="col-md-5">
                <img src={GapImg} alt="Landing Gap inc."/>
              </div>
              <div className="col-md-7">
              <h2 className="featurette-heading">Gap Inc. <span className="text-muted">Web Developer</span></h2>
                <p className="lead">At Gap, my team collaborates with brand production, brand web design and marketing teams to create and maintain visual design into functional web pages.</p>
                <p className="lead">My focus is coding responsive React UI content optimized for speed.</p>
              </div>
            </div>
            {/* wine.com */}
            <br/>
            <hr className="featurette-divider" />
            <div className="row featurette">
              <div className="col-md-7">
                <h2 className="featurette-heading">Email Master<span className="text-muted"> The Art of Making Emails</span></h2>
                <p className="lead">Created more than 40 dynamic responsive email templates for Wine.com's e-commerce business. I hand-coded using HTML, CSS and Razor Syntax technologies to talk to the database.
              </p>
              <h5>HTML Email Code Sample </h5>
              <p>
                <a className="download" href="http://www.avishai84.com/downloads/Example-HTML-Email-Code-2015-A.Taashur.zip">
                  Download
                  </a>
                </p>
              </div>
              <div className="col-md-5">
                <img  className="carosela" src={WineCom1} alt="wine.com email template" />
                <img className="carosela" src={WineCom2} alt="wine.com email template" />
              </div>
            </div>
            <hr className="featurette-divider" />
            <div className="row featurette">
            
              <div className="col-md-5"><h2 className="featurette-heading">German Shepherd breed. <span className="text-muted">Basic knowledge.</span></h2><p className="lead">I share my experience as a German Shepherd owner to educate people about the breed. Owning a dog requires a lot of work, like a website you must keep maintaining.</p></div>
              <div className="col-md-7"><a href="http://www.germanshepherdlover.net/home.html" target="_blank" rel="noopener noreferrer">
                  <img style={{"max-width":"420px","float":"right"}} src={gsl} alt="German Shepherd Lover" />
                </a>
              </div>
            </div>


            <hr className="featurette-divider" />
            <div className="row featurette">
              <div className="col-md-7 vimeoPlacement">
              {/* video will be append in here */}
              </div>  
              <div className="col-md-5">
                <h2 className="featurette-heading">And lastly, this one. <span className="text-muted">Hobby.</span></h2>
                <p className="lead">Playing music. I've been fortunate to take music lessons as a teenager. Drums are my main instrument. As a self starter, I taught myself to play the piano, bass guitar, accoustic guitar and accordion. I play and record music at my home studio.&nbsp;
                <a href="http://www.youtube.com/channel/UCaeHQSEl1OkzWh37mBNhwFQ" className="btn btn-danger btn-sm" target="_blank" role="button" rel="noopener noreferrer">YouTube</a>
                </p>
              </div>
            </div>
        </section>
        <Sticker/>
      </div>
    );
  }
}

export default Portfolio;
