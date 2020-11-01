import React, {Component} from 'react';
import {connect} from 'react-redux';


class CommentForm extends Component {
state = {
  comment: ''
}
//set value from input
handleCommentChange = (event) => {
  this.setState({
    comment: event.target.value
  });
}
//on clicking submit, send data to redux store and navigate to review page
handleSubmit = (event) => {
  event.preventDefault();
  this.props.dispatch({
    type: 'ADD_COMMENT',
    payload: this.state
  })
  this.props.history.push('/review');
}
  render(){
    return(
      <form>
        <h1>Any comments you want to leave?</h1>
        <input autoFocus id="commentInput" type="text" onChange={this.handleCommentChange} placeholder="optional"/>
        <button onClick={this.handleSubmit}>Next</button>
      </form>
    )
  }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
  });

export default connect(putReduxStateOnProps)(CommentForm);