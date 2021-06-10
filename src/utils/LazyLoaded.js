import React from "react";

export const Dashboard = React.lazy(() =>
  import("../containers/Dashboard/dashboard")
);
export const Login = React.lazy(() => import("../containers/Login/Login"));
export const Attendance = React.lazy(() =>
  import("../containers/Attendance/Attendance")
);
export const UserProfile = React.lazy(() =>
  import("../containers/UserProfile/UserProfile")
);
export const Notification = React.lazy(() =>
  import("../containers/Notification/Notification")
);
export const Calendar = React.lazy(() =>
  import("../containers/Calendar/Calendar")
);
export const NavbarData = React.lazy(() =>
  import("../components/Navbar/NavbarData")
);
export const Blog = React.lazy(() => import("../containers/Blog/Blog"));
export const Markp = React.lazy(() => import("../containers/Dashboard/Markp"));
export const NotFound = React.lazy(() =>
  import("../components/NotFound/NotFound")
);
