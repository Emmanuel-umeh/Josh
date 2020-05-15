import axios from 'axios';
import { returnErrors } from './errorActions';
import {NOTIFICATION_LOADED} from './types'



export const getNotifications = (ownerID) => dispatch => {
    // dispatch(setCampaignsLoading());
    axios
      .get(`/api/campaign/notifications/${ownerID}`)
      .then(res =>{

        // console.log("notifications ", res.data)
        dispatch({
          type: NOTIFICATION_LOADED,
          payload: res.data
        })
      }
      
      )
      // .then(
      //   dispatch(setUsersDoneLoading())
      // )
  
      .catch(err =>
        dispatch(returnErrors(err.response.data, err.response.status))
      );
  };
  
