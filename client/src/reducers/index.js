import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import usersReducer from './usersReducer';
import campaignReducer from './campaignReducer';
import particularCampaignReducer from "./particularCampaignReducer"
import adminReducer from "./adminReducer"
export default combineReducers({
  error: errorReducer,
  auth: authReducer,
  user : usersReducer,
  campaign : campaignReducer,
  particularCampaign:particularCampaignReducer,
  admin:adminReducer
});