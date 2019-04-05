import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Lets work!
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>
                  <a href="https://www.linkedin.com/in/coreyjvernon/">Click Here to contact me via LinkedIn</a>
                </h4>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}
