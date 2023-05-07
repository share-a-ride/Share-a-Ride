import { combineReducers } from "redux";
import userReducer from "./user";
import detailPostReducer from "./detailPost";
import registerReducer from "./register";
import loginReducer from "./login";


export const rootReducer = combineReducers({
  registerReducer,
  loginReducer,
  userReducer,
  detailPostReducer,
})
