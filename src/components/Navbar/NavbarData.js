import React, { Component } from "react";
import axios from "axios";

import BookCard from "./BookCard";

export class NavbarData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5007/api/notification/get")
      .then((res) => {
        this.setState({
          books: res.data.notification,
        });
      })
      .catch((err) => {
        console.log("Api is wrong");
      });
  }

  render() {
    const books = this.state.books;
    console.log(books);
    let bookList;

    if (!books) {
      bookList = "there is no book record!";
    } else {
      bookList = books.map((book, k) => <BookCard book={book} key={k} />);
    }

    return <>{bookList}</>;
  }
}

export default NavbarData;
