import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from '../actions/types';
import axios from 'axios';

export const getItems = () => dispatch => { //~ so, whatever is liked to GET_ITEMS will be fired when getItems is used within jsx
  dispatch(setItemsLoading());
  axios
    .get('/api/items')//~ we added proxy in package.json so we don't need to add 'loaclhost:5000' before the path
    .then(res => 
      dispatch({
          type: GET_ITEMS,
          payload: res.data
      })
    )
};

export const addItem = item => dispatch => {
  axios
    .post('api/items', item)
    .then(res =>
      dispatch({
        type: ADD_ITEM,
        payload: res.data
    })
  )
};
                //~ takes an id 
// export const deleteItem = id => dispatch => { //! when the components use these actions then argumennts pass on to this function that intitiates an action.
//   axios
//     .delete('api/items/${id}')
//     .then(res => 
//       dispatch({
//         type: DELETE_ITEM,
//         payload: id
//     }) 
//   );
// };

export const deleteItem = id => dispatch => {
  axios.delete(`/api/items/${id}`).then(res => 
    dispatch({
      type: DELETE_ITEM,
      payload:id
    }))
}

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  }
};

//~ here we can decide what combination of actions could we do to get a result.