import React, { Component } from 'react';
import navigation from './navigation.json';
import './Navigation.scss';
import {BrowserRouter as Router, NavLink} from 'react-router-dom';
import NavigationComponents from './NavigationComponents';

const nav = navigation.nav;

let findCollapse = '';


class Navigation extends Component {
  constructor(props){
    super(props);
    this.state = {
      height : '0',
      changeKlass: findCollapse
    };
    this.toggleNav = this.toggleNav.bind(this);
  }

toggleNav(e){

const collaped = e.target.parentNode.nextSibling.classList.contains('collapse') ? e.target.parentNode.nextSibling.classList.remove('collapse') : e.target.parentNode.nextSibling.classList.add('collapse');

    this.setState({
      height : 'auto',
      changeKlass : collaped,
    });
  }

  render() {
    return (
      <Router>
        <main>
          <div className="nav-wrapper">
            <header>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <span></span>
              <button onClick={this.toggleNav} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    {nav.map((item) => <li className="nav-item" key={item.id}>
                      <NavLink exact to={item.href} className="nav-link" key={item.id}activeClassName="active" title={item.title}>{item.name}</NavLink>
                    </li>)}
                  </ul>
                </div>
              </nav>
            </header>
            <NavigationComponents/>
          </div>
        </main>
      </Router>
    );
  }
}

export default Navigation;
