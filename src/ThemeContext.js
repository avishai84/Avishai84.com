import React, { Component } from 'react';
export const themes = {
  light: {
    foreground: '#fede55',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffe',
    background: '#333',
  },
  pink: {
    foreground: '#333',
    background: 'pink',
  }
};

export const ThemeContext = React.createContext(
  themes.pink // default value
);