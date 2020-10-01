import {
  INCREMENT,
  DECREMENT,
  ADD_FIVE,
  SUB_FIVE,
  SHOW_RESULT,
  DELETE_ITEM
} from './types';

export const addOne = () => dispatch => {
  dispatch({
    type: INCREMENT,
    payload: 1
  });
};

export const subOne = () => dispatch => {
  dispatch({
    type: DECREMENT,
    payload: 1
  });
};

export const addFive = () => dispatch => {
  dispatch({
    type: ADD_FIVE,
    payload: 5
  });
};

export const subFive = () => dispatch => {
  dispatch({
    type: SUB_FIVE,
    payload: 5
  });
};

export const showResult = e => dispatch => {
  dispatch({
    type: SHOW_RESULT
  });
  e.preventDefault();
};

export const deleteListItem = e => dispatch => {
  e.preventDefault();
  dispatch({
    type: DELETE_ITEM,
    payload: e.target.id
  });
};
