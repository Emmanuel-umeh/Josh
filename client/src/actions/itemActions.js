
import axios from 'axios';
import { returnErrors } from './errorActions';


import {
// when all ITEM are loading
ITEMS_LOADING,
ITEMS_LOADED
} from './types';



  export const setItemsLoading = () => {
    return {
      type: ITEMS_LOADING
    };
  };

  // get all campaigns




export const getItems = () => dispatch => {
  dispatch(setItemsLoading());
  axios
    .get('/api/items')
    .then(res =>
      dispatch({
        type: ITEMS_LOADED,
        payload: res.data
      })
    )
    // .then(
    //   dispatch(setUsersDoneLoading())
    // )

    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};










