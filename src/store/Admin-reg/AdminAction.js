import * as types from "./AdminTypes";

export function addAdmin(payload) {
  return {
    type: types.CREATE_ADMIN,
    payload: payload,
  };
}

export function addAdminSuccess(payload) {
  return {
    type: types.CREATE_ADMIN_SUCCESS,
    payload: payload,
  };
}

export function addAdminError(payload) {
  return {
    type: types.CREATE_ADMIN_ERROR,
    payload: payload,
  };
}
