import {
    FETCH_POSTS,
    NEW_POSTS
} from '../actions/types'


/* 
the initialState is... 
posts={
    items: [],
    item: {}
} 
*/
// default state // just empty
const initialState = {
    items: [],
    item: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_POSTS:

            return {
                ...state,
                items: action.payload
                //item:state.item
            };

        case NEW_POSTS:

            return {
                ...state,
                item: action.payload
            };

        default:
            return state;
    }

}