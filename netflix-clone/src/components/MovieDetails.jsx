import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Spinner, Card, Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
// import AllCards from "./AllCards";

const MovieDetails = (props) => {
  const params = useParams();
  console.log(params, "params");
  const [movieToShow, setMovieToShow] = useState(null);
  const [comments, setComments] = useState([]);

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
    let commentFound = movieComments();
    console.log(commentFound);

    console.log("movie details found", foundMovieObject);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const movieComments = async () => {
    let res = await fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + params.movieId,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzQ1ZmU3MzczODAwMTUzNzQzNzgiLCJpYXQiOjE2NzU4NzA1OTEsImV4cCI6MTY3NzA4MDE5MX0.IG1txVxlAgWxVvwDUIvso4JjeaAtEaHdVlWNR0j90iI",
        },
      }
    );
    if (res.ok) {
      let data = await res.json();
      console.log(data);
      setComments(data);
    }
  };

  return (
    <>
      {movieToShow ? (
        <>
          <Container>
            <h2 className="text-white text-center">
              Details of {movieToShow.Title}
            </h2>
            <Row>
              <Col>
                <Card className="mb-3 mx-5">
                  <Card.Img
                    variant="top"
                    src={movieToShow.Poster}
                    height={800}
                  />
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
              </Col>
              {/* <Col>
              {comments? }
              </Col> */}
            </Row>
          </Container>
        </>
      ) : (
        <Spinner variant="info" animation="border" />
      )}
    </>
  );
};

export default MovieDetails;
