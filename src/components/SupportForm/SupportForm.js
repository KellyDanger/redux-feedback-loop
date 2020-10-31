
import React, {Component} from 'react';
import {connect} from 'react-redux';


class SupportForm extends Component {
state = {
  support: 0
}

handleSupportChange = (event) => {
  this.setState({
    support: event.target.value
  });
}

handleSubmit = (event) => {
  if(this.state.support > 0 ) {
    event.preventDefault();
    console.log('clicked support');
    console.log(this.state.support, 'SUPPORT!!!');
    this.props.dispatch({
      type: 'ADD_SUPPORT',
      payload: this.state
    })
    this.props.history.push('/comments');
  } else {
    alert("Please enter a numerical value")
  }
}

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="supportInput">Support?</label>
        <input id="supportInput" type="number" onChange={this.handleSupportChange}/>
        <button onClick={this.handleSubmit}>Next</button>
      </form>
    )
  }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
  });

export default connect(putReduxStateOnProps)(SupportForm);