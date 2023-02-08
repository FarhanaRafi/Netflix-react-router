import SingleCard from "./SingleCard";
import { Row, Col, Spinner, Alert } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";

const CardSet = (props) => {
  const [search, setSearch] = useState(props.search);
  const [title, setTitle] = useState(props.title);
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchCards = async () => {
    let response = await fetch(
      "http://www.omdbapi.com/?apikey=bcef6f96&s=" + props.search
    );
    console.log(response);
    if (response.ok) {
      let data = await response.json();
      console.log(data);
      setCards(data.Search.slice(0, 6));
      setIsLoading(false);
    } else {
      setIsError(true);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchCards();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h2 className="text-white ml-3">{title}</h2>
      {isLoading && <Spinner animation="border" variant="success" />}
      {isError && <Alert variant="danger">Aww snap, we got an error!</Alert>}
      <Row className="mt-3 ">
        {cards.map((item) => {
          return (
            <Col xs={4} md={2} lg={2} key={item.imdbID}>
              <SingleCard card={item} />;
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default CardSet;
