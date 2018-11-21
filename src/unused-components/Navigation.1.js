import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Navigation.scss';
import navigation from './navigation.json';
import {BrowserRouter as Router, NavLink} from 'react-router-dom';
 const nav = navigation.nav;


class Navigation extends Component {
  constructor(props){
    super(props);
    this.clickToShow = this.clickToShow.bind(this);
    this.state={
      nav:'',
      show:''
    };
  }

  clickToShow(e){
    const toggl = document.querySelector('.navigation .navbar-collapse');
      this.setState ({
        show: toggl.classList.toggle('show')
      });
    }

 

  componentDidMount(){
    const navi = document.querySelector('.navigation .navbar-toggler');
          navi.addEventListener('click', this.clickToShow);

  }

  render() {
    return (
      <Router>
        <div className="navigation">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="container">
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  {nav.map((item) => <li className="nav-item" key={item.id}>
                    <NavLink to={item.href} activeClassName="active" title={item.title}>{item.name}</NavLink>
                  </li>)}
                </ul>
              </div>
            </div>
          </nav>
        </div> 
      </Router>
    );
  }
}

export default Navigation;
