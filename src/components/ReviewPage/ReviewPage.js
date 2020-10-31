import axios from 'axios';
import React, {Component} from 'react';
import {connect} from 'react-redux';

class ReviewPage extends Component {

  render(){
    console.log('REDUX STATE', this.props.reduxState);
    
    return(
      <ul>
        {JSON.stringify(this.props.reduxState)}
      </ul>
    )
  }
}


const putReduxStateOnProps = (reduxState) => ({
  reduxState
});

export default connect(putReduxStateOnProps)(ReviewPage);