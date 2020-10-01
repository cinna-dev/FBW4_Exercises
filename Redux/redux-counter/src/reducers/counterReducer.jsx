import {
  INCREMENT,
  DECREMENT,
  ADD_FIVE,
  SUB_FIVE,
  SHOW_RESULT,
  DELETE_ITEM
} from '../action/types';

const initialState = {
  counter: 0,
  list: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + action.payload
      };
    case DECREMENT:
      return {
        ...state,
        counter: state.counter - action.payload
      };
    case ADD_FIVE:
      return {
        ...state,
        counter: state.counter + action.payload
      };
    case SUB_FIVE:
      return {
        ...state,
        counter: state.counter - action.payload
      };
    case SHOW_RESULT:
      const templist = state.list;
      templist.push(state.counter);
      return {
        ...state,
        list: templist
      };
    case DELETE_ITEM:
      const tempList1 = state.list;
      tempList1.splice(action.payload, 1);
      return {
        ...state,
        list: tempList1
      };
    default:
      return state;
  }
}
