import React, { Component } from "react";
import axios from "axios";

export class CountData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }
  componentDidMount() {
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email"); //Or however you choose to get it

    axios
      .get("http://localhost:5007/api/counthalfday/" + email)
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

    return (
      <>
        <h4>
          <blockquote>
            Halfday Present
            <code> {books}</code>
          </blockquote>
        </h4>
      </>
    );
  }
}

export default CountData;
