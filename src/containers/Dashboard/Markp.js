import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import TextFieldGroup from "../../components/TextArea/TextFieldGroup";
import * as PresentActions from "../../store/AttandancePresent/PresentAction";
const options = [
  {
    label: "Select value",
    value: "",
  },
  {
    label: "Present",
    value: "Present",
  },
  {
    label: "HalfDay",
    value: "HalfDay",
  },
];
class Markp extends Component {
  constructor(props) {
    super(props);
    var email = localStorage.getItem("email");
    var today = new Date(),
      date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();

    this.state = {
      name: email,
      date: date,
      status: "",
      errors: {},
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  state = {
    value: "",
    page: 1,
    limit: 5,
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
      date: this.state.date,
      status: this.state.status,
    };
    this.props.PresentAction.addPresentData(profileData);
    this.state.name = "";
    this.state.date = "";
    this.state.status = "";
    this.props.history.push("/dashboard");
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    console.log(
      "props--->",
      this.props,
      this.props.FeatureReducer &&
        this.props.FeatureReducer &&
        this.props.FeatureReducer.getData
    );
    let email = localStorage.getItem("email");
    return (
      <>
        <button
          type="button"
          class="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
          data-whatever="@fat"
        >
          Mark Your Attendance
        </button>

        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5
                  class="modal-title"
                  id="exampleModalLabel"
                  style={{ color: "#000" }}
                >
                  Mark Your Attendance
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form onSubmit={this.onSubmit}>
                  <TextFieldGroup
                    placeholder="Mail Id"
                    name="name"
                    value={this.state.name}
                    onChange={this.onChange}
                    info="Enter Your Mail id"
                  />
                  <TextFieldGroup
                    placeholder="Today Date"
                    name="date"
                    value={this.state.date}
                    onChange={this.onChange}
                    info="Today Date"
                  />

                  <select
                    class="form-select"
                    name="status"
                    value={this.state.status}
                    onChange={this.onChange}
                  >
                    {options.map((option) => (
                      <option value={option.value}>{option.label}</option>
                    ))}
                  </select>

                  <input
                    type="submit"
                    value="Submit"
                    className="btn btn-info btn-block mt-4"
                  />
                </form>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="name"
                  name="name"
                  value={this.state.name}
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
                <TextFieldGroup
                  placeholder="status"
                  name="status"
                  value={this.state.status}
                  onChange={this.onChange}
                  info="status"
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
    PresentReducer: state.PresentReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    PresentAction: bindActionCreators(PresentActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Markp));
