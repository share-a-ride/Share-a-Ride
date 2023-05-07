import { RIDES, RIDES_LOADING } from "../actions/actionType";

const initialState = {
    rides: [],
    ridesLoading: false
}

export default function ridesReducers(
    state = initialState,
    { type, payload }
) {
    switch (type) {
        case RIDES:
            return {
                ...state,
                rides: payload
            }
            
        case RIDES_LOADING:
            return {
                ...state,
                ridesLoading: payload
            }    
    
        default:
            return state
    }
}