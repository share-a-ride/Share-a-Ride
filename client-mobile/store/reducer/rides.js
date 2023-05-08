import { BASE_URL, FETCH_RIDES } from "../action/actionType";

const initialState ={
  rides:[]
};
const ridesReducer = (state = initialState, action)=>{
  console.log(action)
  switch (action.type) {
    case FETCH_RIDES:
      return {
        ...state,
        news: action.payload,
        
      };
    default:
      return state
  }
}
export default ridesReducer;