import React from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

function MovieDetailComment(props) {
  return (
    <ListGroup>
      {props.comments.map((comment) => {
        return;
      })}
    </ListGroup>
  );
}

export default MovieDetailComment;
