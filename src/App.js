import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/header';
import Slider from './components/slider';
import About from './components/about';
import Meters from './components/meters';
import Team from './components/team';
import Technologies from './components/technologies';
import Portfolio from './components/portfolio';
import Blog from './components/blog';
import Form from './components/form';
import CallToAction from './components/call-to-action';
import Footer from './components/footer';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }



    render() {
      return (
          <div className="App">
              <img className={"alterra-logo"} src={logo} alt={"logo"}/>
              <Header/>
              <Slider/>
              <About/>
              <Meters/>
              Alterrasoft!
              <Team/>
              <Technologies/>
              <Portfolio/>
              <Blog/>
              <Form/>
              <CallToAction/>
              <Footer/>
          </div>
      );
  }
}

export default App;
