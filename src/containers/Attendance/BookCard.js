import React from "react";
import { Link } from "react-router-dom";

const BookCard = (props) => {
  const book = props.book;

  return (
    <div className="card-container">
      <img
        src="https://commapress.co.uk/books/the-book-of-cairo/cairo-provisional-v3/image%2Fspan3"
        alt=""
      />
      <div className="desc">
        <h3>{book.name}</h3>
        <p>{book.date}</p>
      </div>
    </div>
  );
};

export default BookCard;
