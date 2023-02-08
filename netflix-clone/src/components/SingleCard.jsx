import { Button } from "react-bootstrap";

import { BiPlayCircle, BiPlusCircle } from "react-icons/bi";
import { BsHandThumbsUp } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SingleCard = (props) => {
  const navigate = useNavigate();
  const imdbID = props.card.imdbID;
  return (
    //   <div className="mb-3 card1">
    <div className="movie-card">
      <Link to={"/movie-details/" + props.card.imdbID}>
        <img src={props.card.Poster} alt="#" height={340} />
      </Link>
      <div>
        <div className="book-title info-container ">
          <div className="play-btn">
            <BiPlayCircle className="text-white" />
            <BsHandThumbsUp className="text-white ml-3" />
            <BiPlusCircle className="text-white ml-3" />
            <Button
              variant="success"
              onClick={() => navigate("/movie-details/" + imdbID)}
            >
              {" "}
              Details
            </Button>
            {/* <i class="bi bi-play-circle mr-2"></i> */}
            {/* <i class="bi bi-hand-thumbs-up mr-2"></i> */}
            {/* <i class="bi bi-plus-circle mr-2"></i> */}
          </div>
          <h5 className="text-success mb-2">95% Match</h5>

          <h6>{props.card.Title}</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            cum doloribus .
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
