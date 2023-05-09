import {
    LOGIN_LOADING,
    BASE_URL,
    RIDES,
    RIDES_LOADING,
    BASE_URL2,
    USER,
    USER_LOADING
} from "./actionType"
import Swal from 'sweetalert2'
import axios from 'axios'


export const loginLoading = (payload) => ({
    type: LOGIN_LOADING,
    payload,
});
export const fetchRidesSuccess = (payload) => ({
    type: RIDES,
    payload,
});
export const ridesLoading = (payload) => ({
    type: RIDES_LOADING,
    payload,
});
export const fetchUserSuccess = (payload) => ({
    type: USER,
    payload,
});
export const userLoading = (payload) => ({
    type: USER_LOADING,
    payload,
});


export function login(payload) {
    return async (dispatch) => {
        try {
            dispatch(loginLoading(true));

            let res = await fetch(`${BASE_URL}/login`, {
                method: "post",
                body: JSON.stringify(payload),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!res.ok) {
                throw await res.text();
            }

            let data = await res.json();

            localStorage.access_token = data.access_token;
            localStorage.username = data.username;

            dispatch(loginLoading(false));
        } catch (err) {
            dispatch(loginLoading(false));
            throw JSON.parse(err);
        }
    };
}

export function fetchRides() {
    return async (dispatch) => {
        try {
            dispatch(ridesLoading(true));
            let res = await fetch(`${BASE_URL2}/`, {
                method: "get",
                headers: {
                    access_token: localStorage.access_token,
                },
            });
            if (!res.ok) {
                throw await res.text();
            }
            let data = await res.json();

            dispatch(fetchRidesSuccess(data));
            dispatch(ridesLoading(false));
        } catch (err) {
            dispatch(ridesLoading(false));
            throw JSON.parse(err);
        }
    };
}

export function fetchUser() {
    return async (dispatch) => {
        try {
            
            let res = await fetch(`${BASE_URL}/users`, {
                method: "get",
                headers: {
                    access_token: localStorage.access_token,
                },
            });
            if (!res.ok) {
                throw await res.text();
            }
            let data = await res.json();

            
            dispatch(fetchUserSuccess(data));
            dispatch(userLoading(false));
        } catch (err) {
            dispatch(userLoading(false));
            throw JSON.parse(err);
        }
    };
}

export function changeUserStatus(status,id) {
    return async function (dispatch) {
        try {
            console.log(status,id,"<<<< dari reducer")
           let data = await axios.patch(`${BASE_URL}/users/${id}`,
            {status:status},
            {   headers: {
                access_token: localStorage.access_token,
            }}
         )
            Swal.fire("Good job!", "Success !", "success");

            await dispatch(fetchUser());
            return data.message;
        } catch (err) {
            throw JSON.parse(err);
        }
    };
}