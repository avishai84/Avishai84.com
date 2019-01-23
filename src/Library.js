import React, { Component } from 'react';
import './Library.scss';
import SVGinDepth from './SVGinDepth';
import ConvertSVGTutorial from './ConvertSVGTutorial';

const LoadingIcon = () => (
  <div className="spinIcon"></div>
 );
const textInfo = 'More content to come soon...';
const foo = document.querySelector('.library').append(<LoadingIcon/>);

class Library extends Component {

constructor(props){
  super(props);

  this.setState({
    scroll:'',
    isLoading:false,
    text:'',
    spin: ''
  });
  this.scroller = this.scroller.bind(this);
}



componentDidMount(){
  this.setState({
    scroll: window.addEventListener('scroll',  this.scroller),
    spin: this.foo
  });
  console.log('DOM ready ');
}
componentWillUnmount(){
  this.setState({
    scroll: window.removeEventListener('scroll',  this.scroller)
  });
  console.log('event removed');
}
  // window.removeEventListener('scroll',  this.scroller);



scroller(){

  // this.setState({
  //   scroll:  console.log('window inner height: '+window.innerHeight +'- document scroll top'+ document.documentElement.scrollTop +'- offset entire doc height '+  document.documentElement.offsetHeight)

  // });
  // add more content at the end of the page
  if(window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight){
    this.setState({
      isLoading: true,
      // text: document.querySelector('.library').append(textInfo),
      // spin:  document.querySelector('.library .spinner').style.display = 'block'
    });
  }else{
    this.setState({
      isLoading: false,
      spin: console.log(document.querySelector('.library'))
      //text:''
  
    });
  }

  
}

  render() {
    return (
      <div className="library">
        <SVGinDepth/>
        
        {this.isLoading ? this.spin : 'not loading'}
       
      </div>
    );
  }
}

export default Library;
