import {
    FETCH_POSTS,
    NEW_POSTS
} from './types'


import axios from 'axios'

/* export function fetchPosts() {
    return async function (dispatch) {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
        dispatch({
            type: FETCH_POSTS,
            payload: res.data
        })
        //payload == data == posts // common way to dispatch
    }
} */

export const fetchPosts = () => async dispatch => {

    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');

    dispatch({ //action
        type: FETCH_POSTS,
        payload: res.data
    })
}

export const createPost = postData => async dispatch => {

    const res = await axios({
        method: 'POST',
        url: 'https://jsonplaceholder.typicode.com/posts',
        data: postData
    })

    dispatch({
        type: NEW_POSTS,
        payload: res.data
    })
}