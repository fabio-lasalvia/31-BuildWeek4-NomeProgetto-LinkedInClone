import { Col, Container, Row } from "react-bootstrap";

function InfoProfiloHome() {
  let backgroundProfilo = null;
  let fotoProfilo = null;
  let nomeUtente = "";
  let breveDescrizione = "";
  let citta = "";
  let azienda = "";
  let numeroCollegamenti = "";

  return (
    <Container>
  <Row>
    <Col>
      {/* SEZIONE 1: INFO PROFILO */}
      <div className="border rounded p-3 mb-3 bg-white">
        <img
          src={backgroundProfilo}
          alt={`Immagine di background profilo di ${nomeUtente}`}
          className="img-fluid mb-2"
        />
        <img
          src={fotoProfilo}
          alt={`Foto profilo di ${nomeUtente}`}
          className="rounded-circle mb-2"
          style={{ width: "72px", height: "72px", objectFit: "cover", marginTop: "-36px" }}
        />
        <h4 className="mt-2">{nomeUtente}</h4>
        <p className="mb-1">{breveDescrizione}</p>
        <p className="mb-1">{citta}</p>
        <p className="mb-1">{azienda}</p>
      </div>

      {/* SEZIONE 2: COLLEGAMENTI */}
      <div className="border rounded p-3 mb-3 bg-white">
        <p className="fw-bold mb-1">Collegamenti</p>
        <span className="fw-semibold">{numeroCollegamenti}</span>
        <p className="text-secondary mb-0">Espandi la tua rete</p>
      </div>

      {/* SEZIONE 3: LINK UTILI */}
      <div className="border rounded p-3 bg-white">
        <p><i className="bi bi-bookmark-fill me-2"></i>Elementi salvati</p>
        <p><i className="bi bi-people-fill me-2"></i>Gruppi</p>
        <p><i className="bi bi-newspaper me-2"></i>News letter</p>
        <p><i className="bi bi-calendar-event me-2"></i>Eventi</p>
      </div>
    </Col>
  </Row>
</Container>

  );
}

export default InfoProfiloHome;
