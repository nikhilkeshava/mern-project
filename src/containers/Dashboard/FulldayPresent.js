import React, { Component } from "react";
import axios from "axios";

export class FulldayPresent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }
  componentDidMount() {
    const token = localStorage.getItem("token"); //Or however you choose to get it
    const email = localStorage.getItem("email");
    axios
      .get("http://localhost:5007/api/countpresent/" + email, {
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

    return (
      <>
        <h4>
          <blockquote>
            fullday Present
            <code> {books}</code>
          </blockquote>
        </h4>
      </>
    );
  }
}

export default FulldayPresent;
