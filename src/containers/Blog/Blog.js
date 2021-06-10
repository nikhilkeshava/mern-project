import React, { Component } from "react";
import axios from "axios";

import BookCard from "./blogdata";

export class blogdata extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5007/api/blog/get")
      .then((res) => {
        this.setState({
          books: res.data.blog,
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
      bookList = "there is no blog posted!";
    } else {
      bookList = books.map((book, k) => <BookCard book={book} key={k} />);
    }

    return <>{bookList}</>;
  }
}

export default blogdata;
