import axios from 'axios';
import React, {Component} from 'react';
import {connect} from 'react-redux';

class SuccessPage extends Component {
handleClick = () => {
  this.props.history.push('/');
}

  render(){
    return(
      <>
      <h1>Thank You!</h1>
      <button onClick={this.handleClick}>Leave New Feedback</button>
      </>
    )
  }
}



export default SuccessPage;