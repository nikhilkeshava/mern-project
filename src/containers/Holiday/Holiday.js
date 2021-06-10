import React, { Component } from "react";
import * as HolidayActions from "../../store/Holiday/HolidayAction";
import TableComponent from "../../components/Controls/Table/Table";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import TextFieldGroup from "../../components/TextArea/TextFieldGroup";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Title from "../Dashboard/Title";
import "../Dashboard/dashboard.css";

class Holiday extends Component {
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
      event: this.state.event,
      date: this.state.date,
    };
    this.props.HolidayAction.addHolidayData(profileData);
    this.props.history.push("/holiday");
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
        this.props.HolidayReducer.getHolidayData.data.holiday /
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
        <div class="container" style={{ width: "70vh" }}>
          <form onSubmit={this.onSubmit}>
            <React.Fragment>
              <Typography variant="h6" center gutterBottom>
                Add Holiday
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextFieldGroup
                    placeholder="eventname"
                    name="event"
                    value={this.state.event}
                    onChange={this.onChange}
                    info="Enter Holiday Name"
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextFieldGroup
                    placeholder="Date"
                    name="date"
                    value={this.state.date}
                    onChange={this.onChange}
                    info="Enter Event Date"
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
          <div style={{ marginTop: "10vh" }}>
            <React.Fragment>
              <Title>Holiday Data</Title>
              <TableComponent
                data={data}
                columns={inboundDatacolumn}
                handlePageClick={(e) => {
                  this.handlePagination(e);
                }}
                totalPage={3}
              />
            </React.Fragment>
          </div>
        </div>
        {/* <div
          className="container"
          style={{ marginTop: "7vh", border: "1px solid #f1f1f1" }}
        >
          <div className="row">
            <div className="col-sm-4" style={{ margin: "auto" }}>
              <form onSubmit={this.onSubmit} style={{ padding: "5vh" }}>
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
      </>
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
)(withRouter(Holiday));
