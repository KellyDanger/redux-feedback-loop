import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

//Redux
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger'


const feedbackData = {
  feelings: 0,
  understanding: 0,
  support: 0,
  comment: ''
}

const feelingsReducer = (state = feedbackData.feelings, action) => {
  if(action.type === 'ADD_FEELING') {
    console.log('in feelingsReducer', state);
    return action.payload
  }
return state;
};

const understandingReducer = (state = feedbackData.understanding, action) => {
  if(action.type === 'ADD_UNDERSTANDING') {
    console.log('in UNDERSTANDING  Reducer', state);
    return action.payload
  }
return state;
};

const supportReducer = (state = feedbackData.support, action) => {
  if(action.type === 'ADD_SUPPORT') {
    console.log('in SUPPORT  Reducer', state);
    return action.payload 
  }
return state;
};

const commentReducer = (state = feedbackData.comment, action) => {
  if(action.type === 'ADD_COMMENT') {
    console.log('in COMMENT  Reducer', state);
    return action.payload 
  }
return state;
};

const storeInstance = createStore(
  combineReducers({
    feelingsReducer,
    understandingReducer,
    supportReducer,
    commentReducer
  }),
  applyMiddleware(logger)
);


ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));