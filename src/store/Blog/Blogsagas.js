import { call, put } from "redux-saga/effects";
import * as ACTIONS from "./BlogActions";
import { takeLatest } from "redux-saga/effects";
import * as TYPES from "./BlogTypes";
import apiJunction from "../../utils/api";
import serverAddress from "../../config";
import { store } from "react-notifications-component";

const Action = {
  payload: {},
};

export function* addBlogData(action) {
  try {
    const result = yield call(apiJunction.makeRequest, {
      method: "post",
      url: `${serverAddress}/api/blog/create`,
      body: action.payload,
    });
    if (result) {
      yield put(ACTIONS.addBlogDataSuccess(result));
      store.addNotification({
        title: "Success",
        message: "Blogs added successfully",
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
    yield put(ACTIONS.addBlogDataError(e.response));
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

function* getBlogData(action = Action) {
  console.log("Notification---saga-->");
  try {
    const result = yield call(apiJunction.makeRequest, {
      method: "get",
      url: `${serverAddress}/api/blog/get?page=${action.payload.page}&limit=${action.payload.limit}`,
      // body: action.payload,
    });
    if (result) {
      console.log("Notification--->", result);
      yield put(ACTIONS.getBlogDataSuccess(result));
    } else {
    }
  } catch (e) {
    if (e) {
      yield put(ACTIONS.getBlogDataError(e.response));
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

export function* BlogSaga() {
  yield takeLatest(TYPES.CREATE_BLOG, addBlogData);
  yield takeLatest(TYPES.GET_BLOG, getBlogData);
  // yield takeLatest(TYPES.DELETE_NOTIFICATION,  deleteNotificationData);
}
