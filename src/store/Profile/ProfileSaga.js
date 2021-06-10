import { call, put } from "redux-saga/effects";
import * as ACTIONS from "./ProfileAction";
import { takeLatest } from "redux-saga/effects";
import * as TYPES from "./ProfileType";
import apiJunction from "../../utils/api";
import serverAddress from "../../config";
import { store } from "react-notifications-component";

const Action = {
  payload: {},
};

function* getProfileData(action = Action) {
  console.log("profile---saga-->");
  try {
    const result = yield call(apiJunction.makeRequest, {
      method: "get",
      url: `${serverAddress}/api/user/get?page=${action.payload.page}&limit=${action.payload.limit}`,
      // body: action.payload,
    });
    if (result) {
      console.log("profile--->", result);
      yield put(ACTIONS.getProfileDataSuccess(result));
    } else {
    }
  } catch (e) {
    if (e) {
      yield put(ACTIONS.getProfileDataError(e.response));
    }
  }
}

export function* HolidaySaga() {
  yield takeLatest(TYPES.GET_PROFILE, getProfileData);
}
