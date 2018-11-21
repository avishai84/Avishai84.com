import React, { Component } from 'react';
import logo from './logo.svg';
import './Hello.css';


class Colors extends Component {
  constructor(props){
    super(props);
    this.clickIt = this.clickIt.bind(this);
    this.state = {
     message: "Hello!"
   };
  }
  clickIt(){
    alert(this.state.message);
  }
  render() {
    return (
      <div className="colors">
          <a onClick={this.clickIt }>Just clickIt</a>
      </div>
    );
  }
}

export default Colors;
