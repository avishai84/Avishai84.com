import React, { Component } from 'react';
import './Library.scss';
import SVGinDepth from './SVGinDepth';

class Library extends Component {

  render() {
    return (
      <div className="library">
        <SVGinDepth/>
      </div>
    );
  }
}

export default Library;
