import React, { Component } from 'react';
import Header from './header';
import SimpleSlider from './slider';
import About from './about';
import Meters from './meters';
//import Team from './components/team';
//import { BrowserRouter as Router, Route} from "react-router-dom";
import Technologies from './technologies';
import Portfolio from './portfolio';
import Blog from './blog';
import Form from './form';
import CallToAction from './call-to-action';
import Footer from './footer';
import ScrollUpButton from "react-scroll-up-button";
//import PortfolioItem from './PortfolioItem';

class AllInOne extends Component {
    constructor(props){
      super(props);
      this.state = {
  
      }
    }
  
  
  
      render() {
          /*if(this.props.location.pathname !== "/") {
              return (
                <Router>
                  <Route path="/:id" component={PortfolioItem}/>
              </Router>
              );
          }
          else {*/
        return (
            <div className="App" id="home">
                <header className={"alterra-header"}><Header/></header>
                <SimpleSlider/>
                <About/>
                <Meters/>
                <Technologies/>
                <Portfolio/>
                <Blog/>
                <Form/>
                <CallToAction/>
                <ScrollUpButton />
                <Footer/>
            </div>
        );
    }
/*}*/
    componentDidMount() {
        console.log(this.props);
    }
  }
//<Route path="/article:id" component={PortfolioItem}/>
export default AllInOne;