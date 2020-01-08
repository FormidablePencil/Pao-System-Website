import { combineReducers } from 'redux'; //@ package
import itemReducer from './itemReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';

//~ this is where this.props... is refered to. This is the centrol point sortasay

export default combineReducers({
  item: itemReducer,
  error: errorReducer,
  auth: authReducer
})


//~ this is where you would put the state of a component and create a seperate file for it as we did above.
// export default combineReducers({
//   some: something
// })