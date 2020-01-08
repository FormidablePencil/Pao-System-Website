import { GET_ERRORS, CLEAR_ERRORS} from '../actions/types';

const initialState = {
  msg: {},
  status: null,
  id: null
};


//Everythng is functions and what's between the parameters are arguments. Nothing magical about these things, should be quite common sense alread.
export default function(state = initialState, action) {
  switch(action.type) {
    case GET_ERRORS:
      return {
        msg: action.payload.msg,
        status: action.payload.status,
        id: action.payload.id
      };
    case CLEAR_ERRORS:
      return {
        msg: {},
        status: null,
        id: null
      };
    default:
      return state 
  }
}