import {
    GETTING_SINGLE_INFLUENCER,
    GOTTEN_SINGLE_INFLUENCER,
  
   
  } from '../actions/types';

  const initialState = {
    influencer: [],
    loading: false,
    type : null
  };

  export default function(state = initialState, action) {
    switch (action.type) {


        case GETTING_SINGLE_INFLUENCER:
            return {
              ...state,
              loading: true,
              type : GETTING_SINGLE_INFLUENCER
            };
      case GOTTEN_SINGLE_INFLUENCER:
        //   case USERS_LOADED:
        return {
          ...state,
          influencer: action.payload,
          loading: false,
          type : GOTTEN_SINGLE_INFLUENCER
        };




     
      default:
        return state;
    }
  }