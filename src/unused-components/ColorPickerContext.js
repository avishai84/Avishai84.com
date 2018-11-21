import React, { Component } from 'react';
import PropTypes from 'prop-types';
import colorPickerArray from './colorPickerArray.json'

const colors = colorPickerArray.colors;

function UserName(props){
  return(
    <UserName userColor={userColor}/>
  );
}

function OvalColor(props){
  return(
    <OvalColor userColor={userColor}/>
  );
}

function OvalColor(props){
  return(
    <PageLayout userColor={userColor}/>
  );
}

function ColorsA(props){
  const colors = props.colors;
  const userColor = (
    <UserName color={colors.color}>
      <OvalColor colors={color} />
    </UserName>
  );

  return(
    <PageLayout userColor={userColor}/>
  );

}

class ColorPickerContx extends Component{

  render() {
    return (
      <div className="colorPicker">
        <ColorsA/>
      </div>
    );
  }
}



export default ColorPickerContx;
