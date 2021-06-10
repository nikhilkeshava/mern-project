import * as types from "./HolidayTypes";

export function addHolidayData(payload) {
    console.log('addHoliday',payload)
  return {
    type: types.CREATE_HOLIDAY,
    payload: payload
  };
}
export function addHolidayDataSuccess(payload) {
  return {
    type: types.CREATE_HOLIDAY_SUCCESS,
    payload: payload
  };
}
export function addHolidayDataError(error) {
  return {
    type: types.CREATE_HOLIDAY_ERROR,
    payload:error
  };
}

export function getHolidayData(payload) {
    return {
      type: types.GET_HOLIDAY,
      payload: payload
    };
  }
  export function getHolidayDataSuccess(payload) {
    return {
      type: types.GET_HOLIDAY_SUCCESS,
      payload: payload
    };
  }
  export function getHolidayDataError(error) {
    return {
      type: types.GET_HOLIDAY_ERROR,
      payload:error
    };
  }

  export function deleteHolidayData(payload) {
    return {
      type: types.DELETE_HOLIDAY,
      payload: payload
    };
  }
  export function deleteHolidayDataSuccess(payload) {
    return {
      type: types.DELETE_HOLIDAY_SUCCESS,
      payload: payload
    };
  }
  export function deleteHolidayDataError(error) {
    return {
      type: types.DELETE_HOLIDAY_ERROR,
      payload:error
    };
  }
