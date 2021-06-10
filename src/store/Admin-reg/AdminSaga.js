import { call, put } from "redux-saga/effects";
import * as ACTIONS from "./AdminAction";
import { takeLatest } from "redux-saga/effects";
import * as TYPES from "./AdminTypes";
import apiJunction from "../../utils/api";
import { store } from "react-notifications-component";
import history from "../../routes/History";
import serverAddress from "../../config";

const Action = {
  payload: {},
};
export function* addAdmin(action) {
  try {
    const result = yield call(apiJunction.makeRequest, {
      method: "post",
      url: `${serverAddress}/api/admin/create`,
      body: action.payload,
    });
    if (result) {
      yield put(ACTIONS.addAdminSuccess(result));
      store.addNotification({
        title: "Success",
        message: "User added successfully",
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
    yield put(ACTIONS.addAdminError(e.response));
    console.log("error--->", e.response.data);
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

export function* Adminsaga() {
  yield takeLatest(TYPES.CREATE_ADMIN, addAdmin);
}
