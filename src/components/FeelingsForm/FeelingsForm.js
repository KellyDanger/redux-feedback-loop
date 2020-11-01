
import React, {Component} from 'react';
import {connect} from 'react-redux';


class FeelingsForm extends Component {
state = {
  feeling: 0
}
handleFeelingChange = (event) => {
  this.setState({
    feeling: event.target.value
  });
}
//on submit, send data to redux store and navigate to understanding page
handleSubmit = (event) => {
  if(this.state.feeling > 0 && this.state.feeling < 6) {
    event.preventDefault();
    this.props.dispatch({
      type: 'ADD_FEELING',
      payload: this.state
    })
    this.props.history.push('/understanding');
  } else {
    alert("Please enter a numerical value between 1 and 5")
  }
}
  render(){
    return(
      <form>
        <h1>How are you feeling today on a scale of 1 to 5?</h1>
        <input autoFocus id="feelingsInput" type="number" onChange={this.handleFeelingChange} placeholder="required"/>
        <button onClick={this.handleSubmit}>Next</button>
      </form>
    )
  }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
  });

export default connect(putReduxStateOnProps)(FeelingsForm);