import React, { Component } from 'react';


class ScreenSize extends Component {
  constructor(props){
    super(props);
    this.state = {
      screen_size: 0
    };
    this.methodUpdateName = this.methodUpdateName.bind(this);
  }
 
  methodUpdateName(size){
    let winWidth = window.visualViewport.width;
    this.setState({
      screen_size: winWidth
    }) 
  }

  //update on DOM
  componentDidMount() {
    this.methodUpdateName();
    window.addEventListener("resize", this.methodUpdateName);
  }

  // unmount
  componentWillUnmount() {
    window.removeEventListene("resize", this.methodUpdateName);
  }

  render() {
    return (
      <div className="ScreenSize" > 
        <small>{this.state.screen_size}</small>
      </div>
    );
  }
}

export default ScreenSize;
