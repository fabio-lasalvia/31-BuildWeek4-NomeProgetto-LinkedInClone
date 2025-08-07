import { Button, Col, Container, Row } from "react-bootstrap";

function PostsMain() {
  let utente = null;
  let nomeUtente = "";
  let descrizioneUtente = "";
  let contenutoPost = "";

  return (
    <Container>
      <Row>
        <Col>
          <div className="d-flex border bg-light p-2 rounded justify-content-between">
            <img
              src={utente}
              alt="Foto profilo utente"
              className="rounded-circle me-2"
              style={{ width: "48px", height: "48px", objectFit: "cover" }}
            />
            <div className="d-flex flex-column">
              <h5>{nomeUtente}</h5>
              <p>{descrizioneUtente}</p>
            </div>

            <Button variant="light" className="text-primary fw-bold">
              <i className="bi bi-plus-lg"></i>
              Segui
            </Button>
          </div>

          <div>{contenutoPost}</div>

          <div>
            {/* CONSIGLIA */}
            <Button variant="light">
              <i className="bi bi-hand-thumbs-up me-2"></i>
              Consiglia
            </Button>
            <Button variant="light">
              <i className="bi bi-chat-dots"></i>
              Commenta
            </Button>
            <Button variant="light">
              <i className="bi bi-"></i>
              Diffondi il post
            </Button>
            <Button variant="light"> 
              <i className="bi bi-"></i>
              Invia
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default PostsMain;
