import {
    ADMIN_CAMPAIGNS_LOADING,
    ADMIN_CAMPAIGNS_LOADED,
    ADMIN_SINGLECAMPAIGNS_LOADING,
    ADMIN_SINGLECAMPAIGNS_LOADED,    
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
    


  } from "../actions/types";
  
  const initialState = {
    adminCampaigns: [],
    adminBrands: [],
    adminInfluencers: [],
    adminSingleCampaign : '',
    adminSingleBrand : '',
    adminSingleInfluencer : '',
    flagCampaign:'',
    flagBrand:'',
    flagInfluencer:'',
    loading: false,
    adminInfluencerLength:0,
    adminBrandLength:0,
    adminCampaignsLength:0

  };
  
  export default function(state = initialState, action) {
    switch (action.type) {

        /** ADMIN CAMPAIGNS  */
      case ADMIN_CAMPAIGNS_LOADED:
        return {
          ...state,
          adminCampaigns: action.payload,
          loading: false
        };
  
      case ADMIN_CAMPAIGNS_LOADING:
        return {
          loading: true
        };
        /**END ADMIN CAMPAIGNS  */

        /** ADMIN SINGLE CAMPAIGN */
        case ADMIN_SINGLECAMPAIGNS_LOADED:
            return {
              ...state,
              adminSingleCampaign: action.payload,
              loading: false
            };

        case ADMIN_SINGLECAMPAIGNS_LOADING:
          return {
            loading: true
          };
        /** END ADMIN SINGLE CAMPAIGN */
  
        

        /* ADMIN GET BRANDS  */
        case ADMIN_BRAND_LOADED:
            return {
              ...state,
              adminBrands: action.payload,
              loading: false
            };

        case ADMIN_BRAND_LOADING:
          return {
            loading: true
          };
        /* END ADMIN GET BRANDS  */
        

        /** ADMIN GET SINGLE BRANDS */
          case ADMIN_SINGLEBRAND_LOADED:
            return {
              ...state,
              adminSingleBrand: action.payload,
              loading: false
            };

        case ADMIN_SINGLEBRAND_LOADING:
          return {
            loading: true
          };
        /** ADMIN GET SINGLE BRANDS */


        /** ADMIN FLAG BRAND */
        case ADMIN_FLAGBRAND_LOADED:
            return {
              ...state,
              flagBrand: action.payload,
              loading: false
            };

        case ADMIN_FLAGBRAND_LOADING:
          return {
            loading: true
          };
        /** END ADMIN FLAG BRAND */


        /** ADMIN INFLUENCERS */
        case ADMIN_INFLUENCERS_LOADED:
            return {
              ...state,
              adminInfluencers: action.payload,
              loading: false
            };

        case ADMIN_INFLUENCERS_LOADING:
          return {
            loading: true
          };
        /**END ADMIN INFLUENCERS */
        
        /** ADMIN SINGLE INFLUENCERS */
        case ADMIN_SINGLEINFLUENCERS_LOADED:
            return {
              ...state,
              adminSingleInfluencer: action.payload,
              loading: false
            };

        case ADMIN_SINGLEINFLUENCERS_LOADING:
          return {
            loading: true
          };

        /** END ADMIN SINGLE INFLUENCERS */
        
        /** ADMIN FLAG BRAND */
        case ADMIN_FLAGINFLUENCERS_LOADED:
            return {
              ...state,
              flagInfluencer: action.payload,
              loading: false
            };

        case ADMIN_FLAGINFLUENCERS_LOADING:
          return {
            loading: true
          };
        /** END ADMIN FLAG BRAND */
        /* GET ADMIN CAMPAIGN TOTAL */
        case ADMIN_CAMPAIGNS_LENGTH_LOADED:
          return {
            ...state,
            adminCampaignsLength: action.payload,
            loading: false
          };

      case ADMIN_CAMPAIGNS_LENGTH_LOADING:
        return {
          loading: true
        };
        
        /* END ADMIN CAMPAIGN TOTAL */
        
        /**GET ADMIN BRAND TOTAL */
        case ADMIN_BRANDS_LENGTH_LOADED:
          return {
            ...state,
            adminBrandLength: action.payload,
            loading: false
          };

      case ADMIN_BRANDS_LENGTH_LOADING:
        return {
          loading: true
        };
        /** END GET ADMIN BRAND TOTAL */
        

        /** GET ADMIN TOTAL INFLENCERs  */
        case ADMIN_INFLUENCERS_LENGTH_LOADED:
            return {
              ...state,
              adminInfluencerLength: action.payload,
              loading: false
            };

        case ADMIN_INFLUENCERS_LENGTH_LOADING:
          return {
            loading: true
          };
        /** GET ADMIN TOTAL INFLENCERs  */
        

      default:
        return state;
    }
  }
  

  // ADMIN_CAMPAIGNS_LENGTH_LOADED,
  // ADMIN_CAMPAIGNS_LENGTH_LOADING,
  // ADMIN_INFLUENCERS_LENGTH_LOADED,
  // ADMIN_INFLUENCERS_LENGTH_LOADING,
  // ADMIN_BRANDS_LENGTH_LOADED,
  // ADMIN_BRANDS_LENGTH_LOADING
  