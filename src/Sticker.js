import React, { Component } from 'react';
import './Sticker.scss';

const data_options = {
  link : 'https://github.com/avishai84',
  localStorageKey : 'one_sticky',
  localStorageVal : 'one_sticky_present'
};


class Sticker extends Component {
  constructor(props) {
    super(props);
    this.close = this.close.bind(this);
    this.stickySeen = this.stickySeen.bind(this);
    this.state = {
      closeX: true,
      isStickyWasSeen: false
    };
  }

  componentDidMount() {

    const isStickerInLocalStrg = localStorage.getItem(data_options.localStorageKey);
    // Check if localStorage value exist
    if (isStickerInLocalStrg) {
        this.stickySeen();
      // if this.state is false, setState to make them true and not to show again
      // When true, the sticker should remain hidden upon page refresh.
      if (!this.state.isStickyWasSeen) {
        this.setState(prevState => ({
          isStickyWasSeen: true,
          closeX: false
        }));
      }
    }

  }

  componentDidUpdate(){
    if(!this.state.closeX){
      document.querySelector('.sticker button').remove();
    }
  }


  close() {
    this.setState({
      isStickyWasSeen: true,
      closeX: false,
      counter: +1
    });
    localStorage.setItem(data_options.localStorageKey, data_options.localStorageVal);
    document.querySelector('.sticker').firstElementChild.classList.add('fadeOut');
    setTimeout(function(){
      document.querySelector('.sticker').firstElementChild.classList.add('sideWall');
      document.querySelector('.sticker .fadeOut').classList.remove('fadeOut');
    
    },490);
  }

  stickySeen(){
    document.querySelector('.sticker').firstElementChild.classList.add('sideWall');
  }

  render() {

    return (
    <div className="sticker">
        <div className="sticky_container">
            <button
            onClick={this.close}
            >✕</button>
          
            <a href={data_options.link} target="_blank" rel="noopener noreferrer"><span className="icon"></span><small>Check out my github</small></a>
        </div>
    </div>
    );
  }
}

export default Sticker;
