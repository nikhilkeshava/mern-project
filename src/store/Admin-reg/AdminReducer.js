import * as types from "./AdminTypes";
const INITIAL_STATE = {
  CurrentUser: [],
  isLoggedIn: false,
  isGetUserData: false,
  getUserData: [],
  isUserDataAdded: false,
  isDeletedUserData: false,
  isUserDataUpdated: false,
};

export function AdminReducer(state = INITIAL_STATE, action) {
  // console.log('actionpayload---->',action)
  switch (action.type) {
    case types.CREATE_ADMIN:
      return {
        ...state,
        isUserDataAdded: false,
      };

    case types.CREATE_ADMIN_SUCCESS:
      return {
        ...state,
        isUserDataAdded: true,
      };

    case types.CREATE_ADMIN_ERROR:
      return {
        ...state,
        isUserDataAdded: false,
      };

    default:
      return state;
  }
}
