// import { combineReducers } from 'redux';
// import { fetchDataAction } from './action'; // Assuming you have fetchDataReducer defined in action.js

// const rootReducer = combineReducers({
//   fetchData: fetchDataAction
// });

// export default rootReducer;
// reducers.js
import { combineReducers } from 'redux';
import {
    FETCH_DATA_FAILURE,
    FETCH_DATA_REQUEST,
    FETCH_DATA_SUCCESS
} from './action';

const initialState = {
  userData: [],
  loading: false,
  error: null
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        userData: action.payload,
        error: null
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  data: dataReducer
});

export default rootReducer;
