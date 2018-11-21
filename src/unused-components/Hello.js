import React, { Component } from 'react';
import logo from './logo.svg';
import './Hello.css';


const A = 65 // ASCII character code
class Hello extends Component {
  constructor(props){
    super(props);


    this.clickIt = this.clickIt.bind(this);

    this.handleClick = this.handleClick.bind(this);
    this.state = {
     justClicked: null,
     letters: Array.from({length: 26}, (_, i) => String.fromCharCode(A + i)),
     message: "Hello!"
   };
  }
  clickIt(){
    alert(this.state.message);
  }

  handleClick(letter) {
      this.setState({ justClicked: letter,
        message:
      });
    }

  render() {

    return (
      <div className="Hello">
        <p>
          <a onClick={this.handleClick }>Just clicked: {this.state.justClicked}</a>
        <ul>
          {this.state.letters.map(letter =>
            <li key={letter} onClick={() => this.handleClick(letter)}>
              {letter}
            </li>
          )}
        </ul>

        </p>
        <div checkMe={this.checkMe}></div>
      </div>
    );
  }
}

export default Hello;
