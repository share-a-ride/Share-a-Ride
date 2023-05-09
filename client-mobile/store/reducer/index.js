import { combineReducers } from "redux";
import ridesReducer from "./rides";
import detailPostReducer from "./detailPost";
import registerReducer from "./register";
import loginReducer from "./login";
// import ridesReducer from "./rides";


export const rootReducer = combineReducers({
  registerReducer,
  loginReducer,
  ridesReducer,
  detailPostReducer,
})
