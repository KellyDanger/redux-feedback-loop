import React, {Component} from 'react';
import {connect} from 'react-redux';

class SupportForm extends Component {
state = {
  support: 0
}
//set localstate to input value
handleSupportChange = (event) => {
  this.setState({
    support: event.target.value
  });
}
//on click send input value to redux store.
handleSubmit = (event) => {
  if(this.state.support > 0 && this.state.support < 6) {
    event.preventDefault();
    this.props.dispatch({
      type: 'ADD_SUPPORT',
      payload: this.state.support
    })
    this.props.history.push('/comment');
  } else {
    alert("Please enter a numerical value between 1 and 5")
  }
}
  render(){
    return(
      <form>
        <h1>How well are you being supported on a scale of 1 to 5?</h1>
        <input autoFocus id="supportInput" type="number" onChange={this.handleSupportChange} placeholder="required"/>
        <button onClick={this.handleSubmit}>Next</button>
      </form>
    )
  }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
  });

export default connect(putReduxStateOnProps)(SupportForm);