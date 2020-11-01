import React, {Component} from 'react';

class SuccessPage extends Component {
handleClick = () => {
  // on click, this redirects the user back to the homepage to start the survey over again
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