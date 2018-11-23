import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';
import Header from './Header';
import Footer from './Footer';
import ContentWrapper from './ContentWrapper';


class App extends Component {
    render() {
      return (
        <div className="App_wrapper">
          <Header/>
          <ContentWrapper/>
          <Footer/>
        </div>
      );
    }
  }

export default App;
