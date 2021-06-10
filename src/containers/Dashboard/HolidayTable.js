import { withStyles } from "@material-ui/core/styles";
import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./Title";
import * as HolidayActions from "../../store/Holiday/HolidayAction";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import TableComponent from "../../components/Controls/Table/Table";
import "./dashboard.css";

const styles = (theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
});

class HolidayTable extends Component {
  state = {
    value: "",
    page: 1,
    limit: 15,
    searchNodes: "",
  };
  componentDidMount() {
    const payload = {
      page: this.state.page,
      limit: this.state.limit,
    };
    this.props.HolidayAction.getHolidayData(payload);
  }

  handlePagination = (e) => {
    this.setState({ page: e.selected + 1 });
    const payload = {
      page: e.selected + 1,
      limit: this.state.limit,
    };
    this.props.HolidayAction.getHolidayData(payload);
  };

  render() {
    let totalPage;
    const data = [];
    if (
      this.props &&
      this.props.HolidayReducer &&
      this.props.HolidayReducer.getHolidayData &&
      this.props.HolidayReducer.getHolidayData.data &&
      this.props.HolidayReducer.getHolidayData.data.holiday
    ) {
      totalPage =
        this.props.HolidayReducer.getHolidayData.data.totalHoliday /
        this.state.limit;
      this.props.HolidayReducer.getHolidayData.data.holiday.map((item) => {
        data.push({
          event: item.event,
          date: item.date,
        });
      });
    }

    let inboundDatacolumn = [
      {
        Header: "Event",
        accessor: "event",
      },

      {
        Header: "Date",
        accessor: "date",
      },
    ];

    const { classes } = this.props; //
    return (
      <React.Fragment>
        <Title>Holiday Data</Title>
        <TableComponent
          data={data}
          columns={inboundDatacolumn}
          handlePageClick={(e) => {
            this.handlePagination(e);
          }}
          totalPage={totalPage}
        />
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    HolidayReducer: state.HolidayReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    HolidayAction: bindActionCreators(HolidayActions, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(HolidayTable));
