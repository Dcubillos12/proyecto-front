import axios from "axios";
export const GET_USERS = "GET_USERS";
export const GET_BY_NAME = "GET_BY_NAME";
export const GET_DETAIL = "GET_DETAIL";
export function getUsers() {
  return async (dispatch) => {
    const response = await axios("https://jsonplaceholder.typicode.com/users");
    return dispatch({
      type: GET_USERS,
      payload: response.data, // es la informacion que se va a mandar
    });
  };
}

export function getByName(name) {
  return async (dispatch) => {
    const response = await axios(
      `http://localhost:3001/users?name=${name}`
    );
    return dispatch({
      type: GET_BY_NAME,
      payload: response.data, // es la informacion que se va a mandar
    });
  };
}

export function getDetail(id) {
  return async (dispatch) => {
    const response = await axios(`http://localhost:3001/users/${id}`);
    return dispatch({
      type: GET_DETAIL,
      payload: response.data, // es la informacion que se va a mandar
    });
  };
}