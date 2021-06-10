import React from "react";
import CronjLogo from "../../assets/cronj logo.png";

import { connect } from "react-redux";
import "./navbar.css";
import AccountCircle from "@material-ui/icons/AccountCircle";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { withRouter } from "react-router-dom";

import NavbarData from "./NavbarData";

function Navbar(props) {
  let email = localStorage.getItem("email");
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const submitClick = () => {
    localStorage.clear();
    props.history.push("/");
  };

  const dashboard = () => {
    props.history.push({
      pathname: "/dashboard",
    });
  };

  const attendance = () => {
    props.history.push({
      pathname: "/attendance",
    });
  };

  const calendar = () => {
    props.history.push({
      pathname: "/calendar",
    });
  };

  const Blog = () => {
    props.history.push({
      pathname: "/blog",
    });
  };

  const userprofile = () => {
    props.history.push({
      pathname: "/userprofile",
    });
  };
  const mystyle = {
    marginLeft: "-56vh",
  };

  return (
    <>
      <nav
        className="mb-1 navbar navbar-expand-lg navbar-dark info-color"
        style={{ boxShadow: "0px 3px 16px #00000029" }}
      >
        <a
          onClick={dashboard}
          className="navbar-brand"
          style={{ color: "#000000" }}
        >
          <img style={{ cursor: "pointer" }} src={CronjLogo} width="70px" />
          <span style={{ color: "white", fontSize: "21px", cursor: "pointer" }}>
            <strong>Cronj </strong>
          </span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent-4"
          aria-controls="navbarSupportedContent-4"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* <a
          onClick={dashboard}
          className="navbar-brand"
          style={{ color: "#000000" }}
        >
          <img style={{ cursor: "pointer" }} src={CronjLogo} width="70px" />
          <span style={{ color: "white", fontSize: "21px", cursor: "pointer" }}>
            <strong>CronJ</strong>
          </span>
        </a> */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent-4">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a
                onClick={userprofile}
                className="nav-link waves-effect waves-light"
              >
                Hello - {email}
              </a>
            </li>
            <li className="nav-item active">
              <a
                onClick={dashboard}
                className="nav-link waves-effect waves-light"
              >
                Dashboard
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link waves-effect waves-light"
                onClick={attendance}
              >
                Attendance
              </a>
            </li>
            <li className="nav-item active">
              <a onClick={Blog} className="nav-link waves-effect waves-light">
                Blogs
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link waves-effect waves-light"
                onClick={calendar}
              >
                Calendar
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle waves-effect waves-light"
                id="navbarDropdownMenuLink-4"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Profile
              </a>
              {auth && (
                <div
                  className="dropdown-menu dropdown-menu-right dropdown-info"
                  aria-labelledby="navbarDropdownMenuLink-4"
                  style={{ width: "15vh" }}
                >
                  <a
                    onClick={userprofile}
                    className="dropdown-item waves-effect waves-light"
                  >
                    My account
                  </a>

                  <a
                    className="dropdown-item waves-effect waves-light"
                    onClick={submitClick}
                  >
                    Log out
                  </a>
                </div>
              )}
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link text-light"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fa fa-bell"></i>
              </a>
              <ul className="dropdown-menu noti" style={mystyle}>
                <li className="head text-light bg-dark">
                  <div className="row">
                    <div className="col-lg-12 col-sm-12 col-12">
                      <a href="" className="float-right text-light">
                        Latest Notification
                      </a>
                    </div>
                  </div>
                </li>
                <li className="notification-box">
                  <NavbarData />
                </li>
              </ul>
            </li>

            <li className="nav-item active">
              <a
                className="dropdown-item waves-effect waves-light"
                onClick={submitClick}
              >
                Log out
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navbar));
