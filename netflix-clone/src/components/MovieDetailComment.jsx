import React from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import Comment from "./Comment"

function MovieDetailComment(props) {
  return (
    <ListGroup>
      {props.comments.map((comment) => {
        return <Comment key={comment._id} c={comment} />;
      })}
    </ListGroup>
  );
}

export default MovieDetailComment;
