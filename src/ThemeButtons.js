import React, { Component } from 'react';
import {ThemeContext} from './ThemeContext';

function ThemedButtons(props) {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <button
          {...props}
          style={{backgroundColor: theme.background, color: theme.foreground}}
        />
      )}
    </ThemeContext.Consumer>
  );
}
export default ThemedButtons;