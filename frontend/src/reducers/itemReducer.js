import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types'; 
const uuid = require("uuid"); //@ package


const initialState = {
  items: [
    { id: uuid(), name: 'Eggs' },
    { id: uuid(), name: 'Milk' },
    { id: uuid(), name: 'Steak' },
    { id: uuid(), name: 'Water' },
  ]
}

//~ States what kind of actions you can do with this the state
export default function(state = initialState, action) { 
  switch(action.type) {
    case GET_ITEMS: //~ with GET_ITEMS it'll certianly return this state
      return {
        ...state
      }
      default: 
      return state;
  }
}