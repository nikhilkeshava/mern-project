

import * as types from "./UserTypes";
const INITIAL_STATE = {
    CurrentUser: [],
    isLoggedIn: false,
    isGetUserData:false,
    getUserData:[],
    isUserDataAdded:false,
    isDeletedUserData: false,
    isUserDataUpdated:false
}

export function UserReducer(state = INITIAL_STATE, action) {
    // console.log('actionpayload---->',action)
    switch (action.type) {
     
       
        case types.LOGIN:

            let isLoggedIn = action.payload.status === 200 ? true : false
            return {
                ...state,
                // CurrentUser:action.payload.data,
                isLoggedIn: isLoggedIn,
            };
        case types.LOGIN_SUCCESS:

            let isLoggedIn1 = action.payload.status === 200 ? true : false
            return {
                ...state,
                CurrentUser: action.payload.data,
                isLoggedIn: isLoggedIn1,
            };

            case types.LOGOUT:
               console.log('logoutttreducer',action.payload)
                return {
                    ...state,
                    CurrentUser: [],
                    isLoggedIn: false,
                };
        
                case types.GET_USER:

                    return {
                        ...state,
                       isGetUserData:false
                    };
        
                case types.GET_USER_SUCCESS:
                    return {
                        ...state,
                        getUserData:action.payload,
                        isGetUserData:true
                    };
        
                case types.GET_USER_ERROR:
                    return {
                        ...state,
                        isGetUserData:false
                    };
      
            case types.CREATE_USER:

            return {
                ...state,
                isUserDataAdded: false
            };

        case types.CREATE_USER_SUCCESS:
            return {
                ...state,
                isUserDataAdded: true
            };

        case types.CREATE_USER_ERROR:
            return {
                ...state,
                isUserDataAdded: false
            };


            case types.DELETE_USER_DATA:

                return {
                    ...state,
                    isDeletedUserData: false
                };
    
            case types.DELETE_USER_DATA_SUCCESS:
                return {
                    ...state,
                    isDeletedUserData: true
                };
    
            case types.DELETE_USER_DATA_ERROR:
                return {
                    ...state,
                    isDeletedUserData: false
                };
            case types.UPDATE_USER:

            return {
                ...state,
                isUserDataUpdated: false
            };

        case types.UPDATE_USER_SUCCESS:
            return {
                ...state,
                isUserDataUpdated: true
            };

        case types.UPDATE_USER_ERROR:
            return {
                ...state,
                isUserDataUpdated: false
            };

        default:
            return state;
    }
};
