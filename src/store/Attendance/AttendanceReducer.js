import * as types from "./AttendanceTypes";

const INITIAL_STATE = {
  absentData: [],
  isAbsentAdded: false,
  getabsentData: [],
  isGetAbsentData: false,
  //   isdeleteAbsentData:false
};

export function AttendanceReducer(state = INITIAL_STATE, action) {
  console.log("actionpayload---->", action);
  switch (action.type) {
    case types.CREATE_ABSENT:
      return {
        ...state,
        isAbsentAdded: false,
      };

    case types.CREATE_ABSENT_SUCCESS:
      return {
        ...state,
        isAbsentAdded: true,
        absentData: action.payload,
      };

    case types.CREATE_ABSENT_ERROR:
      return {
        ...state,
        isAbsentAdded: false,
      };

    case types.GET_ABSENT:
      return {
        ...state,
        isGetAbsentData: false,
      };

    case types.GET_ABSENT_SUCCESS:
      return {
        ...state,
        getAbsentData: action.payload,
        isGetAbsentData: true,
      };

    case types.GET_ABSENT_ERROR:
      return {
        ...state,
        isGetAbsentData: false,
      };

    default:
      return state;
  }
}
