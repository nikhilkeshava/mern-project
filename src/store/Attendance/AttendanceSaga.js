import { call, put } from "redux-saga/effects";
import * as ACTIONS from "./AttendanceAction";
import { takeLatest } from "redux-saga/effects";
import * as TYPES from "./AttendanceTypes";
import apiJunction from "../../utils/api";
import serverAddress from "../../config";
import { store } from "react-notifications-component";

const Action = {
  payload: {},
};

export function* addAbsentData(action) {
  try {
    const result = yield call(apiJunction.makeRequest, {
      method: "post",
      url: `${serverAddress}/api/attendence/create`,
      body: action.payload,
    });
    if (result) {
      yield put(ACTIONS.addAbsentDataSuccess(result));
      store.addNotification({
        title: "Success",
        message: "Request added successfully",
        type: "success",
        container: "top-right",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: {
          duration: 2000,
        },
      });
    }
  } catch (e) {
    yield put(ACTIONS.addAbsentDataError(e.response));
    console.log("error--->", e.response);
    store.addNotification({
      title: "Error",
      message: e.response.data.message,
      type: "danger",
      container: "top-right",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: {
        duration: 2000,
      },
    });
  }
}

function* getAbsentData(action = Action) {
  console.log("absent---saga-->");
  try {
    const result = yield call(apiJunction.makeRequest, {
      method: "get",
      url: `${serverAddress}/api/attendence/get?page=${action.payload.page}&limit=${action.payload.limit}`,
      // body: action.payload,
    });
    if (result) {
      console.log("absent--->", result);
      yield put(ACTIONS.getAbsentDataSuccess(result));
    } else {
    }
  } catch (e) {
    if (e) {
      yield put(ACTIONS.getAbsentDataError(e.response));
    }
  }
}

//   export function* deleteHolidayData(action) {
//     // console.log('callingFeatureSaga1--->',action)

//     try {
//       const result = yield call(apiJunction.makeRequest, {
//         method: "patch",
//         url: `${serverAddress}/api/holiday/delete/${action.payload.id}`,
//         body: action.payload.data,
//       });
//       if (result) {
//         yield put( ACTIONS.deleteHolidayDataSuccess(result));
//         store.addNotification({
//           title: "Success",
//           message: "Holiday Deleted successfully!!",
//           type: "success",
//           container: "top-right",
//           animationIn: ["animated", "fadeIn"],
//           animationOut: ["animated", "fadeOut"],
//           dismiss: {
//             duration: 2000,
//           },
//         });
//       }
//     } catch (e) {
//        yield put( ACTIONS.deleteHolidayDataError(e.response));
//        store.addNotification({
//         title: "Error",
//         message:e.response,
//         type: "danger",
//         container: "top-right",
//         animationIn: ["animated", "fadeIn"],
//         animationOut: ["animated", "fadeOut"],
//         dismiss: {
//           duration: 2000,
//         },
//       });
//     }
//   }

export function* AttendanceSaga() {
  yield takeLatest(TYPES.CREATE_ABSENT, addAbsentData);
  yield takeLatest(TYPES.GET_ABSENT, getAbsentData);
  //   yield takeLatest(TYPES.DELETE_HOLIDAY,  deleteHolidayData);
}
