// src/redux/actions/itemActions.js

import axios from 'axios';
import {
  FETCH_ITEMS,
  ADD_ITEM,
  DELETE_ITEM,
  EDIT_ITEM,
  UPDATE_ITEM,
} from './types';

export const fetchItems = () => async (dispatch) => {
  const response = await axios.get('http://localhost:5000/items');
  dispatch({ type: FETCH_ITEMS, payload: response.data });
};

export const addItem = (name) => async (dispatch) => {
  const response = await axios.post('http://localhost:5000/items', { name });
  dispatch({ type: ADD_ITEM, payload: response.data });
};

export const deleteItem = (id) => async (dispatch) => {
  await axios.delete(`http://localhost:5000/items/${id}`);
  dispatch({ type: DELETE_ITEM, payload: id });
};

export const editItem = (item) => {
  return { type: EDIT_ITEM, payload: item };
};

export const updateItem = (id, name) => async (dispatch) => {
  const response = await axios.put(`http://localhost:5000/items/${id}`, { name });
  dispatch({ type: UPDATE_ITEM, payload: response.data });
};
