import React, { Component } from "react";
import "./dashboard.css";
import Graph from "../../components/SmoothLineChart/smooth";
import Table from "../../components/Table/table";
import NewsUpdates from "./NewsUpdates";
import * as HolidayActions from "../../store/Holiday/HolidayAction";
import TableComponent from "../../components/Controls/Table/Table";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import TextFieldGroup from "../../components/TextArea/TextFieldGroup";
import Markp from "./Markp";
import CountData from "./CountData";
import FulldayPresent from "./FulldayPresent";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: "",
      date: "",
      errors: {},
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  state = {
    value: "",
    page: 1,
    limit: 5,
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
      event: this.state.event,
      date: this.state.date,
    };
    this.props.HolidayAction.addHolidayData(profileData);
    this.props.history.push("/dashboard");
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
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

    console.log(
      "props--->",
      this.props,
      this.props.FeatureReducer &&
        this.props.FeatureReducer &&
        this.props.FeatureReducer.getData
    );
    const { classes } = this.props;
    return (
      <>
        {/* <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="eventname"
                  name="event"
                  value={this.state.event}
                  onChange={this.onChange}
                  info="name"
                />
                <TextFieldGroup
                  placeholder="* date Handle"
                  name="date"
                  value={this.state.date}
                  onChange={this.onChange}
                  info="date"
                />
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-info btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div> */}

        <div className="container" style={{ marginTop: "9vh" }}>
          <div className="row">
            <div className="col-sm-4">
              <button className="btn btn-outline-success">
                <Markp />
              </button>
              {/* <CountData />
              <FulldayPresent /> */}
            </div>
            <div>
              <button className="btn btn-danger" style={{ height: "40px" }}>
                <Link
                  to="/attendance"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  Mark as an Absent
                </Link>
                <br />
              </button>
              <br />
              {/* <h4 style={{ marginTop: "50px" }}>Total Days Absent - 5</h4> */}
            </div>
          </div>
        </div>
        <div className="container" style={{ marginTop: "9vh" }}>
          <div className="row">
            <div className="col-sm-6">
              <TableComponent
                data={data}
                columns={inboundDatacolumn}
                handlePageClick={(e) => {
                  this.handlePagination(e);
                }}
                totalPage={totalPage}
              />
            </div>
            <div className="col-sm-6">
              <Graph />
            </div>

            <div className="col-sm-6"></div>
          </div>
        </div>
      </>
      // {/* <div
      // style={{
      //   textAlign: "center",
      //   margin: "20px auto",
      //   fontSize: 20,
      //   backgroundColor: "white",
      //   width: 150,
      //   borderRadius: "10px",
      // }}
      // >
      //   <strong>Year : </strong>
      //   {new Date().getFullYear()}
      // </div>
      // <div className="dash-wrap-inner">
      //   <div className="table">
      //     {/* <Table/> */}
      // <TableComponent
      //   data={data}
      //   columns={inboundDatacolumn}
      //   handlePageClick={(e) => {
      //     this.handlePagination(e);
      //   }}
      //   totalPage={totalPage}
      // />
      // //   </div>
      // //   <div>
      // //     <div className="graph">
      // //       <Graph />
      // //     </div>
      // //     <div className="blog">
      // //       <NewsUpdates />
      // //     </div>
      // //   </div>
      // // </div> */}
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
)(withRouter(Dashboard));
