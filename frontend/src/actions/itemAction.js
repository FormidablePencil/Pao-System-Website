import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types';

export const getItems = () => { //~ so, whatever is liked to GET_ITEMS will be fired when getItems is used within jsx
  return {
    type: GET_ITEMS
  }
}

//~ here we can decide what combination of actions could we do to get a result.