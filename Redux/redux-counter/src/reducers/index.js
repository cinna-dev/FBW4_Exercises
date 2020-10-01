import {
  combineReducers
} from 'redux';
import counterReducer from './counterReducer.jsx';

export default combineReducers({
  counter: counterReducer

});