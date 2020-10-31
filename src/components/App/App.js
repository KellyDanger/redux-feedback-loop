import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
//styling
import './App.css';

//components
import FeelingsForm from '../FeelingsForm/FeelingsForm';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
        <Router>
          <Route exact path = "/feelings" component={FeelingsForm}/>
        </Router>
       
      </div>
    );
  }
}

export default App;
