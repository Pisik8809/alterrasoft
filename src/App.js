import React, { Component } from 'react';
import AllInOne from './components/all-in-one';
import PortfolioItem from './components/PortfolioItem';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { faObjectGroup, faFolderOpen, faFile, faTv, faPalette, faDesktop, faWrench, faCog, faTag} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faObjectGroup, faFolderOpen, faFile, faTv, faPalette, faDesktop, faWrench, faCog, faTag);

class App extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
    render() {
      return (
        <Router>
          <Switch>
            <Route path="/" exact={true} component={AllInOne}/>
            <Route path="/article/:number" component={PortfolioItem}/>
          </Switch>
        </Router>
      );
  }
}

export default App;
