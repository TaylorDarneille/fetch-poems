import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import TitleList from './TitleList';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <h1>Click a poet to see a list of their poems:</h1>
          <p><Link to="/shakespeare">Shakespeare</Link></p>
          <p><Link to="/dickinson">Dickinson</Link></p>
          <Route exact path="/shakespeare" component={() => <TitleList author="shakespeare"/>} />
          <Route exact path="/dickinson" component={() => <TitleList author="dickinson" />} />
        </div>
      </Router>
    );
  }
}

export default App;
