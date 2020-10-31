import axios from 'axios';
import React, {Component} from 'react';
import {connect} from 'react-redux';

class ReviewPage extends Component {

  render(){
    console.log('REDUX STATE', this.props.reduxState);
    
    return(
      <ul>
        <li>Feelings: {this.props.reduxState.feelingsReducer.feelings}</li>
      </ul>
    )
  }
}


const putReduxStateOnProps = (reduxState) => ({
  reduxState
});

export default connect(putReduxStateOnProps)(ReviewPage);