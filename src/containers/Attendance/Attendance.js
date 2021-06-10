import React, { Component } from "react";
import "./attendance.css";

import { Card } from "@material-ui/core";
import * as AttendanceAction from "../../store/Attendance/AttendanceAction";
import TextFieldGroup from "../../components/TextArea/TextFieldGroup";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

export class Attendance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      date: "",
      subject: "",
      message: "",
      errors: {},
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();
    console.log("message");

    const profileData = {
      name: this.state.name,
      date: this.state.date,
      subject: this.state.subject,
      message: this.state.message,
    };
    this.props.AttendanceAction.addAbsentData(profileData);
    this.props.history.push("/attendance");
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="atn-main-page">
        {/* <div className="atn-header">
          <div>
            <strong className="atn-leave">Leaves Remanining :</strong>
            <span className="atn-leave-style">25</span>
          </div>
          <div>
            <strong className="atn-leave-1">Leaves Taken :</strong>
            <span className="atn-leave-style-1">4</span>
          </div>
        </div> */}

        <div className="atn-header-1">
          <div>
            <h2>Welcome to the attendance management system Portal</h2>
            <h5
              style={{
                color: "darkslategrey",
                paddingLeft: "55px",
                textAlign: "center",
              }}
            >
              Fill the form to Request Leave
            </h5>
          </div>
        </div>

        <div className="container">
          <Card className="atn-card">
            <form onSubmit={this.onSubmit}>
              <div className="atn-mail">
                <TextFieldGroup
                  placeholder="name"
                  name="name"
                  value={this.state.name}
                  onChange={this.onChange}
                  info="name"
                />
                <div className="atn-subject">
                  <p>
                    <strong>Enter today date</strong>
                  </p>
                  <TextFieldGroup
                    placeholder="date"
                    name="date"
                    value={this.state.date}
                    onChange={this.onChange}
                    info="date"
                  />
                </div>

                <div className="atn-subject">
                  <p>
                    <strong>Enter Subject</strong>
                  </p>
                  <TextFieldGroup
                    placeholder="subject"
                    name="subject"
                    value={this.state.subject}
                    onChange={this.onChange}
                    info="subject"
                  />
                </div>

                <div className="atn-desc">
                  <p>
                    <strong>Reason for leave?</strong>
                  </p>
                  <TextFieldGroup
                    placeholder="message"
                    name="message"
                    value={this.state.message}
                    onChange={this.onChange}
                    info="message"
                  />
                </div>

                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-info btn-block mt-4"
                />
              </div>
            </form>
          </Card>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    AttendanceReducer: state.AttendanceReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    AttendanceAction: bindActionCreators(AttendanceAction, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Attendance));
