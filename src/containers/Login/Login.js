import React from "react";
import { connect } from "react-redux";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { withRouter } from "react-router-dom";
import logo from "./images/image1.png";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
  InputAdornment,
} from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";
import { AccountCircle } from "@material-ui/icons";
import classes from "./login.module.css";
import { bindActionCreators } from "redux";
import * as Actions from "../../store/User/UserAction";

function Copyright() {
  return (
    <Typography
      variant="body2"
      color="textSecondary"
      align="center"
      style={{ marginBottom: "0px" }}
    >
      {"Copyright © "}
      <Link color="inherit" href="#">
        CronJ Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

class Login extends React.Component {
  state = {
    email: "",
    emailError: "",
    password: "",
    passwordError: "",
    userNameError: "",
    checkedG: true,
  };

  handleChecked = (event) => {
    this.setState({
      checkedG: event.target.checked,
    });
  };

  handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  handleChange = (e, name) => {
    this.setState({ [name]: e.target.value });
  };

  validateFields = () => {
    let validity = true;

    const email = this.state.email;
    const validEmail = RegExp(
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    );

    const password = this.state.password;

    if (email === "" || !validEmail.test(email)) {
      this.setState({ emailError: "Enter valid email" });
      validity = false;
    } else {
      this.setState({ emailError: "" });
    }
    if (password === "") {
      this.setState({ passwordError: "Please Enter password" });
      validity = false;
    } else {
      this.setState({ passwordError: "" });
    }
    // if (!this.validateFile()) {
    //   validity = false;
    // }

    return validity;
  };

  validateFile = () => {};

  submitClick = () => {
    const { email, password } = this.state;
    let payload = {
      email: email,
      password: password,
    };
    if (this.validateFields()) {
      this.props.UserAction.login(payload);
    }
  };

  render() {
    const paperStyle = {
      padding: 25,
      height: "auto",
      width: "350px",
      margin: "100px auto",
    };
    const avatarStyle = { width: "18vh" };
    const btnstyle = { margin: "8px 0" };
    const avatarouter = {
      width: "100px",
      height: "100px",
    };
    const dashboard = () => {
      const { email, password } = this.state;
      let payload = {
        email: email,
        password: password,
      };
      if (this.validateFields()) {
        this.props.UserAction.login(payload);
        this.props.history.push({
          pathname: "/dashboard",
        });
      }
    };

    return (
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarouter}>
              <img
                style={avatarStyle}
                src={logo}
                alt="Cronj technologies"
                title="cronj technologies"
              />
            </Avatar>
            <h2>Employee Login</h2>
          </Grid>
          <form className="form" noValidate>
            <div>
              <TextField
                className="input"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                // label="Email Address"
                placeholder="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={this.state.email}
                onChange={(e) => this.handleChange(e, "email")}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
              />
              <div>
                <small style={{ color: "red", paddingLeft: "6px" }}>
                  {this.state.emailError}
                </small>
              </div>
            </div>

            <div>
              <TextField
                className="input"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                placeholder="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={this.state.password}
                onChange={(e) => this.handleChange(e, "password")}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <div>
                <small style={{ color: "red", paddingLeft: "6px" }}>
                  {this.state.passwordError}
                </small>
              </div>
            </div>
            <FormControlLabel
              control={<Checkbox name="checkedB" color="primary" />}
              label="Remember me"
            />
            <div>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className="submit"
                onClick={dashboard}
              >
                Login
              </Button>
            </div>
            <Typography>
              <Link href="#">Forgot password ?</Link>
            </Typography>
            <Typography>
              Do you have an account ?<Link href="#">Sign Up</Link>
            </Typography>
          </form>
        </Paper>
      </Grid>
      // <Grid container component="main" className="root">
      //   <CssBaseline />

      //   <Grid item xs={false} sm={4} md={6} className="image" />

      //   <Grid
      //     item
      //     xs={12}
      //     sm={8}
      //     md={6}
      //     style={{ backgroundColor: "darkslategray" }}
      //   >
      //     <div className="paper">
      //       <Card style={{ width: "100%" }}>
      //         <CardContent
      //           style={{
      //             justifyContent: "center",
      //             alignItems: "center",
      //             display: "flex",
      //             fontSize: "20px",
      //             fontWeight: "Bold",
      //             color: "darkslategrey",
      //           }}
      //         >
      //           {" "}
      //           <PersonIcon style={{ marginRight: "8px" }} /> Login Here!!
      //         </CardContent>
      //       </Card>
      //       <form className="form" noValidate>
      //         <div>
      //           <TextField
      //             className="input"
      //             variant="outlined"
      //             margin="normal"
      //             required
      //             fullWidth
      //             id="email"
      //             // label="Email Address"
      //             placeholder="Email Address"
      //             name="email"
      //             autoComplete="email"
      //             autoFocus
      //             value={this.state.email}
      //             onChange={(e) => this.handleChange(e, "email")}
      //             InputProps={{
      //               startAdornment: (
      //                 <InputAdornment position="start">
      //                   <AccountCircle />
      //                 </InputAdornment>
      //               ),
      //             }}
      //           />
      //           <div>
      //             <small style={{ color: "red", paddingLeft: "6px" }}>
      //               {this.state.emailError}
      //             </small>
      //           </div>
      //         </div>

      //         <div>
      //           <TextField
      //             className="input"
      //             variant="outlined"
      //             margin="normal"
      //             required
      //             fullWidth
      //             name="password"
      //             placeholder="Password"
      //             type="password"
      //             id="password"
      //             autoComplete="current-password"
      //             value={this.state.password}
      //             onChange={(e) => this.handleChange(e, "password")}
      //             InputProps={{
      //               startAdornment: (
      //                 <InputAdornment position="start">
      //                   <img src={closeLock} className="lock-img" />
      //                 </InputAdornment>
      //               ),
      //             }}
      //           />
      //           <div>
      //             <small style={{ color: "red", paddingLeft: "6px" }}>
      //               {this.state.passwordError}
      //             </small>
      //           </div>
      //         </div>

      //         <FormControlLabel
      //           style={{
      //             display: "flex",
      //             justifyContent: "center",
      //             alignItems: "right",
      //           }}
      //           control={<Checkbox value="remember" color="primary" />}
      //           label="Stay LoggedIn"
      //         />

      // <div>
      //   <Button
      //     type="submit"
      //     fullWidth
      //     variant="contained"
      //     color="primary"
      //     className="submit"
      //     onClick={dashboard}
      //   >
      //     Login
      //   </Button>
      // </div>

      //         <Box mt={1}>
      //           <Copyright />
      //         </Box>
      //       </form>
      //     </div>
      //   </Grid>
      // </Grid>
    );
  }
}

const mapStateToProps = (state) => ({
  UserReducer: state.UserReducer,
});

function mapDispatchToProps(dispatch) {
  return {
    UserAction: bindActionCreators(Actions, dispatch),
    // candidateActions: bindActionCreators(Actions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));
