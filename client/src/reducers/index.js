import { combineReducers } from 'redux'; //@ package
import itemReducer from './itemReducer';

//~ this is where this.props... is refered to. This is the centrol point sortasay

export default combineReducers({
  item: itemReducer
})


//~ this is where you would put the state of a component and create a seperate file for it as we did above.
// export default combineReducers({
//   some: something
// })