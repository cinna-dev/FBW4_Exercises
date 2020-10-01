import {
    combineReducers
} from 'redux'

import postReducer from './postReducer'
// other reducers might be and should be imported as well here

export default combineReducers({
    posts: postReducer,
    // other state properties should be updated by the other reducers here
})