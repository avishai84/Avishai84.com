import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './Header';
import Footer from './Footer';
import ContentWrapper from './ContentWrapper';
import {ThemeContext, themes} from './ThemeContext';
import ThemedButtons from './ThemeButtons';
import {BrowserRouter} from 'react-router-dom';


function Toolbar(props) {
  return (
    <ThemedButtons onClick={props.changeTheme}>
      Change Theme
    </ThemedButtons>
  );
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      theme: themes.pink,
    };

    this.toggleTheme = () => {
      this.setState(state => ({
        theme:

          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };
  }

  render() {
    return (
      <div className="App_wrapper">
      <Header/>
      <ThemeContext.Provider value={this.state.theme}>
          <Toolbar changeTheme={this.toggleTheme} />
        </ThemeContext.Provider>
        <section>
          <ThemedButtons />
        </section>
        <BrowserRouter>
          <ContentWrapper/>
        </BrowserRouter>
      <Footer/>
      </div>
    );
  }
}

export default App;
