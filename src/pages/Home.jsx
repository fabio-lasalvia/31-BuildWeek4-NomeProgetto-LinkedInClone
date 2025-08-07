import { Col, Container, Row } from "react-bootstrap";
import InfoProfiloHome from "../components/InfoProfiloHome";
import MainHome from "../components/MainHome";

function Home() {
  return (
    <>
      <Container>
        <Row>
          <Col md={3}>
            <InfoProfiloHome />
          </Col>
          <Col md={6}>
            <MainHome />
          </Col>
          <Col md={3}></Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
