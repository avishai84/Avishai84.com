import React, { Component } from 'react';
import './Library.scss';
import SVGinDepth from './SVGinDepth';


class Library extends Component {

constructor(props){
  super(props);

  this.setState({
    scroll:''
  });
this.scroller = this.scroller.bind(this);
}



componentDidMount(){
  window.addEventListener('scroll',  this.scroller);
}
componentWillUnmount(){
  window.removeEventListener('scroll',  this.scroller);
  console.log('event removed');
}

scroller(){

  this.setState({
    scroll:  console.log('window inner height: '+window.innerHeight +'- document scroll top'+ document.documentElement.scrollTop +'- offset entire doc height '+  document.documentElement.offsetHeight)
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
