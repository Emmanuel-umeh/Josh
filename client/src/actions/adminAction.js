import axios from 'axios';
import { returnErrors } from './errorActions';
import {
    ADMIN_CAMPAIGNS_LOADING,
    ADMIN_CAMPAIGNS_LOADED,
    ADMIN_SINGLECAMPAIGNS_LOADING,
    ADMIN_SINGLECAMPAIGNS_LOADED,
    ADMIN_FLAG_CAMPAIGNS_LOADING,
ADMIN_FLAG_CAMPAIGNS_LOADED,
    ADMIN_BRAND_LOADING,
    ADMIN_BRAND_LOADED,
    ADMIN_SINGLEBRAND_LOADING,
    ADMIN_SINGLEBRAND_LOADED,
    ADMIN_FLAGBRAND_LOADING,
    ADMIN_FLAGBRAND_LOADED,
    ADMIN_INFLUENCERS_LOADING,
    ADMIN_INFLUENCERS_LOADED,
    ADMIN_SINGLEINFLUENCERS_LOADING,
    ADMIN_SINGLEINFLUENCERS_LOADED,
    ADMIN_FLAGINFLUENCERS_LOADING,
    ADMIN_FLAGINFLUENCERS_LOADED,

    ADMIN_CAMPAIGNS_LENGTH_LOADED,
ADMIN_CAMPAIGNS_LENGTH_LOADING,
ADMIN_INFLUENCERS_LENGTH_LOADED,
ADMIN_INFLUENCERS_LENGTH_LOADING,
ADMIN_BRANDS_LENGTH_LOADED,
ADMIN_BRANDS_LENGTH_LOADING


        
} from './types';



/** ADMIN CAMPAIGN ROUTE */

export const adminGetCampaigns = (id) => dispatch => {
    dispatch({
        type: ADMIN_CAMPAIGNS_LOADING,
      });
    axios
      .get(`/api/admin/${id}/campaigns`)
      .then(res =>{
        dispatch({
          type: ADMIN_CAMPAIGNS_LOADED,
          payload: res.data
        })
        console.log("ADMIN CAMPAIGNS:",res.data)
      }

      )
      .catch(err =>
        dispatch(returnErrors(err.response.data, err.response.status))
      );
  };
  


  export const adminGetTotalCampaigns = () => dispatch => {
    dispatch({
        type: ADMIN_CAMPAIGNS_LENGTH_LOADING,
      });
    axios
      .get(`/api/admin/campaigns/length`)
      .then(res =>{
        dispatch({
          type: ADMIN_CAMPAIGNS_LENGTH_LOADED,
          payload: res.data
        })
        console.log("ADMIN CAMPAIGNS:",res.data)
      }

      )
      .catch(err =>
        dispatch(returnErrors(err.response.data, err.response.status))
      );
  };
  
  
  
/** GET SINGLE CAMPAIGN */

  export const adminGetSingleCampaign = (id, campaignID) => dispatch => {
    dispatch({
        type: ADMIN_SINGLECAMPAIGNS_LOADING,
      });
    axios
      .get(`/api/admin/${id}/campaign/${campaignID}`)
      .then(res =>
        dispatch({
          type: ADMIN_SINGLECAMPAIGNS_LOADED,
          payload: res.data
        })
      )
  
      .catch(err =>
        dispatch(returnErrors(err.response.data, err.response.status))
      );
  };
  


  

  /** FLAG CAMPAIGN */
  export const adminFlagSingleCampaign = (id, campaignID) => dispatch => {
    dispatch({
        type: ADMIN_FLAG_CAMPAIGNS_LOADING,
      });
      

    axios
      .post(`/api/admin/${id}/campaign/${campaignID}/flag`)
      .then(res =>
        dispatch({
          type: ADMIN_FLAG_CAMPAIGNS_LOADED,
          payload: res.data
        })
      )
  
      .catch(err =>
        dispatch(returnErrors(err.response.data, err.response.status))
      );
  };
  

/** END ADMIN CAMPAIGN ROUTE */



/** START ADMIN INFLUENCER ROUTE */
// ,
// ,


export const adminGetInfluencers = (id) => dispatch => {
    dispatch({
        type: ADMIN_INFLUENCERS_LOADING,
      });
    axios
      .get(`/api/admin/${id}/influencers`)
      .then(res =>{
        dispatch({
          type: ADMIN_INFLUENCERS_LOADED,
          payload: res.data
        })
        console.log("INFLUENCERS", res.data)
      }

      )
      // .then(
      //   dispatch(setUsersDoneLoading())
      // )
  
      .catch(err =>
        dispatch(returnErrors(err.response.data, err.response.status))
      );
  };

  export const adminGetTotalInfluencers = () => dispatch => {
    dispatch({
        type: ADMIN_INFLUENCERS_LENGTH_LOADING,
      });
    axios
      .get(`/api/admin/influencers/length`)
      .then(res =>{
        dispatch({
          type: ADMIN_INFLUENCERS_LENGTH_LOADED,
          payload: res.data
        })
        console.log("INFLUENCERS", res.data)
      }

      )
      // .then(
      //   dispatch(setUsersDoneLoading())
      // )
  
      .catch(err =>
        dispatch(returnErrors(err.response.data, err.response.status))
      );
  };


  export const adminGetSingleInfluencers = (id,influencerID) => dispatch => {
    dispatch({
        type: ADMIN_SINGLEINFLUENCERS_LOADING,
      });
    axios
      .get(`/api/admin/${id}/influencer/${influencerID}`)
      .then(res =>
        dispatch({
          type: ADMIN_SINGLEINFLUENCERS_LOADED,
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


  
  

  export const adminFlagInfluencers = (id,influencerID) => dispatch => {
    dispatch({
        type: ADMIN_FLAGINFLUENCERS_LOADING,
      });
    axios
      .post(`/api/admin/${id}/influencer/${influencerID}/flag`)
      .then(res =>
        dispatch({
          type:ADMIN_FLAGINFLUENCERS_LOADED,
          payload: res.data
        })
      )
  
      .catch(err =>
        dispatch(returnErrors(err.response.data, err.response.status))
      );
  };


  

  
  

/** END ADMIN INFLUENCER ROUTE */



/** START ADMIN BRAND ROUTE */

export const adminGetBrands = (id) => dispatch => {
    dispatch({
        type:ADMIN_BRAND_LOADING,
      });
    axios
      .get(`/api/admin/${id}/brands`)
      .then(res =>
        dispatch({
          type: ADMIN_BRAND_LOADED,
          payload: res.data
        })
      )
      .catch(err =>
        dispatch(returnErrors(err.response.data, err.response.status))
      );
  };




  export const adminGetTotalBrands = () => dispatch => {
    dispatch({
        type:ADMIN_BRANDS_LENGTH_LOADING,
      });
    axios
      .get(`/api/admin/brands/length`)
      .then(res =>
        dispatch({
          type: ADMIN_BRANDS_LENGTH_LOADED,
          payload: res.data
        })
      )
      .catch(err =>
        dispatch(returnErrors(err.response.data, err.response.status))
      );
  };


  export const adminGetSingleBrand = (id,brandID) => dispatch => {
    dispatch({
        type: ADMIN_SINGLEBRAND_LOADING,
      });
    axios
      .get(`/api/admin/${id}/brand/${brandID}`)
      .then(res =>
        dispatch({
          type: ADMIN_SINGLEBRAND_LOADED,
          payload: res.data
        })
      )  
      .catch(err =>
        dispatch(returnErrors(err.response.data, err.response.status))
      );
  };


  export const adminFlagSingleBrand = (id,brandID) => dispatch => {
    dispatch({
        type: ADMIN_FLAGBRAND_LOADING,
      });
    axios
      .get(`/api/admin/${id}/brand/${brandID}`)
      .then(res =>
        dispatch({
          type: ADMIN_FLAGBRAND_LOADED,
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

  /** END ADMIN BRAND ROUTE */