import { Container } from "react-bootstrap";
import Details from "./Details";

const Profile = () => {
  return (
    <Container>
      <h2 className="text-white mt-5 display-4">Edit Profile</h2>
      <hr className="line" />
      <Details />
    </Container>
  );
};

export default Profile;
