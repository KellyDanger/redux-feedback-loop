import axios from 'axios';
import React, {Component} from 'react';
import {connect} from 'react-redux';

class ReviewPage extends Component {

  render(){
    console.log('REDUX STATE', this.props.reduxState);
    
    return(
      <ul>
        {/* {JSON.stringify(this.props.reduxState)} */}
        <li>Feelings: {this.props.reduxState.feelingsReducer.feelings}</li>
        <li>Understanding: {this.props.reduxState.understandingReducer.understanding}</li>
        <li>Support: {this.props.reduxState.supportReducer.support}</li>
        <li>Comment: {this.props.reduxState.commentReducer.comment}</li>
      </ul>
    )
  }
}


const putReduxStateOnProps = (reduxState) => ({
  reduxState
});

export default connect(putReduxStateOnProps)(ReviewPage);