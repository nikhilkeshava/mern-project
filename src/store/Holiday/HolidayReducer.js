import * as types from "./HolidayTypes";

const INITIAL_STATE = {
  holidayData:[],
  isHolidayAdded:false,
  getHolidayData:[],
  isGetHolidayData:false,
  isdeleteHolidayData:false

};

export function HolidayReducer(state = INITIAL_STATE, action) {
    console.log('actionpayload---->',action)
    switch (action.type) {
        case types.CREATE_HOLIDAY:

            return {
                ...state,
                isHolidayAdded:false
            };

        case types.CREATE_HOLIDAY_SUCCESS:
            // console.log('HolidayReducer',action.payload)
            return {
                ...state,
                isHolidayAdded:true,
                holidayData:action.payload
            };

        case types.CREATE_HOLIDAY_ERROR:
            return {
                ...state,
                isHolidayAdded:false
            };

            case types.GET_HOLIDAY:
                
                return {
                    ...state,
                   isGetHolidayData:false
                };
    
            case types.GET_HOLIDAY_SUCCESS:
                return {
                    ...state,
                    getHolidayData:action.payload,
                    isGetHolidayData:true
                };
    
            case types.GET_HOLIDAY_ERROR:
                return {
                    ...state,
                    isGetHolidayData:false
                };

                case types.DELETE_HOLIDAY:

                    return {
                        ...state,
                       isdeleteHolidayData:false
                    };
        
                case types.DELETE_HOLIDAY_SUCCESS:
                    return {
                        ...state,
                        // deleteHolidayData:action.payload,
                        isdeleteHolidayData:true
                    };
        
                case types.DELETE_HOLIDAY_ERROR:
                    return {
                        ...state,
                        isdeleteHolidayData:false
                    };
      

        default:
            return state;
    }
};