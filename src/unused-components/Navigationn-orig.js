import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Navigation.scss';
import navigation from './navigation.json';

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
      <div className="navigation">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="container">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                {nav.map((item) => <li className="nav-item" key={item.id}><a href={item.href} title={item.title}>{item.name}</a></li>)}
              </ul>
            </div>
          </div>
        </nav>
      </div>  
    );
  }
}

export default Navigation;
