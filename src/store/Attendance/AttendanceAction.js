import * as types from "./AttendanceTypes";

export function addAbsentData(payload) {
  console.log("addAbsent", payload);
  return {
    type: types.CREATE_ABSENT,
    payload: payload,
  };
}
export function addAbsentDataSuccess(payload) {
  return {
    type: types.CREATE_ABSENT_SUCCESS,
    payload: payload,
  };
}
export function addAbsentDataError(error) {
  return {
    type: types.CREATE_ABSENT_ERROR,
    payload: error,
  };
}

export function getAbsentData(payload) {
  return {
    type: types.GET_ABSENT,
    payload: payload,
  };
}
export function getAbsentDataSuccess(payload) {
  return {
    type: types.GET_ABSENT_SUCCESS,
    payload: payload,
  };
}
export function getAbsentDataError(error) {
  return {
    type: types.GET_ABSENT_ERROR,
    payload: error,
  };
}
