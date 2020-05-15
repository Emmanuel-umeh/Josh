import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USERS_LOADING,
  USERS_LOADED
} from '../actions/types';


const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  isLoading: false,
  user: null,
  type : null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true,
        type : USER_LOADING
      };
    case USER_LOADED:
      
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload,
        type : USER_LOADED
      };
    case LOGIN_SUCCESS:
      
      localStorage.setItem('token', action.payload.token);
      
    case REGISTER_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      // window.location.href = "https://sociooriot.herokuapp.com/successful"
    //  this.props. history.push('/');

      // console.log("logged in successfully")
      
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false
       
      };

    
  
   
      
      // localStorage.removeItem('token');
      // window.location.href = "https://sociooriot.herokuapp.com/"
      // // window.location.href = "http://localhost:3000"
      // return {
      //   ...state,
      //   token: null,
      //   user: null,
      //   isAuthenticated: false,
      //   isLoading: false
      // };

      case LOGOUT_SUCCESS:
        localStorage.removeItem('token');
          window.location.href = "/"
        return {
          ...state,
          token: null,
          user: null,
          isAuthenticated: false,
          isLoading: false
        };
  
      case AUTH_ERROR:
        case LOGIN_FAIL:
    case REGISTER_FAIL:
     
      // window.location.href = "/"
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false
      };

      // case USERS_LOADING:
      // return {
      //   ...state,
      //   isLoading: true
      // };

      // case USERS_LOADED:
      // return {
      //   ...state,
      //   isLoading: false,
      //   user: action.payload
      // };
    default:
      return state;
  }
}