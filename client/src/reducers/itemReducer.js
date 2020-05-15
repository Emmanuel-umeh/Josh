import {
ITEMS_LOADED,
ITEMS_LOADING,
SINGLE_ITEM_LOADED
} from "../actions/types";

const initialState = {
  items: [],
  singleItem : [],

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
   
      case SINGLE_ITEM_LOADED:
        return {
          ...state,
          singleItem : action.payload,
         type : SINGLE_ITEM_LOADED
        };
   

          
    default:
      return state;
  }
}
