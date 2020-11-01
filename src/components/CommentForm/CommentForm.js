
import React, {Component} from 'react';
import {connect} from 'react-redux';


class CommentForm extends Component {
state = {
  comment: ''
}

handleCommentChange = (event) => {
  this.setState({
    comment: event.target.value
  });
}

handleSubmit = (event) => {
  event.preventDefault();
  console.log('clicked comment');
  console.log(this.state.support, 'COMMENT!!!');
  this.props.dispatch({
    type: 'ADD_COMMENT',
    payload: this.state
  })
  this.props.history.push('/review');
}

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <h1>Any comments you want to leave?</h1>
        <label htmlFor="commentInput">Comment?</label>
        <input autoFocus id="commentInput" type="text" onChange={this.handleCommentChange}/>
        <button onClick={this.handleSubmit}>Next</button>
      </form>
    )
  }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
  });

export default connect(putReduxStateOnProps)(CommentForm);