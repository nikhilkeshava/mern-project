import { combineReducers } from "redux";
import loader from "../Loader/LoaderReducer";
import { UserReducer } from "../User/UserReducer";
import { HolidayReducer } from "../Holiday/HolidayReducer";
import { PresentReducer } from "../AttandancePresent/PresentReducer";
import { AttendanceReducer } from "../Attendance/AttendanceReducer";

export default combineReducers({
  loader,
  UserReducer,
  HolidayReducer,
  PresentReducer,
  AttendanceReducer,
});
