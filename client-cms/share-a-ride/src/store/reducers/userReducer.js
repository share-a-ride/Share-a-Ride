import { LOGIN_LOADING, USER, USER_LOADING } from "../actions/actionType";

const initialState = {
    usersLoading: false,
    user: [],
    userLoading: true
}

export default function usersReducer(state = initialState, { type, payload }) {
    switch (type) {
        case LOGIN_LOADING:
            return {
                ...state,
                usersLoading: payload
            }
        case USER:
            return {
                ...state,
                user: payload
            }

        case USER_LOADING:
            return {
                ...state,
                userLoading: payload
            }

        default:
            return state
    }
}