import { call, put } from "redux-saga/effects";
import * as ACTIONS from "./PresentAction";
import { takeLatest } from "redux-saga/effects";
import * as TYPES from "./PresentTypes";
import apiJunction from "../../utils/api";
import serverAddress from "../../config";
import { store } from "react-notifications-component";

const Action = {
  payload: {},
};

export function* addPresentData(action) {
  console.log("Present---saga-->");
  try {
    const result = yield call(apiJunction.makeRequest, {
      method: "post",
      url: `${serverAddress}/api/create`,
      body: action.payload,
    });
    if (result) {
      yield put(ACTIONS.addPresentDataSuccess(result));
      store.addNotification({
        title: "Success",
        message: "Holiday added successfully",
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
    yield put(ACTIONS.addPresentDataError(e.response));
    console.log("error--->", e.response);
    //  store.addNotification({
    //   title: "Error",
    //   message:e.response.data.message,
    //   type: "danger",
    //   container: "top-right",
    //   animationIn: ["animated", "fadeIn"],
    //   animationOut: ["animated", "fadeOut"],
    //   dismiss: {
    //     duration: 2000,
    //   },
    // });
  }
}

// function* getHolidayData(action = Action) {
//   console.log("holiday---saga-->");
//   try {
//     const result = yield call(apiJunction.makeRequest, {
//       method: "get",
//       url: `${serverAddress}/api/Holiday/get?page=${action.payload.page}&limit=${action.payload.limit}`,
//       // body: action.payload,
//     });
//     if (result) {
//       console.log("holiday--->", result);
//       yield put(ACTIONS.getHolidayDataSuccess(result));
//     } else {
//     }
//   } catch (e) {
//     if (e) {
//       yield put(ACTIONS.getHolidayDataError(e.response));
//     }
//   }
// }

// export function* deleteHolidayData(action) {
//   // console.log('callingFeatureSaga1--->',action)

//   try {
//     const result = yield call(apiJunction.makeRequest, {
//       method: "patch",
//       url: `${serverAddress}/api/holiday/delete/${action.payload.id}`,
//       body: action.payload.data,
//     });
//     if (result) {
//       yield put(ACTIONS.deleteHolidayDataSuccess(result));
//       store.addNotification({
//         title: "Success",
//         message: "Holiday Deleted successfully!!",
//         type: "success",
//         container: "top-right",
//         animationIn: ["animated", "fadeIn"],
//         animationOut: ["animated", "fadeOut"],
//         dismiss: {
//           duration: 2000,
//         },
//       });
//     }
//   } catch (e) {
//     yield put(ACTIONS.deleteHolidayDataError(e.response));
//     store.addNotification({
//       title: "Error",
//       message: e.response,
//       type: "danger",
//       container: "top-right",
//       animationIn: ["animated", "fadeIn"],
//       animationOut: ["animated", "fadeOut"],
//       dismiss: {
//         duration: 2000,
//       },
//     });
//   }
// }

export function* PresentSaga() {
  yield takeLatest(TYPES.CREATE_PRESENT, addPresentData);
  // yield takeLatest(TYPES.GET_HOLIDAY, getHolidayData);
  // yield takeLatest(TYPES.DELETE_HOLIDAY, deleteHolidayData);
}
