import { FETCH_POST } from './types';
import axios from 'axios';

const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

export const fetch = (post) => {
  return {
    type: FETCH_POST,
    post
  }
};

export const fetchPost = () => {
  return (dispatch) => {
    return axios.get(apiUrl)
      .then(response => {
        dispatch(fetch(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};