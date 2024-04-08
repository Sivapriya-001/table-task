// const FETCH_DATA = "http://fe-test.dev.rampnow.io:8000/api/books?page=1&limit=10"

// export const fetchDataAction = () => ({
//     type: FETCH_DATA
//   });

  // actions.js
  
// export const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
// export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
// export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

// // Action creators
// export const fetchDataRequest = () => ({
//   type: FETCH_DATA_REQUEST
// });

// export const fetchDataSuccess = (data) => ({
//   type: FETCH_DATA_SUCCESS,
//   payload: data
// });

// export const fetchDataFailure = (error) => ({
//   type: FETCH_DATA_FAILURE,
//   payload: error
// });

// export const fetchData = () => {
//   return async (dispatch) => {
//     dispatch(fetchDataRequest());
//     try {
//       const response = await fetch("http://fe-test.dev.rampnow.io:8000/api/books?page=1&limit=10");
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const data = await response.json();
//       dispatch(fetchDataSuccess(data.data));
//     } catch (error) {
//       dispatch(fetchDataFailure(error));
//     }
//   };
// };
// action creator
export const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";


export const fetchData = () => {
    return async (dispatch) => {
      dispatch({ type: 'FETCH_DATA_REQUEST' });
  
      try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        dispatch({ type: 'FETCH_DATA_SUCCESS', payload: data });
      } catch (error) {
        dispatch({ type: 'FETCH_DATA_FAILURE', error: error.message });
      }
    };
  };
  