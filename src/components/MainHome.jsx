import { Container } from "react-bootstrap";
import CreaPostMain from "./CreaPostMain";
import PostsMain from "./PostsMain";

function MainHome() {
  return (
    <Container className="d-flex flex-column gap-3">
      <CreaPostMain />
      <PostsMain />
    </Container>
  );
}

export default MainHome;
