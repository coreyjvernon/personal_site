import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/IMG_0565.png" alt />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>
              {
                resumeData.aboutme
              }
            </p>
            <div className="row">
              <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                  <span>
                    Corey Vernon
                  </span>
                  <br/>
                  <span>
                    (305) 753-1302
                  </span>
                  <br/>
                  <span>
                    {resumeData.email}
                  </span>
                  <br/>
                  <span>
                    {resumeData.website}
                  </span>
                  <br/>
                  <span>
                    {resumeData.address}
                </span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href="https://zety.com/mycv/coreyvernon" className="button"><i className="fa fa-download" />Download Resume</a>
                </p>
              </div>
            </div> 
          </div> 
        </div>
      </section> 
      </React.Fragment>
    );
  }
}