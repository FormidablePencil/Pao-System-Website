import { createStore, applyMiddleware, compose } from 'redux'; //@ package //applymiddleware is for thunk and compose is to for middleware 
import thunk from 'redux-thunk'; //@ package
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

//~ we passed made a store with the files within rootReducers managing the state.
const store = createStore(rootReducer, initialState, compose(
  applyMiddleware(...middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default store;