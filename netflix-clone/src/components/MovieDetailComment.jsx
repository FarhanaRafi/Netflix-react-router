import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

function MovieDetailComment() {
  const params = useParams();
  console.log(params, "params");
  const [commentToShow, setCommentToShow] = useState(null);

  const fetchComment = async () => {
    let response = await fetch(
      "http://www.omdbapi.com/?apikey=bcef6f96&i=" + params.movieId.Ratings
    );
    if (response.ok) {
      let data = await response.json();
      console.log(data, "data");
      setCommentToShow(data);
    }
    console.log(response);
  };
  useEffect(() => {
    let foundComment = fetchComment;

    console.log("movie comment found", foundComment);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {commentToShow ? (
        <>
          <Container>
            <li>
              {commentToShow.Source}- {commentToShow.Value}
            </li>
          </Container>
        </>
      ) : (
        ""
      )}
    </>
  );
}

export default MovieDetailComment;
