import {
  // GET_USERS,
  // USERS_LOADING,
  CAMPAIGNS_LOADING,
  CAMPAIGNS_LOADED,
  CAMPAIGN_LOADING,
  CAMPAIGN_LOADED,
  CAMPAIGN_CREATED,
  CREATING_CAMPAIGN,
  DELETED_CAMPAIGN,
  TAKING_JOB,
  TOOK_JOB,
  INFLUENCERS_LOADED,
  CAMPAIGN_UPDATED,
  NOTIFICATION_LOADED
  // USERS_LOADED
} from "../actions/types";

const initialState = {
  campaigns: [],
  camp : '',
  influencers : [],
  notifications : [],
  loading: false,
  type : null,
  tookJob : false
};

export default function(state = initialState, action) {
  switch (action.type) {

    case NOTIFICATION_LOADED:
      return {
        ...state,
        notifications : action.payload,
       type : NOTIFICATION_LOADED
      };
    case CAMPAIGNS_LOADED:
      return {
        ...state,
        campaigns: action.payload,
        loading: false
      };

    case CAMPAIGNS_LOADING:
      return {
        // campaigns: action.payload,
        loading: true
      };


      // case GET_SINGLE_CAMPAIGN:
      //   return {
      //     ...state,
      //     campaigns: action.payload,
      //     loading: false
      //   }
      case CAMPAIGN_LOADING:
        return {
          campaigns: state.campaigns,
          loading: true,
          type : CAMPAIGN_LOADING
        };

        case CAMPAIGN_LOADED:
          return {
            ...state,
            camp: action.payload,
            loading: false,
            type : CAMPAIGN_LOADED
          };

          case CREATING_CAMPAIGN:
            return {
              campaigns: state.campaigns,
              loading: true
              ,
            type : CREATING_CAMPAIGN
            };

            case CAMPAIGN_CREATED:
              return {
                ...state,
                camp: action.payload,
                loading: false
                ,
                type : CAMPAIGN_CREATED
              };



                          // case DELETED_CAMPAIGN:
                          //   return {
                          //     ...state,
                          //     campaigns: state.particularCampaign.filter(campaign => campaign._id !== action.payload)
                          //   };
      case TAKING_JOB:
        return {
             // campaigns: action.payload,
        loading: true
        };

        case TOOK_JOB:
          return {
            ...state,
            camp : state.camp,
            tookJob: action.payload
            // campaigns: state.campaigns,
            // loading: false
          };

        
        case INFLUENCERS_LOADED:
          return {
            state,
            influencers : action.payload
            ,
            type : INFLUENCERS_LOADED
            // campaigns: state.campaigns,
            // loading: false
          };



          case CAMPAIGN_UPDATED:
            return {
              ...state,
             type : CAMPAIGN_UPDATED
            };

          
    default:
      return state;
  }
}
