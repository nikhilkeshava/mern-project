import * as types from "./ProfileType";

export function getProfileData(payload) {
  return {
    type: types.GET_PROFILE,
    payload: payload,
  };
}
export function getProfileDataSuccess(payload) {
  return {
    type: types.GET_PROFILE_SUCCESS,
    payload: payload,
  };
}
export function getProfileDataError(error) {
  return {
    type: types.GET_PROFILE_ERROR,
    payload: error,
  };
}
