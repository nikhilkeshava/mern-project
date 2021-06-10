import serverAddress from "../../config";
import React, { Component } from "react";
import "./style.css";
import CronjLogo from "../../assets/profile.jpg";
import * as UserActions from "../../store/User/UserAction";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import axios from "axios";
class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
    };
  }

  componentDidMount() {
    const payload = {
      email: this.state.email,
    };
    this.props.UserActions.getUser(payload);
  }

  render() {
    let email = localStorage.getItem("email");

    let role = localStorage.getItem("role");
    let age = localStorage.getItem("age");
    let name = localStorage.getItem("name");
    let salary = localStorage.getItem("salary");
    let skills = localStorage.getItem("skills");
    let gitlink = localStorage.getItem("githublink");
    let exp = localStorage.getItem("experience");
    let bio = localStorage.getItem("bio");
    let lang = localStorage.getItem("languageknown");
    let gender = localStorage.getItem("gender");
    return (
      <>
        <div className="container emp-profile">
          <form method="post">
            <div className="row">
              <div className="col-md-4">
                <div className="profile-img">
                  <img src={CronjLogo} alt="cronj" title="cronj profile" />
                  <div className="file btn btn-lg btn-primary">
                    Change Photo
                    <input type="file" name="file" />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="profile-head">
                  <h5>{email}</h5>
                  <h6>{role} at Cronj Technologies</h6>
                  <p className="proile-rating">
                    Number of days presented : <span>10</span>
                  </p>
                  <p className="proile-rating">
                    Number of days Absent : <span>2</span>
                  </p>
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="home-tab"
                        data-toggle="tab"
                        href="#home"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                      >
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="profile-tab"
                        data-toggle="tab"
                        href="#profile"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                      >
                        Timeline
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-2">
                <input
                  type="submit"
                  className="profile-edit-btn"
                  name="btnAddMore"
                  value="Edit Profile"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="profile-work">
                  <p>WORK LINK</p>
                  <a href="">Website Link - notes4free.in</a>
                  <br />
                  <a href="">github link - {gitlink}</a>
                  <br />
                  <a href="">Email -{email} </a>
                  <p>SKILLS</p>
                  <a href="">{skills}</a>
                  <br />

                  <br />
                </div>
              </div>
              <div className="col-md-8">
                <div className="tab-content profile-tab" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <label>User Id</label>
                      </div>
                      <div className="col-md-6">
                        <p>{name}-cronj</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Name</label>
                      </div>
                      <div className="col-md-6">
                        <p>{name}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Email</label>
                      </div>
                      <div className="col-md-6">
                        <p>{email}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Phone</label>
                      </div>
                      <div className="col-md-6">
                        <p>+91 9964716807</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Profession</label>
                      </div>
                      <div className="col-md-6">
                        <p>{role} at Cronj Technologies</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <label>Experience</label>
                      </div>
                      <div className="col-md-6">
                        <p>{exp} Years</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Salary</label>
                      </div>
                      <div className="col-md-6">
                        <p>Rs.{salary}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Age</label>
                      </div>
                      <div className="col-md-6">
                        <p>{age} Years</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Language Know</label>
                      </div>
                      <div className="col-md-6">
                        <p>{lang}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Gender</label>
                      </div>
                      <div className="col-md-6">
                        <p>{gender}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <label>Your Bio</label>
                        <br />
                        <p>{bio}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    UserReducer: state.UserReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    UserActions: bindActionCreators(UserActions, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(UserProfile));
