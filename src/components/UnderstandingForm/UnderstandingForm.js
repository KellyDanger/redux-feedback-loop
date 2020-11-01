import React, {Component} from 'react';
import {connect} from 'react-redux';

class UnderstandingForm extends Component {
state = {
  understanding: 0
}
//set localstate to input value
handleUnderstandingChange = (event) => {
  this.setState({
    understanding: event.target.value
  });
}
//on click send input to redux store
handleSubmit = (event) => {
  if(this.state.understanding > 0 && this.state.understanding < 6 ) {
    event.preventDefault();
    this.props.dispatch({
      type: 'ADD_UNDERSTANDING',
      payload: this.state.understanding
    })
    this.props.history.push('/support');
  } else {
    alert("Please enter a numerical value between 1 and 5")
  }
}
  render(){
    return(
      <form>
        <h2>How well are you understanding the content on a scale of 1 to 5?</h2>
        <input autoFocus id="understandingInput" type="number" onChange={this.handleUnderstandingChange} placeholder="required"/>
        <button onClick={this.handleSubmit}>Next</button>
      </form>
    )
  }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
  });

export default connect(putReduxStateOnProps)(UnderstandingForm);