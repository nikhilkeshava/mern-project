import * as types from "./PresentTypes";

export function addPresentData(payload) {
  console.log("add Present data", payload);
  return {
    type: types.CREATE_PRESENT,
    payload: payload,
  };
}
export function addPresentDataSuccess(payload) {
  return {
    type: types.CREATE_PRESENT_SUCCESS,
    payload: payload,
  };
}
export function addPresentDataError(error) {
  return {
    type: types.CREATE_PRESENT_ERROR,
    payload: error,
  };
}

// export function getPresentData(payload) {
//   return {
//     type: types.GET_PRESENT,
//     payload: payload,
//   };
// }
// export function getPresentDataSuccess(payload) {
//   return {
//     type: types.GET_PRESENT_SUCCESS,
//     payload: payload,
//   };
// }
// export function getPresentDataError(error) {
//   return {
//     type: types.GET_PRESENT_ERROR,
//     payload: error,
//   };
// }

// export function deletePresentData(payload) {
//   return {
//     type: types.DELETE_PRESENT,
//     payload: payload,
//   };
// }
// export function deletePresentDataSuccess(payload) {
//   return {
//     type: types.DELETE_PRESENT_SUCCESS,
//     payload: payload,
//   };
// }
// export function deletePresentDataError(error) {
//   return {
//     type: types.DELETE_PRESENT_ERROR,
//     payload: error,
//   };
// }
