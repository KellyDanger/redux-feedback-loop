import React, { Component } from 'react';
// import axios from 'axios';
import {connect} from 'react-redux';
import {HashRouter as Router, Route} from 'react-router-dom';
//styling
import './App.css';

//components
import FeelingsForm from '../FeelingsForm/FeelingsForm';
import UnderstandingForm from '../UnderstandingForm/UnderstandingForm';
import SupportForm from '../SupportForm/SupportForm';
import CommentForm from '../CommentForm/CommentForm';
import ReviewPage from '../ReviewPage/ReviewPage';
import SuccessPage from '../SuccessPage/SuccessPage';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
        {/* routes to each form component */}
        <Router>
          <div className="forms">
          <Route exact path = "/" component={FeelingsForm}/>
          <Route path = "/understanding" component={UnderstandingForm}/>
          <Route path = "/support" component={SupportForm}/>
          <Route path = "/comment" component={CommentForm}/>
          </div>
          <Route path="/review" component={ReviewPage}/>
          <Route path="/success" component={SuccessPage}/>
        </Router>
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState
});

export default connect(putReduxStateOnProps)(App);
