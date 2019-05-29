import React from 'react';
import AllInOne from './components/all-in-one';
import PortfolioItem from './components/PortfolioItem';
import BlogItem from './components/BlogItem';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { faObjectGroup, faFolderOpen, faFile, faTv, faPalette, faDesktop, faWrench, faCog, faTag, faBars} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faObjectGroup, faFolderOpen, faFile, faTv, faPalette, faDesktop, faWrench, faCog, faTag, faBars);

const App = () => {
      return (
        <Router>
          <Switch>
            <Route path="/" exact={true} component={AllInOne}/>
            <Route path="/portfolio/:number" component={PortfolioItem}/>
            <Route path="/article/:number" component={BlogItem}/>
          </Switch>
        </Router>
      );
}

export default App;
