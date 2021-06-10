
import React from "react";

import Logo from "../../assets/profile.jpg";
import {Card} from '@material-ui/core'

const BookCard = (props) => {
  const book = props.book;

  return (
    <Card>
    <div className="row">
      <div className="col-lg-3 col-sm-3 col-3 text-center">
        <img src={Logo} className="w-50 rounded-circle" />
      </div>
      <div className="col-lg-8 col-sm-8 col-8">
       <h5> <strong className="text-info">{book.title}</strong></h5>
        <div>
          <p>{book.message}</p>
        </div>
        <small className="text-primary">{book.creator}</small>
     
      </div>
    </div>
  </Card>
  );
};

export default BookCard;
