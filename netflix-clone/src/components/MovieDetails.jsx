import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Spinner, Card, Container } from "react-bootstrap";
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
      setMovieToShow(data);
    }
    console.log(response);
  };

  useEffect(() => {
    let foundMovieObject = fetchMovie();

    console.log("movie details found", foundMovieObject);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {movieToShow ? (
        <>
          <Container>
            <h2 className="text-white text-center">
              Details of {movieToShow.Title}
            </h2>
            <Card className="mb-3 mx-5">
              <Card.Img variant="top" src={movieToShow.Poster} height={800} />
              <Card.Body>
                <Card.Title>
                  {movieToShow.Title} {movieToShow.Type} -{" "}
                  {movieToShow.Language} - {movieToShow.Country}
                </Card.Title>
                <Card.Text>
                  {movieToShow.Type} - {movieToShow.Language} -{" "}
                  {movieToShow.Country}
                </Card.Text>
                <Card.Text>{movieToShow.Awards}</Card.Text>
              </Card.Body>
            </Card>
          </Container>
        </>
      ) : (
        <Spinner variant="info" animation="border" />
      )}
    </>
  );
};

export default MovieDetails;
