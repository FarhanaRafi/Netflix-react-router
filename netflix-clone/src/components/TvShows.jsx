import { BsTextLeft } from "react-icons/bs";
// import { Row } from "react-bootstrap";

const TvShows = () => {
  return (
    <>
      <div className="d-flex justify-content-between mb-4 mt-3">
        <div className="dropdown ml-5 d-flex align-items-center">
          <span className="h5 text-white ml-n4 mr-5 col-12 col-md-8">
            TV Shows
          </span>
          <button
            className="btn btn-transparent dropdown-toggle text-white btn-outline-secondary d-none d-md-block d-lg-block ml-n5"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Genres
          </button>
          <div
            className="dropdown-menu"
            id="drop-down-menu"
            aria-labelledby="dropdownMenuButton"
          ></div>
        </div>
        <div className="h6 mr-5 d-flex align-items-center justify-content-end d-none d-md-block d-lg-block">
          <button
            className="btn btn-transparent text-white  btn-outline-secondary d-none d-md-block d-lg-block"
            type="button"
            id="dropdownMenuButton"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {" "}
            <BsTextLeft />
          </button>
        </div>
      </div>
    </>
  );
};

export default TvShows;
