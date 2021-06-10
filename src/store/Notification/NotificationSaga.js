import { call, put } from "redux-saga/effects";
import * as ACTIONS from "./NotificationAction";
import { takeLatest } from "redux-saga/effects";
import * as TYPES from "./NotificationTypes";
import apiJunction from "../../utils/api";
import serverAddress from "../../config";
import { store } from "react-notifications-component";

const Action = {
  payload: {},
};

export function* addNotificationData(action) {
  try {
    const result = yield call(apiJunction.makeRequest, {
      method: "post",
      url: `${serverAddress}/api/Notification/create`,
      body: action.payload,
    });
    if (result) {
      yield put(ACTIONS.addNotificationDataSuccess(result));
      store.addNotification({
        title: "Success",
        message: "Notification added successfully",
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
    yield put(ACTIONS.addNotificationDataError(e.response));
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

function* getNotificationData(action = Action) {
  console.log("Notification---saga-->");
  try {
    const result = yield call(apiJunction.makeRequest, {
      method: "get",
      url: `${serverAddress}/api/Notification/get?page=${action.payload.page}&limit=${action.payload.limit}`,
      // body: action.payload,
    });
    if (result) {
      console.log("Notification--->", result);
      yield put(ACTIONS.getNotificationDataSuccess(result));
    } else {
    }
  } catch (e) {
    if (e) {
      yield put(ACTIONS.getNotificationDataError(e.response));
    }
  }
}

//   export function* deleteNotificationData(action) {
//     // console.log('callingFeatureSaga1--->',action)

//     try {
//       const result = yield call(apiJunction.makeRequest, {
//         method: "patch",
//         url: `${serverAddress}/api/Notification/delete/${action.payload.id}`,
//         body: action.payload.data,
//       });
//       if (result) {
//         yield put( ACTIONS.deleteNotificationDataSuccess(result));
//         store.addNotification({
//           title: "Success",
//           message: "Notification Deleted successfully!!",
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
//        yield put( ACTIONS.deleteNotificationDataError(e.response));
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

export function* NotificationSaga() {
  yield takeLatest(TYPES.CREATE_NOTIFICATION, addNotificationData);
  yield takeLatest(TYPES.GET_NOTIFICATION, getNotificationData);
  // yield takeLatest(TYPES.DELETE_NOTIFICATION,  deleteNotificationData);
}
