import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/profile.jpg";

const BookCard = (props) => {
  const book = props.book;

  return (
    <div className="row">
      <div className="col-lg-3 col-sm-3 col-3 text-center">
        <img src={Logo} className="w-50 rounded-circle" />
      </div>
      <div className="col-lg-8 col-sm-8 col-8">
        <strong className="text-info">{book.NotificationName}</strong>
        <div>
          <a>{book.NotificationBody}</a>
        </div>
        <small className="text-warning">{book.CreatedAt}</small>
        <p>
          <a href={book.Link}>More Info</a>
        </p>
      </div>
    </div>
  );
};

export default BookCard;
