import { combineReducers } from "redux";
import usersReducer from "./userReducer";
import ridesReducers from "./ridesReducers";

export default combineReducers({
    usersReducer,
    ridesReducers
})