import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from '../actions/types'; 
// const uuid = require("uuid"); //@ package


const initialState = {
  items: [],
  loading: false
}

//~ This is the place where we tell what the capital letter keywords will do
export default function(state = initialState, action) { 
  switch(action.type) {
    case GET_ITEMS: //~ we send the copy of the state and the payload.
      return {
        ...state, 
        items: action.payload,
        loading: false
      };         //~ ...state means submit a copy of state because state like props are supposed to be emutable.
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item._id !== action.payload) //~ filter in to the state all properties with the _id not equal to the action.payload.
      };
    case ADD_ITEM:
        return {
          ...state,
          items: [action.payload, ...state.items] //~ adding in the id and adding a copy of the state
        };
    case ITEMS_LOADING:
      return {
        ...state,
        loading: true
      }
      default: 
      return state;
  }
}