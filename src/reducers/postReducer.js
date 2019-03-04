import { FETCH_POST } from '../actions/types';

const initialState = {
  post: []
};

const postReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_POST:
      return {
        ...state,
        post: state.post.concat({
          key: Math.random(),
          value: action.payload
        })
      };
    default:
      return state;
  }
}

export default postReducer;