
import React, {Component} from 'react';
import {connect} from 'react-redux';


class UnderstandingForm extends Component {
state = {
  understanding: 0
}

handleUnderstandingChange = (event) => {
  this.setState({
    understanding: event.target.value
  });
}

handleSubmit = (event) => {
  if(this.state.understanding > 0 ) {
    event.preventDefault();
    console.log('clicked understanding');
    console.log(this.state.understanding, 'Understanding!!!');
    this.props.dispatch({
      type: 'ADD_UNDERSTANDING',
      payload: this.state
    })
    this.props.history.push('/support');
  } else {
    alert("Please enter a numerical value")
  }
}

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="understandingInput">Understanding?</label>
        <input id="understandingInput" type="number" onChange={this.handleUnderstandingChange}/>
        <button onClick={this.handleSubmit}>Next</button>
      </form>
    )
  }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
  });

export default connect(putReduxStateOnProps)(UnderstandingForm);