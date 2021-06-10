import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as Actions from "../../store/Admin-reg/AdminAction";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import logo from "./images/image1.png";
import TextFieldGroup from "../../components/TextArea/TextFieldGroup";
import Container from "@material-ui/core/Container";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://cronj.com/">
        Cronj Technologies
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      errors: {},
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  state = {
    value: "",
    page: 1,
    limit: 2,
    clicks: 4,
    show: true,
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
  onSubmit(e) {
    e.preventDefault();

    const profileData = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    };
    this.props.AdminAction.addAdmin(profileData);
    this.props.history.push("/login");
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div class="container" style={{ width: "70vh" }}>
        <form onSubmit={this.onSubmit}>
          <React.Fragment>
            <Typography variant="h6" center gutterBottom>
              Add Admin
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextFieldGroup
                  placeholder="eventname"
                  name="name"
                  value={this.state.name}
                  onChange={this.onChange}
                  info="Enter  Name"
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextFieldGroup
                  placeholder="Date"
                  name="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  info="Enter email"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextFieldGroup
                  placeholder="Date"
                  name="password"
                  value={this.state.password}
                  onChange={this.onChange}
                  info="Enter password"
                />
              </Grid>
              <input
                type="submit"
                value="Submit"
                className="btn btn-info btn-block mt-4"
              />
            </Grid>
          </React.Fragment>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  AdminReducer: state.AdminReducer,
});

function mapDispatchToProps(dispatch) {
  return {
    AdminAction: bindActionCreators(Actions, dispatch),
    // candidateActions: bindActionCreators(Actions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Register));
