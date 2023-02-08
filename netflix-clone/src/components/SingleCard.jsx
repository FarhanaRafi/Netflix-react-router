// import { Card, CardDeck } from "react-bootstrap";

import { BiPlayCircle, BiPlusCircle } from "react-icons/bi";
import { BsHandThumbsUp } from "react-icons/bs";

const SingleCard = (props) => {
  return (
    //   <div className="mb-3 card1">
    <div className="movie-card">
      <img src={props.card.Poster} alt="#" height={340} />
      <div>
        <div className="book-title info-container ">
          <div className="play-btn">
            <BiPlayCircle className="text-white" />
            <BsHandThumbsUp className="text-white ml-3" />
            <BiPlusCircle className="text-white ml-3" />
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
    //   </div>
  );
};

export default SingleCard;
