import { BASE_URL, FETCH_POST } from "../action/actionType";

const initialState ={
  ride:[]
};
const rideReducer = (state = initialState, action)=>{
  console.log(action)
  switch (action.type) {
    case FETCH_POST:
      return {
        ...state,
        ride: action.payload,
      };
    default:
      return state
  }
}
export default rideReducer;