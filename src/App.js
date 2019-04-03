import React, { Component } from 'react';
import Header from './components/Header/header';
import About from './components/About/about';
import Resume from './components/Resume/resume';
import Projects from  './components/Projects/projects';
import Portfolio from './components/Portfolio/portfolio';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';
import resumeData from './resumeData';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData}/>
        <About />
        <Resume />
        <Projects />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
