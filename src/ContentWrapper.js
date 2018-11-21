import React, { Component } from 'react';
import './ContentWrapper.scss';
import ColorPicker from './ColorPicker';


class ContentWrapper extends Component {

  render() {
    return (
        <div className="contentWrapper container">
          <ColorPicker/>
        </div>
    );
  }
}

export default ContentWrapper;
