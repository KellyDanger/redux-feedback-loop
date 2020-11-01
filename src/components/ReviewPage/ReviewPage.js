import axios from 'axios';
import React, {Component} from 'react';
import {connect} from 'react-redux';

class ReviewPage extends Component {
  state = {
    feedbackData:{
      feeling: this.props.reduxState.feelingsReducer,
      understanding: this.props.reduxState.understandingReducer,
      support: this.props.reduxState.supportReducer,
      comments: this.props.reduxState.commentReducer
    }
  }
  handleClick = (event) => {
    //on click, send data to server via axios post req
    axios.post('/feedback', this.state.feedbackData).then((response) => {
      this.props.history.push('/success');
    }).catch((error) => {
      console.log('error in POST', error);
    });  
  }
  render(){
    return(
      <ul>
        <h1>Review Your Feedback</h1>
        <li>Feelings: {this.props.reduxState.feelingsReducer}</li>
        <li>Understanding: {this.props.reduxState.understandingReducer}</li>
        <li>Support: {this.props.reduxState.supportReducer}</li>
        <li>Comment: {this.props.reduxState.commentReducer}</li>
        <button onClick={this.handleClick}>SUBMIT</button>
      </ul>
    )
  }
}
const putReduxStateOnProps = (reduxState) => ({
  reduxState
});

export default connect(putReduxStateOnProps)(ReviewPage);