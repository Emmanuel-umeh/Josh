
import axios from 'axios';
import { returnErrors } from './errorActions';


import {
// when all campaigns are loading
  CAMPAIGNS_LOADED,
  CAMPAIGNS_LOADING,
  SENT_JOB_REQUEST,

  // when single campaign is loading
  CAMPAIGN_LOADED,
  CAMPAIGN_LOADING,
  SENDING_JOB_REQUEST,
// creating campaigns
  CREATING_CAMPAIGN,
  CREATED_CAMPAIGN,
  GETTING_SINGLE_CAMPAIGN,
  GET_SINGLE_CAMPAIGN,
  CAMPAIGN_CREATED,
  CREATE_CAMPAIGN_FAILED,
  CAMPAIGN_UPDATED,
  DELETED_CAMPAIGN,
  TOOK_JOB,
  TAKING_JOB,

  GET_PARTICULAR_CAMPAIGNS,
  GETTING_PARTICULAR_CAMPAIGN,
  INFLUENCERS_LOADED
  // USERS_LOADED
} from './types';



  export const setCampaignsLoading = () => {
    return {
      type: CAMPAIGNS_LOADING
    };
  };

  // get all campaigns




export const getCampaigns = () => dispatch => {
  dispatch(setCampaignsLoading());
  axios
    .get('/api/campaign/campaigns')
    .then(res =>
      dispatch({
        type: CAMPAIGNS_LOADED,
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






export const getCampaign = (id) => dispatch => {
  // dispatch(setCampaignsLoading());

  dispatch({
    type: CAMPAIGN_LOADING
  })

  console.log("id ", id)
  axios
    .get(`/api/campaign/singleCampaign/${id}`)
    .then(res =>{

      dispatch({
        type: CAMPAIGN_LOADED,
        payload: res.data
      })
      console.log(res.data)
    }
    )
    // .then(
    //   dispatch(setUsersDoneLoading())
    // )

    .catch(err =>{
      dispatch(returnErrors(err.response.data, err.response.status))
      console.log(err.response.data)
    }
    );
};






/** HIRE  */
export const hire =({    
      campaignID,
      influencerID,
      influencerEmail,
      campaigName,
      brandEmail,
      brandName})=> dispatch =>{  
  // id is influencerID
dispatch({
    type : SENDING_JOB_REQUEST
  });
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  // SENDING_JOB_REQUEST
  const body = JSON.stringify({
            campaignID,
            influencerID,
            influencerEmail,
            campaigName,
            brandEmail,
            brandName
                })


  axios
    .post(`/api/campaign/takeJob/add`, body,config)
    .then(res =>{
      // dispatch({
      //   type: SENT_JOB_REQUEST,
      //   payload : res.data.result
      // })
      console.log(res.data)
      if(res.data.success){
        alert("Notification Has Been Sent to the Influencer. You Will be notified if the influencer accepts the job.")
      }
    }
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
}

/** END HIRE */





export const takeJob = ({id, campaignID}) => dispatch => {
  // dispatch({
  //   type : SENDING_JOB_REQUEST
  // });

  // id is influencerID
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };



  // const body = JSON.stringify({influencerID, campaignID})


  axios
    .put(`/api/campaign/takeJob/${campaignID}/accept/${id}`, config)
    .then(res =>{
      dispatch({
        type: TOOK_JOB,
        payload : res.data.result
      })
      console.log(res.data)
      
    }
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};





// cREATE A CAMPAIGN ACTION

export const createCampaign = (fd,userType) => dispatch => {
  dispatch({
    type : CREATING_CAMPAIGN
  });
  const config = {
    headers: {
      // 'Accept': 'application/json',
      'Content-Type': 'multipart/form-data',
    }
  };




  axios
    .post('/api/campaign/create', fd,
      config
)
    .then(res =>{
      // dispatch({
      //   type: TOOK_JOB
      // })
      // console.log(res.data)
      dispatch({
             type: CAMPAIGN_CREATED,
             payload: res.data
           })
          window.location.href =`/${userType}-dashboard`

    }
    )
    // .then(
    //   dispatch(setUsersDoneLoading())
    // )

    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};



// UPDATE A CAMPAIGN
export const updateCampaign = ({
  ownerID,
  nameOfCampaign,
  industry,
  amount,
  numberOfReach,
  socialMedia,
  description,
  id,
  userID
}) => dispatch => {
  const config = {
    headers: {
      'Accept': 'application/json',
      // 'Content-Type': 'multipart/form-data',
    }
  };
  // console.log(fd.get("nameOfCampaign"))
  // console.log(fd.get("industry"))
  // console.log(fd.get("numberOfReach"))
  // console.log(fd.get("amount"))
  // console.log(fd.get("socialMedia"))
  // console.log(fd.get("description"))

  // const id=fd.get("userID")
    // Request body
    const body = { 
      ownerID,
      nameOfCampaign,
      industry,
      amount,
      numberOfReach,
      socialMedia,
      description,
      userID
     }
  console.log(body)
  axios
    .put(
      `/api/campaign/update/${id}`,
    body,
      config
    )
    .then(res =>{
      dispatch({
        type: CAMPAIGN_UPDATED,
        payload: res.data
      })
      // window.location.href =`/brand-dashboard/campaigns`
      console.log("RESPONSE", res.data)

      // window.location.href=`/dashboard`
    })
    .catch(err => {
      console.log(err.response.data)
      dispatch(
        returnErrors(err.response.data, err.response.status, "CREATE CAMPAIGN FAILED")
      );
      // console.log(err.response.data);
      dispatch({
        type: CREATE_CAMPAIGN_FAILED
      });
    });
};


// Get single brand campaigns

export const getSingleCampaigns = (id) => dispatch => {
  dispatch({
    type:  GETTING_PARTICULAR_CAMPAIGN
  });

  axios
    .get(`/api/campaign/getCampaigns/${id}`)
    .then(res =>{

      dispatch({
        type: GET_PARTICULAR_CAMPAIGNS,
        payload: res.data
      })
      console.log("CAMPAIGNS",res.data)
    }
    )

    .catch(err => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "REGISTER_FAIL")
      );
      console.log(err.response.data);
      // dispatch({
      //   type: CREATE_CAMPAIGN_FAILED
      // });
    });
};


// DELETE A CAMPAIGN

export const deleteCampaign = ({userId,id}) => dispatch => {


  axios
    .delete(`/api/campaign/${userId}/delete/${id}`)
    .then(res =>{

      dispatch({
        type: DELETED_CAMPAIGN,
        payload: id
      })
      console.log("is success ?",res.data)
      alert("campaign deleted successfully")
      // window.location.reload(false)
    }
    )

    .catch(err => {
      // dispatch(
      //   returnErrors(err.response.data, err.response.status, "FAILED")
      // );
      console.log(err);
      // dispatch({
      //   type: CREATE_CAMPAIGN_FAILED
      // });
    });
};


export const getInfluencers = () => dispatch => {
  dispatch(setCampaignsLoading());
  axios
    .get('/api/users')
    .then(res =>
      dispatch({
        type: INFLUENCERS_LOADED,
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

