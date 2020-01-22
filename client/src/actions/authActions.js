import axios from 'axios';
import { returnErrors} from './errorActions';

import {
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADING,
  USER_LOADED
} from "./types";

//* Check token and load user
export const loadUser = () => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });

  axios.get('/api/auth/user', tokenConfig(getState))         //* make a get request and send config(this is what holds the token and header x-auth-token configuration)
    .then(res => dispatch({                   //* if server successfully gives me a good response then pass the res into dispatch method 
      type: USER_LOADED,                      //* initiate USER_LOADED case
      payload: res.data                       //* pass in the response data into the payload
    }))
    .catch(err => {                           //* if failed (in this case if the config held the wrong token) then catch the err
      dispatch(returnErrors(err.response.data, err.response.status)); //* tells dispatch/redux to run retunrErrors and pass in error repated data as arguments. returnErrors() can be found in errorActions.js
      dispatch({
        type: AUTH_ERROR                      //* initiate AUTH_ERROR case
      });
    });
  
};

export const register = ({ username, email, password }) => dispatch => { //* register user
  const config = { //* headers
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const body = JSON.stringify({ username, email, password}); //* request body

  axios.post('/api/users', body, config) //* passing in body and config into the post request for the backend to do something with it
    .then(res => dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data       
    }))
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL'));
      dispatch({
        type: REGISTER_FAIL
      })
    });
} 

export const login = ({ email, password }) => dispatch => { //* register user
  const config = { //* headers
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const body = JSON.stringify({ email, password}); //* request body

  axios.post('/api/auth', body, config) //* passing in body and config into the post request for the backend to do something with it
    .then(res => dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data       
    }))
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL'));
      dispatch({
        type: LOGIN_FAIL
      })
    });
} 


export const logout = () => {
  return {
    type: LOGOUT_SUCCESS
  }
}




export const tokenConfig = getState => {
  const token = getState().auth.token;        //* get token from localstorage. 
  const config = {                            //* headers
    headers: {
      "Content-type": "application/json"
    }
  }
  if(token) {                                 //* If there is a token, add to headers
    config.headers['x-auth-token'] = token;
  }
  return config;
}

//~ rule of thumb. When dispatch was a method within it's parameters then it is firing an action function. You'd go to the actions folder