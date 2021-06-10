import * as types from "./NotificationTypes";

const INITIAL_STATE = {
  notificationData:[],
  isNotificationAdded:false,
  getNotificationData:[],
  isGetNotificationData:false,
  isdeleteNotificationData:false

};

export function NotificationReducer(state = INITIAL_STATE, action) {
    console.log('actionpayload---->',action)
    switch (action.type) {
        case types.CREATE_NOTIFICATION:

            return {
                ...state,
                isNotificationAdded:false
            };

        case types.CREATE_NOTIFICATION_SUCCESS:
            // console.log('NotificationReducer',action.payload)
            return {
                ...state,
                isNotificationAdded:true,
                NotificationData:action.payload
            };

        case types.CREATE_NOTIFICATION_ERROR:
            return {
                ...state,
                isNotificationAdded:false
            };

            case types.GET_NOTIFICATION:
                
                return {
                    ...state,
                   isGetNotificationData:false
                };
    
            case types.GET_NOTIFICATION_SUCCESS:
                return {
                    ...state,
                    getNotificationData:action.payload,
                    isGetNotificationData:true
                };
    
            case types.GET_NOTIFICATION_ERROR:
                return {
                    ...state,
                    isGetNotificationData:false
                };

            //     case types.DELETE_NOTIFICATION:

            //         return {
            //             ...state,
            //            isdeleteNotificationData:false
            //         };
        
            //     case types.DELETE_NOTIFICATION_SUCCESS:
            //         return {
            //             ...state,
            //             // deleteNotificationData:action.payload,
            //             isdeleteNotificationData:true
            //         };
        
            //     case types.DELETE_NOTIFICATION_ERROR:
            //         return {
            //             ...state,
            //             isdeleteNotificationData:false
            //         };
      

        default:
            return state;
    }
};