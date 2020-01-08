import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from '../actions/types'; 
// const uuid = require("uuid"); //@ package


const initialState = {
  items: [],
  loading: false
}
//* the history of every store is found in the redux chome extension. There should be some way of pulling data from an older version of state

export default function(state = initialState, action) { //* we've made a copy of the initalState and called it state. We aren't mutating state this way
  switch(action.type) {
    case GET_ITEMS: 
      return {
        ...state,              //* we return the curect state (meaning that the previous version of the state before this the requests to the database was saved for later use if need)
        items: action.payload, //* pass in payload which was the res.data that came from action and now it's the data sent from the server is availuable within class components as this.props.item
        loading: false         //* told redux store that we are done here
      };
    case DELETE_ITEM:
      return {
        ...state,              //* stores the old version of the state
        items: state.items.filter(item => item._id !== action.payload) //* make 'items' accessible via this.props.item but with the items != action.payload (which is the id in this case)
      };
    case ADD_ITEM:
        return {
          ...state,            
          items: [action.payload, ...state.items] 
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