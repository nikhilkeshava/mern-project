import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import ThemeApp from "./Theme";
import 'react-notifications-component/dist/theme.css';
import ReactNotification from 'react-notifications-component'


ReactDOM.render(
  <Provider store={store}>
    <ReactNotification />
    <ThemeApp />
  </Provider>,
  document.querySelector('#root')
);
