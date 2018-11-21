import React, { Component } from 'react';
import './Contacts.scss';

const emailPage = { title: 'keep in touch',
                    text : 'email avishai',
                    btnEmail: 'send email' };


class Contacts extends Component {


  render() {
    console.log(this.props);
    return (
      <div className="contacts">
        <section>
          <div className="container">
            <h2>{emailPage.title.toUpperCase()}</h2>
            <div className="well">
              <p className="lead">{emailPage.text.toLowerCase()}</p> 
              <p>
                <a className="btn btn-success" href="mailto:avishai@avishai84.com?Subject=Hello Avishai">
                {emailPage.btnEmail.toLowerCase()}
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Contacts;
