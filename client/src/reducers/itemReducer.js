import {
ITEMS_LOADED,
ITEMS_LOADING
} from "../actions/types";

const initialState = {
  items: [],

  loading: false,
  type : null
};

export default function(state = initialState, action) {
  switch (action.type) {


    case ITEMS_LOADING:
      return {
       ...state,
        loading: true
      };
    case ITEMS_LOADED:
      return {
        ...state,
        items : action.payload,
       type : ITEMS_LOADED
      };
   
   

          
    default:
      return state;
  }
}
