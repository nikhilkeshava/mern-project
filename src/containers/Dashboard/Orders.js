import React, { Component } from "react";
import Title from "./Title";
import * as UserActions from "../../store/User/UserAction";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import TableComponent from "../../components/Controls/Table/Table";
import "./dashboard.css";
import { MDBDataTable } from "mdbreact";
const styles = (theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
});

class Orders extends Component {
  state = {
    value: "",
    page: 1,
    limit: 5,
    searchNodes: "",
  };
  componentDidMount() {
    const payload = {
      page: this.state.page,
      limit: this.state.limit,
    };
    this.props.UserAction.getUser(payload);
  }

  handlePagination = (e) => {
    this.setState({ page: e.selected + 1 });
    const payload = {
      page: e.selected + 1,
      limit: this.state.limit,
    };
    this.props.UserAction.getUser(payload);
  };

  render() {
    let totalPage;
    const data1 = [];
    const data = {
      columns: [
        {
          label: "Name",
          field: "name",
          sort: "asc",
          width: 270,
        },
        {
          label: "email",
          field: "email",
          sort: "asc",
          width: 270,
        },
        {
          label: "role",
          field: "role",
          sort: "asc",
          width: 270,
        },
        {
          label: "gender",
          field: "gender",
          sort: "asc",
          width: 270,
        },
        {
          label: "age",
          field: "age",
          sort: "asc",
          width: 270,
        },
        {
          label: "salary",
          field: "salary",
          sort: "asc",
          width: 270,
        },
      ],
      rows: data1,
    };

    if (
      this.props &&
      this.props.UserReducer &&
      this.props.UserReducer.getUserData &&
      this.props.UserReducer.getUserData.data &&
      this.props.UserReducer.getUserData.data.users
    ) {
      this.props.UserReducer.getUserData.data.users.map((item) => {
        data1.push({
          name: item.name,
          email: item.email,
          role: item.role,
          gender: item.gender,
          age: item.age,
          salary: item.salary,
        });
      });
    }

    const { classes } = this.props; //
    return (
      <React.Fragment>
        <Title>Users Data</Title>
        <MDBDataTable striped bordered data={data} />
      </React.Fragment>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Orders));
