
import React, {Component} from 'react';
import {connect} from 'react-redux';


class FeelingsForm extends Component {
state = {
  feelings: 0
}

handleFeelingChange = (event) => {
  this.setState({
    feelings: event.target.value
  });
}

handleSubmit = (event) => {
  if(this.state.feelings > 0) {
    event.preventDefault();
    console.log('clicked feelings');
    console.log(this.state.feeling, 'Feelings!!!');
    this.props.dispatch({
      type: 'ADD_FEELING',
      payload: this.state
    })
    this.props.history.push('/understanding');
  } else{
    alert("Please enter a numerical value")
  }
}

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <h1>How are you feeling today?</h1>
        <label htmlFor="feelingsInput">Feeling?</label>
        <input autoFocus id="feelingsInput" type="number" onChange={this.handleFeelingChange}/>
        <button onClick={this.handleSubmit}>Next</button>
      </form>
    )
  }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
  });

export default connect(putReduxStateOnProps)(FeelingsForm);