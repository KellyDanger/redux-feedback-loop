import axios from 'axios';
import React, {Component} from 'react';
import {connect} from 'react-redux';

class FeelingsForm extends Component {
state = {
  feeling: 0
}

handleFeelingChange = () => {
  console.log('Feelings!!!');
  
}

handleSubmit = () => {
  console.log('clicked feelings');
}

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <lable htmlFor="feelingsInput">Feeling?</lable>
        <input type="number" onChange={this.handleFeelingChange}/>
        <button onClick={this.handleSubmit}>Next</button>
      </form>
    )
  }
}



export default FeelingsForm;