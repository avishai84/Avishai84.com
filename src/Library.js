import React, { Component } from 'react';
import './Library.scss';
import SVGinDepth from './SVGinDepth';


const LoadingIcon = ({name}) => (
  <div className="spinIcon" text={name}></div>
 );
const textInfo = 'More content to come soon...';
 

class Library extends Component {

constructor(props){
  super(props);

  this.setState({
    scroll:'',
    isLoading:false,
    text:''
  });
  this.scroller = this.scroller.bind(this);
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
      isLoading: true
     // text: document.querySelector('.library').append(textInfo)
    });
  }else{
    this.setState({
      isLoading: false
      //text:''
  
    });
  }

  
}

  render() {
    return (
      <div className="library">
        <SVGinDepth/>
        {this.isLoading?<LoadingIcon className="spinner"/>:''}
      </div>
    );
  }
}

export default Library;
