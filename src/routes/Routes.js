import React, { Suspense } from "react";
import { Router, Switch } from "react-router-dom";
import history from "./History";
import * as LazyComponent from "../utils/LazyLoaded";
import Loader from "../components/Loader/Loader";

const Routes = ({}) => {
  return (
    <Suspense fallback={<Loader />}>
      <Router history={history}>
        <Switch>
          <LazyComponent.Login path="/login" exact />
          <LazyComponent.Dashboard path="/dashboard" exact />
          <LazyComponent.Attendance path="/attendance" exact />
          <LazyComponent.UserProfile path="/userprofile" exact />
          <LazyComponent.Notification path="/notification" exact />
          <LazyComponent.Calendar path="/calendar" exact />
          <LazyComponent.NavbarData path="/navbar" exact />
          <LazyComponent.Blog path="/blog" exact />
          <LazyComponent.Markp path="/markp" exact />
          <LazyComponent.NotFound path="/*" />
        </Switch>
      </Router>
    </Suspense>
  );
};

export default Routes;
