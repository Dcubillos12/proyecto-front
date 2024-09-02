import { GET_BY_NAME, GET_USERS, GET_DETAIL } from "./../actions/index";

let initialState = {
  allUsers: [],
  userCopy: [],
  allPosts: [],
};
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        allUsers: action.payload,
      };
    case GET_BY_NAME:
      return {
        ...state,
        allUsers: action.payload,
      }
    case GET_DETAIL:
      return {
        ...state,
        allPosts: action.payload
      }    
    default:
      return state;
  }
}

export default rootReducer;
