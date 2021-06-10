import { all } from "redux-saga/effects";
import { UserSaga } from "../User/UserSaga";
import { HolidaySaga } from "../Holiday/HolidaySaga";
import { PresentSaga } from "../AttandancePresent/PresentSaga";
import { AttendanceSaga } from "../Attendance/AttendanceSaga";

export function* watchSagas() {
  //Combine sagas with

  yield all([UserSaga(), HolidaySaga(), AttendanceSaga(), PresentSaga()]);
  // OR
  // yield all([fork(FeatureSaga1)]);
}
