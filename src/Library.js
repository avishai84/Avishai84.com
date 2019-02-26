import React, { Component } from 'react';
import './Library.scss';

import SVGinDepth from './SVGinDepth';
import Illustration1 from './images/convert-text-to-SVG/image-1.png';
import Illustration2 from './images/convert-text-to-SVG/image-3.png';
import Illustration3 from './images/convert-text-to-SVG/image-4.png';
import Illustration4 from './images/convert-text-to-SVG/image-5.png';
import Illustration5 from './images/convert-text-to-SVG/image-6.png';
import Illustration6 from './images/convert-text-to-SVG/image-7.png';
import Illustration7 from './images/convert-text-to-SVG/image-8.png';
import Illustration9 from './images/convert-text-to-SVG/PROMODRAW_v2.png';


//import ConvertSVGTutorial from './ConvertSVGTutorial';
const previousHeight = [];

const videosUrl = ['https://www.youtube.com/embed/w21iO-FyYhA','https://www.youtube.com/embed/IAmcCrETKIc','https://www.youtube.com/embed/8AKT8PQnh_U'];


const convertSVGTutorial = `<div class="svgTextTutorial">
<div class="container TextSvg">
    <div class="row">
        <div class="page-header">
            <h1 class="screenreader">Convert Text to SVG</h1>
        </div>
        <div class="well">
            <div class="wrapper">
                <h2>Steps to Convert Text to SVG:</h2>
                <small>Prepared By Avishai for Avishai</small>
                <div>
                    <ol>
                        <li>
                            <p class="full half">Import your PSD into Adobe Illustrator</p>
                            <img class="container" src=${Illustration1} alt="image" />
                        </li>
                        <li>
                            <p class="full half">Select the entire text, hide all background images</p>
                            <img class="container" src=${Illustration2} alt="image" />
                        </li>
                        <li>
                            <p class="full half">Make sure the SVG document is coded to scale.</p>
                            <p class="full half">Go to Object -> Artboards -> Fit to Selected Art</p>
                            <img class="container" src=${Illustration3} alt="image" />
                        </li>
                        <li>
                            <p class="full half">Go to "Type" --> "Create Outlines"</p>
                            <img class="container" src=${Illustration4} alt="image" />
                        </li>
                        <li>
                            <p class="full half">Select the following in the SVG(svg) sub menus:</p>
                            <img class="container" src=${Illustration5} alt="image" />
                        </li>
                        <li>
                            <p class="full half">SVG(svg) sub menu setup:</p>
                            <p>Fonts: type: "Convert to Outlines"; Options: Image location: "Embed";
                                Advanced Options: CSS Properties: "Style Attributes"; click on SVG Code.</p>
                            <img class="container" src=${Illustration6} alt="image" />
                        </li>
                        <li>
                            <p class="full half">SVG Code- copy the code and as it as a text file</p>
                            <img class="container" src=${Illustration7} alt="image" />
                        </li>
                        <li>
                            <p class="full half">Font Note: Illustrator must have the same fonts as your
                                Photoshop file. Otherwide it would replace it with default fonts.</p>
                        </li>
                    </ol>
                </div>
                <h3>The results SVG:</h3>
                <div class="full half relative center">
                    <img class="imgTog" src=${Illustration9} alt="bg image" />
                </div>
            </div>
        </div>
    </div>
</div>
</div>`;
// video factory
const videoShell = (urlPath) =>(
  `<iframe class="videoCollection" width="560" height="315" src=${urlPath} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
);

class Library extends Component {

constructor(props){
  super(props);

  this.setState({
    scroll:'',
    isLoading:false,
    text:'',
    spin: '',
    count: 0,
    co:''
  });
  this.scroller = this.scroller.bind(this);
}

scroller(e){

  //console.log(window.innerHeight + document.documentElement.scrollTop);
  // add more content at the end of the page
  if(window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight){
    this.setState({
      text: this.updateDataAfterScrollEnd(true, document.documentElement.offsetHeight) 
    })
  }
}

updateDataAfterScrollEnd(isScrolling, offsetHeight){

// Check to see if the height changed means more content was loaded

// if(parseInt(offsetHeight) > parseInt(previousHeight[0])){document.querySelector('.library').append('new content')}

  previousHeight.push(offsetHeight);
  if(previousHeight.length === 2){
    // clear last add in array.
    previousHeight.shift();
  }

if(isScrolling === true){
  // check to see how many videos in the array
  if(document.querySelectorAll('.library .videoCollection').length != null & document.querySelectorAll('.library .videoCollection').length < videosUrl.length){
    this.setState({
      spin: document.querySelector('.library').contains(document.querySelector('.loadingIcon'))?  document.querySelector('.loadingIcon').remove(): false, 
      videos: videosUrl.map((url) => {
        document.querySelector('.library').insertAdjacentHTML('beforeend', videoShell(url))}),
      });
    }else{
      //button option for more content
      this.setState({
       more: document.querySelector('.library').contains(document.querySelector('.TextSvg')) ? false : document.querySelector('.library').insertAdjacentHTML('beforeend', convertSVGTutorial)
      })
    }
  }
}


componentDidMount(){
  this.setState({
    scroll: window.addEventListener('scroll',  this.scroller) 
  });
}
componentWillUnmount(){
  this.setState({
    scroll: window.removeEventListener('scroll',  this.scroller)
  });
}

  render() {

    return (
      <div className="library">
        <SVGinDepth/>

      </div>
    );
  }
}

export default Library;
