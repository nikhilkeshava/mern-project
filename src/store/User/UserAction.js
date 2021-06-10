import * as types from "./UserTypes";

export function login(payload) {
  return {
    type: types.LOGIN,
    payload: payload,
  };
}

export function loginSuccess(payload) {
  return {
    type: types.LOGIN_SUCCESS,
    payload: payload,
  };
}

export function loginError(payload) {
  return {
    type: types.LOGIN_ERROR,
    payload: payload,
  };
}

export function logout(payload) {
  return {
    type: types.LOGOUT,
    payload: payload,
  };
}

export function logoutSuccess(payload) {
  return {
    type: types.LOGOUT_SUCCESS,
    payload: payload,
  };
}

export function logoutError(payload) {
  return {
    type: types.LOGOUT_SUCCESS,
    payload: payload,
  };
}

export function getUser(payload) {
  return {
    type: types.GET_USER,
    payload: payload,
  };
}

export function getUserSuccess(payload) {
  return {
    type: types.GET_USER_SUCCESS,
    payload: payload,
  };
}

export function getUserError(payload) {
  return {
    type: types.GET_USER_ERROR,
    payload: payload,
  };
}

export function addUser(payload) {
  return {
    type: types.CREATE_USER,
    payload: payload,
  };
}

export function addUserSuccess(payload) {
  return {
    type: types.CREATE_USER_SUCCESS,
    payload: payload,
  };
}

export function addUserError(payload) {
  return {
    type: types.CREATE_USER_ERROR,
    payload: payload,
  };
}

export function deleteUserData(payload) {
  return {
    type: types.DELETE_USER_DATA,
    payload: payload,
  };
}
export function deleteUserDataSuccess(payload) {
  return {
    type: types.DELETE_USER_DATA_SUCCESS,
    payload: payload,
  };
}
export function deleteUserDataError(error) {
  return {
    type: types.DELETE_USER_DATA_ERROR,
    payload: error,
  };
}
export function updateUser(payload) {
  return {
    type: types.UPDATE_USER,
    payload: payload,
  };
}

export function updateUserSuccess(payload) {
  return {
    type: types.UPDATE_USER_SUCCESS,
    payload: payload,
  };
}

export function updateUserError(payload) {
  return {
    type: types.UPDATE_USER_ERROR,
    payload: payload,
  };
}
