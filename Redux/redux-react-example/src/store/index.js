import {
    createStore,
    applyMiddleware,
    compose
} from 'redux'

import thunk from 'redux-thunk' //middleware
import rootReducer from '../reducers'; // import the reducers // create a folder in src //since i name the js file as index it is not requered to include it in the import path // rootReducer == Main Reducer

const initialState = {}
const middleware = [thunk]
// compose deftool need to get the applyMiddleware function
const store = createStore(rootReducer, initialState, compose(applyMiddleware(...middleware))) //thunk has multiple parts 


export default store;

// its like a template