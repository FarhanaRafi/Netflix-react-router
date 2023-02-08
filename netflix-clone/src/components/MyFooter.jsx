import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";

const MyFooter = () => {
  return (
    <MDBFooter className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block container">
          {/* <span>Get connected with us on social networks:</span> */}
          <a href="#home" className="me-4 text-reset">
            <BsFacebook />
            {/* <MDBIcon color="secondary" fab icon="facebook-f" /> */}
          </a>
          <a href="#home" className="me-4 ml-3 text-reset">
            <BsInstagram />
            {/* <MDBIcon color="secondary" fab icon="twitter" /> */}
          </a>
          <a href="#home" className="me-4 ml-3 text-reset">
            <BsTwitter />
            {/* <MDBIcon color="secondary" fab icon="google" /> */}
          </a>
          <a href="#home" className="me-4 ml-3 text-reset">
            <BsYoutube />
            {/* <MDBIcon color="secondary" fab icon="instagram" /> */}
          </a>
          <p>Questions? Call 1-866-579-7172</p>
        </div>

        <div></div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon color="secondary" icon="gem" className="me-3" />
                FAQ
              </h6>
              <p>Investor Relations</p>
              <p>Ways To Watch</p>
              <p>Corporate Information</p>
              <p>Netflix Originals</p>
              <p>
                <button className="bg-transparent text-white px-3 py-2">
                  Service Code
                </button>
              </p>
              <p>© 1997-2019 Netflix, Inc.</p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Help center</h6>
              <p>
                <a href="#!" className="text-reset">
                  Jobs
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Term Of Use
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Contact Us
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Account</h6>
              <p>
                <a href="#!" className="text-reset">
                  Redeem Gift Cards
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Privacy
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Speed Test
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Media Center</h6>
              <p>
                <MDBIcon color="secondary" icon="home" className="me-2" />
                Buy Gift Cards
              </p>
              <p>
                <MDBIcon color="secondary" icon="envelope" className="me-3" />
                Cookie Preferences
              </p>
              <p>
                <MDBIcon color="secondary" icon="phone" className="me-3" /> + 01
                Legal Notices
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2021 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  );
};

export default MyFooter;
