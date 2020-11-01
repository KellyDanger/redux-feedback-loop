import axios from 'axios';
import React, {Component} from 'react';
import {connect} from 'react-redux';

class ReviewPage extends Component {

  handleClick = () => {
    console.log('clicked');
    
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