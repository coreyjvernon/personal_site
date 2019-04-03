import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="projects">
        <div className="row">
          <div className="two columns header-col">
            <h1><span>Projects</span></h1>
          </div>
        </div>
      </section> 
      </React.Fragment>
    );
  }
}