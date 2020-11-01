import axios from 'axios';
import React, {Component} from 'react';
import {connect} from 'react-redux';

class ReviewPage extends Component {
  state = {
    feedbackData:{
      feeling: this.props.reduxState.feelingsReducer.feeling,
      understanding: this.props.reduxState.understandingReducer.understanding,
      support: this.props.reduxState.supportReducer.support,
      comments: this.props.reduxState.commentReducer.comment
    }
  }

  handleClick = (event) => {
    // event.preventDefault();
    // console.log('redux state is', this.state.feedbackData);
    axios.post('/feedback', this.state.feedbackData).then((response) => {
      this.props.history.push('/success');
      console.log('handleClick POST', response.data);
    }).catch((error) => {
      console.log('error in POST', error);
    });  
  }

  render(){
    console.log('REDUX STATE', this.props.reduxState);
    
    return(
      <ul>
        <h1>Review Your Feedback</h1>
        <li>Feelings: {this.props.reduxState.feelingsReducer.feelings}</li>
        <li>Understanding: {this.props.reduxState.understandingReducer.understanding}</li>
        <li>Support: {this.props.reduxState.supportReducer.support}</li>
        <li>Comment: {this.props.reduxState.commentReducer.comment}</li>
        <button onClick={this.handleClick}>SUBMIT</button>
      </ul>
    )
  }
}


const putReduxStateOnProps = (reduxState) => ({
  reduxState
});

export default connect(putReduxStateOnProps)(ReviewPage);