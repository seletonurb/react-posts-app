import _ from "lodash";
import { FETCH_POSTS, FETCH_POST } from "../actions";

export default function(state = {}, action) {
  console.log("reducer " + FETCH_POSTS);
  switch (action.type) {
    case FETCH_POST:
      // const post = action.payload.data;
      // const newState = { ...state }; // get all already fetched posts and put them in the state object
      // newState[post.id] = post;
      // return newState;
      return { ...state, [action.payload.data.id] : action.payload.data };
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, "id");
    default:
      return state;
  }
}
