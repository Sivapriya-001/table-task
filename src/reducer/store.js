// // store.js
// import { createStore } from 'redux';
// import reducer from './reducer'; // assuming you have combineReducers

// const store = createStore(reducer); // create your Redux store

// export default store;
// store.js
import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(reducer);

export default store;


