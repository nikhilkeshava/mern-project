import { call, put } from "redux-saga/effects";
import * as ACTIONS from "./UserAction";
import { takeLatest } from "redux-saga/effects";
import * as TYPES from "./UserTypes";
import apiJunction from "../../utils/api";
import { store } from "react-notifications-component";
import history from "../../routes/History";
import serverAddress from "../../config";

const Action = {
  payload: {},
};

export function* login(action = Action) {
  try {
    const result = yield call(apiJunction.login, {
      method: "post",
      url: `${serverAddress}/api/user/login`,
      body: action.payload,
    });
    if (result) {
      console.log("result--->", result);
      localStorage.setItem("id", result.data.id);
      localStorage.setItem("email", result.data.data.email);
      localStorage.setItem("role", result.data.data.role);
      localStorage.setItem("age", result.data.data.age);
      localStorage.setItem("name", result.data.data.name);
      localStorage.setItem("age", result.data.data.age);
      localStorage.setItem("salary", result.data.data.salary);
      localStorage.setItem("skills", result.data.data.skills);
      localStorage.setItem("githublink", result.data.data.githublink);
      localStorage.setItem("experience", result.data.data.experience);
      localStorage.setItem("bio", result.data.data.bio);
      localStorage.setItem("languageknown", result.data.data.languageknown);
      localStorage.setItem("gender", result.data.data.gender);
      localStorage.setItem("token", result.data.token);
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("last_refresh_time", new Date().getTime());
      yield put(ACTIONS.loginSuccess(result));
      store.addNotification({
        title: "Success",
        message: "Login successful",
        type: "success",
        container: "top-right",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: {
          duration: 2000,
        },
      });
      history.push("/dashboard");
    }
  } catch (e) {
    //  console.log("store", store1)
    store.addNotification({
      title: "Login Failed",
      message: "login failed",
      type: "danger",
      container: "top-right",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: {
        duration: 2000,
      },
    });
    console.log("error--->", e);
    // yield put(ACTIONS.login(e.response));
  }
}

function* logout(action = Action) {
  try {
    const result = yield call(apiJunction.makeRequest, {
      method: "post",
      url: `${serverAddress}/api/user/logout`,
      body: action.payload,
    });
    if (result) {
      console.log("logoutresult--->", result);
      yield put(ACTIONS.logoutSuccess(result));
    } else {
    }
  } catch (e) {
    if (e) {
      yield put(ACTIONS.logoutError(e.response));
    }
  }
}

function* getUser(action = Action) {
  console.log("user---saga-->");
  try {
    const result = yield call(apiJunction.makeRequest, {
      method: "get",
      url: `${serverAddress}/api/user/get?page=${action.payload.page}&limit=${action.payload.limit}`,
      body: action.payload,
    });
    if (result) {
      console.log("logoutresult--->", result);

      yield put(ACTIONS.getUserSuccess(result));
    } else {
    }
  } catch (e) {
    if (e) {
      yield put(ACTIONS.getUserError(e.response));
    }
  }
}

export function* addUser(action) {
  try {
    const result = yield call(apiJunction.makeRequest, {
      method: "post",
      url: `${serverAddress}/api/user/create`,
      body: action.payload,
    });
    if (result) {
      yield put(ACTIONS.addUserSuccess(result));
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
    yield put(ACTIONS.addUserError(e.response));
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

export function* deleteUserData(action) {
  console.log("action payload", action.payload.id);
  try {
    const result = yield call(apiJunction.makeRequest, {
      method: "delete",
      url: `${serverAddress}/api/user/deleteUserById/${action.payload.id}`,
      body: action.payload,
    });
    if (result) {
      console.log("from Delete", result);

      yield put(ACTIONS.deleteUserDataSuccess(result));
      store.addNotification({
        title: "Success",
        message: "User deleted successfully",
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
    yield put(ACTIONS.deleteUserDataError(e));
    store.addNotification({
      title: "Error",
      message: "Error Occured!",
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

export function* updateUser(action) {
  let body;
  if (action.payload.password) {
    body = {
      name: action.payload.name,
      email: action.payload.email,
      password: action.payload.password,
      role: action.payload.role,
    };
  } else {
    body = {
      name: action.payload.name,
      email: action.payload.email,
      role: action.payload.role,
    };
  }
  try {
    const result = yield call(apiJunction.makeRequest, {
      method: "patch",
      url: `${serverAddress}/api/user/updateUser/${action.payload.id}`,
      body: body,
    });
    if (result) {
      yield put(ACTIONS.updateUserSuccess(result));
      store.addNotification({
        title: "Success",
        message: "User Updated successfully",
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
    yield put(ACTIONS.updateUserError(e.response));
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

export function* UserSaga() {
  yield takeLatest(TYPES.LOGIN, login);
  yield takeLatest(TYPES.LOGOUT, logout);
  yield takeLatest(TYPES.GET_USER, getUser);
  yield takeLatest(TYPES.CREATE_USER, addUser);
  yield takeLatest(TYPES.DELETE_USER_DATA, deleteUserData);
  yield takeLatest(TYPES.UPDATE_USER, updateUser);
}
