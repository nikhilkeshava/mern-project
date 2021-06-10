import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import EventIcon from "@material-ui/icons/Event";
import "./card.css";

export default class CalenderCard extends React.Component {
  state = {
    show: true,
    fromdate: new Date("12-Mar-2021"),
    todate: new Date("12-Apr-2021"),
  };

  handleChangeDate1 = (fromdate) => {
    this.setState({
      fromdate,
    });
  };

  handleChangeDate2 = (todate) => {
    this.setState({
      todate,
    });
  };

  render() {
    return (
      <div className="c-card">
        <div>
          <EventIcon style={{ marginLeft: "-6px", marginRight: "7px" }} />
          <DatePicker
            className="date"
            dateFormat="dd-MMM-yyyy"
            selected={this.state.fromdate}
            onChange={this.handleChangeDate1}
          />
        </div>

        <div
          style={{
            marginRight: "7px",
            marginLeft: 5,
            fontSize: 14,
            marginTop: "1px",
          }}
        >
          to
        </div>
        <div>
          <DatePicker
            className="date"
            dateFormat="dd-MMM-yyyy"
            selected={this.state.todate}
            onChange={this.handleChangeDate2}
          />
        </div>
      </div>
    );
  }
}
