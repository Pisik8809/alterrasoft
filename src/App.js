import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/header';
import SimpleSlider from './components/slider';
import About from './components/about';
import Meters from './components/meters';
//import Team from './components/team';
import Technologies from './components/technologies';
import Portfolio from './components/portfolio';
import Blog from './components/blog';
import Form from './components/form';
import CallToAction from './components/call-to-action';
import Footer from './components/footer';
import './App.css';
import { faObjectGroup, faFolderOpen, faFile, faTv, faPalette, faDesktop, faWrench, faCog} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faObjectGroup, faFolderOpen, faFile, faTv, faPalette, faDesktop, faWrench, faCog);

class App extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }



    render() {
      return (
          <div className="App">
              <header className={"alterra-header"}><img className={"alterra-logo"} src={logo} alt={"logo"}/>
              <Header/>
              </header>
              <SimpleSlider/>
              <About/>
              <Meters/>
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
