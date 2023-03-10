import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Spinner, Card, Container, Row, Col, ListGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";
import StarRatings from "react-star-ratings";

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
      <Container>
        {movieToShow ? (
          <>
            <Row>
              <Col xs={6}>
                <h2 className="text-white text-center">
                  Details of {movieToShow.Title}
                </h2>

                <Card className="mb-3 mx-5 ml-n2 card-img">
                  <Card.Img
                    variant="top"
                    src={movieToShow.Poster}
                    height={600}
                  />
                  <Card.Body className="background">
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
              <Col>
                <h2 className="ml-5 text-white mb-5">Comments</h2>
                <div className="text-white ml-5">
                  {comments ? (
                    <ListGroup>
                      {comments.map((comment) => {
                        return (
                          <ListGroup key={comment._id}>
                            <p>
                              <strong> Comment:</strong> {comment.comment}
                            </p>
                            <p>
                              <strong className="mr-2"> Rating:</strong>{" "}
                              <StarRatings
                                rating={comment.rate}
                                numberOfStars={5}
                                name="rating"
                                starDimension="20px"
                                starRatedColor="red"
                              />
                            </p>
                          </ListGroup>
                        );
                      })}
                    </ListGroup>
                  ) : (
                    ""
                  )}
                  {(comments === null || comments.length === 0) && (
                    <h4>No comments available</h4>
                  )}
                </div>
              </Col>
            </Row>
          </>
        ) : (
          <Spinner variant="info" animation="border" />
        )}
      </Container>
    </>
  );
};

export default MovieDetails;
