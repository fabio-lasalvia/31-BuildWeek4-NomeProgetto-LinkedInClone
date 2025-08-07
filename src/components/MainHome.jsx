import {
  Col,
  Row,
  Container,
  Form,
  Button,
  ButtonGroup,
} from "react-bootstrap";

function MainHome() {
  let fotoProfilo = null;

  return (
    <Container>
      <Row>
        <Col>
          <Form className="border bg-light p-2 rounded">
            <Form.Group className="d-flex mb-3 align-items-center justify-content-center">
              <img
                src={fotoProfilo}
                alt="Foto profilo"
                className="rounded-circle me-2"
                style={{ width: "48px", height: "48px", objectFit: "cover" }}
              />
              <Form.Control
                type="text"
                placeholder="Crea un post"
                className="rounded-pill bg-light border p-2"
              />
            </Form.Group>

            {/* BOTTONI */}
            <ButtonGroup className="d-flex w-100 rounded px-2 py-1">
              {/* VIDEO */}
              <Button
                variant="light"
                className="d-flex align-items-center border-0 rounded"
              >
                <i className="bi bi-play-btn-fill text-success me-2"></i>
                Video
              </Button>
              {/* IMG */}
              <Button
                variant="light"
                className="d-flex align-items-center border-0 rounded"
              >
                <i className="bi bi-image text-primary me-2"></i>
                Foto
              </Button>
              {/* ARTICOLO */}
              <Button
                variant="light"
                className="d-flex align-items-center border-0 rounded"
              >
                <i className="bi bi-newspaper text-warning me-2"></i>
                Scrivi un articolo
              </Button>
            </ButtonGroup>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default MainHome;
