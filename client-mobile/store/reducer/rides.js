import { BASE_URL, FETCH_RIDES, FETCH_USERS_RIDES } from "../action/actionType";

const initialState = {
  rides: [],
  userRides: []
};
const ridesReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case FETCH_RIDES:
      return {
        ...state,
        rides: action.payload,

      };
    case FETCH_USERS_RIDES:
      return {
        ...state,
        userRides: action.payload,

      };
    default:
      return state
  }
}
export default ridesReducer;