import React, { Component } from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "./Title";
import "./dashboard.css";
import axios from "axios";

import { withStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

class Empp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }
  componentDidMount() {
    const token = localStorage.getItem("token"); //Or however you choose to get it

    axios
      .get("http://localhost:5007/api/counthalfday", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        this.setState({
          books: res.data,
        });
      })
      .catch((err) => {
        console.log("Api is wrong");
      });
  }

  render() {
    const books = this.state.books;
    console.log(books);

    const { classes } = this.props;
    return (
      <React.Fragment>
        <Title style={{ padding: "10vh" }}>Employees Absent</Title>
        <Typography component="p" variant="h4">
          {books}
        </Typography>
        <Typography color="textSecondary" className={classes.depositContext}>
          on 15 March, 2019
        </Typography>
        <div>
          <Link color="primary" href="#">
            View Attendance Table
          </Link>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(useStyles, { withTheme: true })(Empp);
