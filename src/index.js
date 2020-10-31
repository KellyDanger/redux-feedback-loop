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
  feelings: 0
}

const feelingsReducer = (state = feedbackData.feelings, action) => {
  if(action.type === 'ADD_FEELING') {
    console.log('in feelingsReducer', action, 'state', state);
    return[action.payload]
  }
return state;
};


const storeInstance = createStore(
  combineReducers({
    feelingsReducer
  }),
  applyMiddleware(logger)
);


ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));