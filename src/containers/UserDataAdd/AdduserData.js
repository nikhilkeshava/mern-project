import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import TextFieldGroup from "../../components/TextArea/TextFieldGroup";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Title from "../Dashboard/Title";
import TableComponent from "../../components/Controls/Table/Table";
import Orders from "../Dashboard/Orders";

import * as UserActions from "../../store/User/UserAction";
import "./User.css";
const options = [
  {
    label: "Select role",
    value: "",
  },
  {
    label: "Software Developer",
    value: "software Developer",
  },
  {
    label: "Backend Developer",
    value: "Backend Developer",
  },
  {
    label: "Business Developer",
    value: "Business Developer",
  },
];
class AdduserData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      role: "",
      age: "",
      salary: "",
      skills: "",
      githublink: "",
      experience: "",
      bio: "",
      languageknown: " ",
      gender: "",

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

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();

    const profileData = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      role: this.state.role,
      age: this.state.age,
      salary: this.state.salary,
      skills: this.state.skills,
      githublink: this.state.githublink,
      experience: this.state.experience,
      bio: this.state.bio,
      languageknown: this.state.languageknown,
      gender: this.state.gender,
    };
    this.props.UserAction.addUser(profileData);
    this.props.history.push("/adduserdata");
  }
  render() {
    return (
      <div>
        <div class="container">
          <form onSubmit={this.onSubmit}>
            <React.Fragment>
              <Typography variant="h6" center gutterBottom>
                Add Users Data
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextFieldGroup
                    placeholder="UserName"
                    name="name"
                    value={this.state.name}
                    onChange={this.onChange}
                    info="Enter Your Name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextFieldGroup
                    placeholder="User Email"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                    info="Enter Your Email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextFieldGroup
                    placeholder="Enter Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                    info="Enter User Password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <select
                    class="form-select"
                    name="role"
                    value={this.state.role}
                    onChange={this.onChange}
                  >
                    {options.map((option) => (
                      <option value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextFieldGroup
                    placeholder="Enter Your Age"
                    name="age"
                    value={this.state.age}
                    onChange={this.onChange}
                    info="Enter User Age"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextFieldGroup
                    placeholder="Enter Salary"
                    name="salary"
                    value={this.state.salary}
                    onChange={this.onChange}
                    info="Enter User Salary"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextFieldGroup
                    placeholder="Enter User skills"
                    name="skills"
                    value={this.state.skills}
                    onChange={this.onChange}
                    info="Users Skills"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextFieldGroup
                    placeholder="Enter githublink"
                    name="githublink"
                    value={this.state.githublink}
                    onChange={this.onChange}
                    info="Enter githublink"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextFieldGroup
                    placeholder="Enter experience"
                    name="experience"
                    value={this.state.experience}
                    onChange={this.onChange}
                    info="Enter experience"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextFieldGroup
                    placeholder="Enter bio"
                    name="bio"
                    value={this.state.bio}
                    onChange={this.onChange}
                    info="Enter bio"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextFieldGroup
                    placeholder="Enter languageknown"
                    name="languageknown"
                    value={this.state.languageknown}
                    onChange={this.onChange}
                    info="Enter languageknown"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextFieldGroup
                    placeholder="Enter gender"
                    name="gender"
                    value={this.state.gender}
                    onChange={this.onChange}
                    info="Enter gender"
                  />
                </Grid>
                <Grid item xs={12}>
                  <input
                    type="submit"
                    value="Submit"
                    className="btn btn-info btn-block mt-4"
                  />
                </Grid>
              </Grid>
            </React.Fragment>
          </form>
        </div>
        <div style={{ marginTop: "10vh" }}>
          <React.Fragment>
            <Grid item xs={8} style={{ margin: "auto" }}>
              <Orders />
            </Grid>
          </React.Fragment>
        </div>
      </div>
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
    UserAction: bindActionCreators(UserActions, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AdduserData));
