// import { Jumbotron, Container } from "react-bootstrap";
import React from "react";

const Jumbo = () => {
  return (
    <header style={{ paddingLeft: 0 }}>
      <div
        className="p-5 text-center bg-image"
        style={{
          backgroundImage:
            "url('https://mdbootstrap.com/img/new/slides/041.webp')",
          height: 400,
        }}
      >
        <div className="d-flex align-items-center text-white  h-100">
          <h1 className="display-1">Earth</h1>
        </div>
      </div>
    </header>
  );
};

export default Jumbo;
