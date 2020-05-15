
import axios from 'axios';
import { returnErrors } from './errorActions';


import {
  GETTING_SINGLE_INFLUENCER,
  GOTTEN_SINGLE_INFLUENCER
  // USERS_LOADED
} from './types';


export const getSingleInfluencer = (id) => dispatch => {
    dispatch({
      type : GETTING_SINGLE_INFLUENCER
    });
    axios
      .get(`/api/users/influencer/${id}`)
      .then(res =>
        dispatch({
          type: GOTTEN_SINGLE_INFLUENCER,
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
  

 