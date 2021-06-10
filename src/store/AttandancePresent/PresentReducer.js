import * as types from "./PresentTypes";

const INITIAL_STATE = {
  presentData: [],
  isPresentAdded: false,
  // getPresentData: [],
  // isGetPresentData: false,
  // isdeletePresentDatafalse,
};

export function PresentReducer(state = INITIAL_STATE, action) {
  console.log("actionpayload for present---->", action);
  switch (action.type) {
    case types.CREATE_PRESENT:
      return {
        ...state,
        isPresentAdded: false,
      };

    case types.CREATE_PRESENT_SUCCESS:
      // console.log('PresentReducer',action.payload)
      return {
        ...state,
        isPresentAdded: true,
        presentData: action.payload,
      };

    case types.CREATE_PRESENT_ERROR:
      return {
        ...state,
        isPresentAdded: false,
      };

    // case types.GET_PRESENT:

    //     return {
    //         ...state,
    //        isGetPresentData:false
    //     };

    // case types.GET_PRESENT_SUCCESS:
    //     return {
    //         ...state,
    //         getPresentData:action.payload,
    //         isGetPresentData:true
    //     };

    // case types.GET_PRESENT_ERROR:
    //     return {
    //         ...state,
    //         isGetPresentData:false
    //     };

    //     case types.DELETE_PRESENT:

    //         return {
    //             ...state,
    //           isdeletePresentDatafalse
    //         };

    //     case types.DELETE_PRESENT_SUCCESS:
    //         return {
    //             ...state,
    //             // deleteHolidayData:action.payload,
    //            isdeletePresentDatatrue
    //         };

    //     case types.DELETE_PRESENT_ERROR:
    //         return {
    //             ...state,
    //            isdeletePresentDatafalse
    //         };

    default:
      return state;
  }
}
