import { Row, Col, Form, Button } from "react-bootstrap";

const Details = () => {
  return (
    <>
      <Row>
        <Col xs={2} className="mr-5 ml-5">
          <img
            height={180}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGP0LOh8SpUJCGgsBxnYVT1lvY4DNW_f_lBA&usqp=CAU"
            alt=""
          />
        </Col>
        <Col xs={8} className="ml-5">
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Strive Student"
                className="bg-transparent"
              />
            </Form.Group>
            <h4 className="mb-3 color">
              <strong>Language:</strong>
            </h4>
            <Button
              className="bg-transparent border-secondary px-5"
              type="submit"
            >
              <strong>English</strong>
            </Button>
            <hr className="line m" />

            <h4 className="mt-4 color">
              <strong>Maturity Settings:</strong>
            </h4>
            <Button
              className="bg-secondary text-white border-secondary px-5 color"
              type="submit"
            >
              <strong>ALL MATURITY RATINGS</strong>
            </Button>
            <p className="mt-2 color">
              Show titles of all maturity ratings for this profile
            </p>
            <Button
              className="bg-transparent border-secondary px-5"
              type="submit"
            >
              <strong>EDIT</strong>
            </Button>
            <hr className="line m" />
            <Form.Group controlId="formBasicCheckbox">
              <h4 className="color">
                <strong>Autoplay controls</strong>
              </h4>
              <Form.Check
                type="checkbox"
                label="Autoplay next episode in a series on all devices"
                className="color"
              />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Autoplay previews while browsing on all devices"
                className="color"
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <hr className="line m" />
      <div className="ml-5 mt-3">
        <Button
          className="bg-white text-dark border-secondary px-5 mb-5 btn1"
          type="submit"
        >
          <strong>SAVE</strong>
        </Button>
        <Button
          className="bg-transparent border-secondary px-5 mx-4 mb-5 btn1"
          type="submit"
        >
          <strong>CANCEL</strong>
        </Button>
        <Button
          className="bg-transparent border-secondary px-5 mb-5 btn2"
          type="submit"
        >
          <strong>DELETE PROFILE</strong>
        </Button>
      </div>
    </>
  );
};

export default Details;
