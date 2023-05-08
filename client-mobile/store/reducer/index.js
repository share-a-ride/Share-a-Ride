import { combineReducers } from "redux";
import detailPostReducer from "./detailPost";
import registerReducer from "./register";
import loginReducer from "./login";
import rideReducer from "./ride";


// export const rootReducer = combineReducers({
//   registerReducer,
//   loginReducer,
//   rideReducer,
//   detailPostReducer,
// })

export default combineReducers({
  // usersReducer,
  rideReducer
})
