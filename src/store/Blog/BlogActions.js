import * as types from "./BlogTypes";

export function addBlogData(payload) {
    // console.log('addNotification',payload)
  return {
    type: types.CREATE_BLOG,
    payload: payload
  };
}
export function addBlogDataSuccess(payload) {
  return {
    type: types.CREATE_BLOG_SUCCESS,
    payload: payload
  };
}
export function addBlogDataError(error) {
  return {
    type: types.CREATE_BLOG_ERROR,
    payload:error
  };
}

export function getBlogData(payload) {
    return {
      type: types.GET_BLOG,
      payload: payload
    };
  }
  export function getBlogDataSuccess(payload) {
    return {
      type: types.GET_BLOG_SUCCESS,
      payload: payload
    };
  }
  export function getBlogDataError(error) {
    return {
      type: types.GET_BLOG_ERROR,
      payload:error
    };
  }