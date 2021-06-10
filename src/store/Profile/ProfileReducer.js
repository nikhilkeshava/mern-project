import * as types from "./ProfileType";

const INITIAL_STATE = {
  profileData:[],
  isProfileAdded:false,
  getProfileData:[],
  isGetProfileData:false,
  isdeleteProfileData:false

};

export function ProfileReducer(state = INITIAL_STATE, action) {
    console.log('actionpayload---->',action)
    switch (action.type) {
       

            case types.GET_PROFILE:
                
                return {
                    ...state,
                   isGetProfileData:false
                };
    
            case types.GET_PROFILE_SUCCESS:
                return {
                    ...state,
                    getProfileData:action.payload,
                    isGetProfileData:true
                };
    
            case types.GET_PROFILE_ERROR:
                return {
                    ...state,
                    isGetProfileData:false
                };

              

        default:
            return state;
    }
};