import {
    // GET_USERS,
    // USERS_LOADING,
    GET_PARTICULAR_CAMPAIGNS,
    GETTING_PARTICULAR_CAMPAIGN,
    DELETED_CAMPAIGN
    // USERS_LOADED
  } from "../actions/types";



  const initialState = {
    singleCampaigns:[],
    loading: false,
    type : null
  };







  export default function(state = initialState, action) {
    switch (action.type) {

      case GET_PARTICULAR_CAMPAIGNS:
        return {
          ...state,
          singleCampaigns: action.payload,
          loading: false,
          type : GET_PARTICULAR_CAMPAIGNS
        };

      case GETTING_PARTICULAR_CAMPAIGN:
        return {
          // campaigns: action.payload,
          loading: true,
          type : GETTING_PARTICULAR_CAMPAIGN
        };
        case DELETED_CAMPAIGN:
          return {
            ...state,
            singleCampaigns: state.singleCampaigns.filter(campaign => campaign._id !== action.payload)
            ,
          type : DELETED_CAMPAIGN
          };

      default:
        return state;
    }
  }
