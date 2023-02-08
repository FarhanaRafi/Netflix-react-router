import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Spinner, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
// import AllCards from "./AllCards";

const MovieDetails = (props) => {
  const params = useParams();
  console.log(params, "params");
  const [movieToShow, setMovieToShow] = useState(null);

  const fetchMovie = async () => {
    let response = await fetch(
      "http://www.omdbapi.com/?apikey=bcef6f96&i=" + params.movieId
    );
    if (response.ok) {
      let data = await response.json();
      console.log(data, "data");
    }
    console.log(response);
  };

  useEffect(() => {
    let foundMovieObject = fetchMovie();
    // AllCards.find(
    //   (card) => card.imdbId.toString() === params.movieId
    // );
    console.log("movie details found", foundMovieObject);
    setMovieToShow(foundMovieObject);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {movieToShow ? (
        <>
          <h2>Details of {movieToShow.Title}</h2>
          <Card className="mb-3">
            <Card.Img variant="top" src={movieToShow.Poster} />
            <Card.Body>
              <Card.Title>
                {movieToShow.Title} - {movieToShow.Type}
              </Card.Title>
              {/* <Card.Text>{pastaToShow.description}</Card.Text> */}
            </Card.Body>
          </Card>
        </>
      ) : (
        <Spinner variant="info" animation="border" />
      )}
    </>
  );
};

export default MovieDetails;
