import * as types from "./BlogTypes";

const INITIAL_STATE = {
  blogData: [],
  isBlogAdded: false,
  getBlogData: [],
  isGetBlogData: false,
  isdeleteBlogData: false,
};

export function BlogReducer(state = INITIAL_STATE, action) {
  console.log("Blogactionpayload---->", action);
  switch (action.type) {
    case types.CREATE_BLOG:
      return {
        ...state,
        isBlogAdded: false,
      };

    case types.CREATE_BLOG_SUCCESS:
      // console.log('BlogReducer',action.payload)
      return {
        ...state,
        isBlogAdded: true,
        BlogData: action.payload,
      };

    case types.CREATE_BLOG_ERROR:
      return {
        ...state,
        isBlogAdded: false,
      };

    case types.GET_BLOG:
      return {
        ...state,
        isGetBlogData: false,
      };

    case types.GET_BLOG_SUCCESS:
      return {
        ...state,
        getBlogData: action.payload,
        isGetBlogData: true,
      };

    case types.GET_BLOG_ERROR:
      return {
        ...state,
        isGetBlogData: false,
      };

    //     case types.DELETE_Blog:

    //         return {
    //             ...state,
    //            isdeleteBlogData:false
    //         };

    //     case types.DELETE_Blog_SUCCESS:
    //         return {
    //             ...state,
    //             // deleteBlogData:action.payload,
    //             isdeleteBlogData:true
    //         };

    //     case types.DELETE_Blog_ERROR:
    //         return {
    //             ...state,
    //             isdeleteBlogData:false
    //         };

    default:
      return state;
  }
}
