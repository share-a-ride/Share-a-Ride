import { BASE_URL, FETCH_POST,FETCH_DETAIL_POST,LOGIN_USER,ADD_USER } from "./actionType";
import axios from 'axios';
import Swal from 'sweetalert2'

export function loginSuccess(payload){
  return{
    type: LOGIN_USER,
    payload
  }
}

export function registerSuccess(payload){
  return{
    type: ADD_USER,
    payload
  }
}

export function  fetchPostSuccess (payload) {
  return {
    type: FETCH_POST,
    payload,
  }
}
export function  fetchDetailPostSuccess (payload) {
  return {
    type: FETCH_DETAIL_POST,
    payload,
  }
}




export function fetchDataPost() {

  return async (dispatch,getState)=>{
    try {
      const {data} = await axios.get(BASE_URL + "/post");
     
     
      dispatch(fetchPostSuccess(data))
    } catch (error) {
      console.log(error);
    } finally {
      // setLoading(false);
    }
  }
}

export function fetchDetailPost(id) {

  return async (dispatch,getState)=>{

    try {
      const {data} = await fetch(BASE_URL + "/post/"+id);
     
      dispatch(fetchDetailPostSuccess(data))
    } catch (error) {
      console.log(error);
    } finally {
      // setLoading(false);
    }
  }
}

export function handleLogin(user) {
  return async(dispatch,getState)=>{
    try {
      let {data} = await axios.post (this.baseUrl + '/pub/login',user)
      localStorage.access_token = data.access_token
      localStorage.email = data.email
      console.log(user,"<<<<normallll")
      dispatch(registerSuccess(data))
      Swal.fire("Good job!", "Success Login!", "success");
      
    } catch (error) {
      console.log(error)
      Swal.fire("Cancelled", `${error.response.data.message}`, "error");
    }
  }
 
}

export function handleRegister(user){
  return async(dispatch,getState)=>{
    try {
      console.log(user)
      let data = await axios.post (this.baseUrl + '/pub/register',user)
      Swal.fire("Good job!", "Success Register!", "success");
      dispatch(addUser(data))
    } catch (error) {
      console.log(error)
      Swal.fire("Cancelled", `${error.response.data.message}`, "error");
    }

  }
}