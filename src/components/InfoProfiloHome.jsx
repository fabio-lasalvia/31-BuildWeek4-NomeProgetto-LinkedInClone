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
          {/* INFO PROFILO */}
          <div>
            <img
              src={backgroundProfilo}
              alt={`Immagine di background profilo di ${nomeUtente}`}
            />
            <img src={fotoProfilo} alt={`Foto profilo di ${nomeUtente}`} />

            <h4>{nomeUtente}</h4>
            <p>{breveDescrizione}</p>
            <p>{citta}</p>
            <p>{azienda}</p>
          </div>

          {/* COLLEGAMENTI */}
          <div>
            <p className="fw-bold">Collegamenti</p>
            <span>{numeroCollegamenti}</span>

            <p className="text-secondary">Espandi la tua rete</p>
          </div>

          {/* LINK */}
          <div>
            {/* ELEMENTI SALVATI */}
            <p>
              <i className="bi bi-bookmark-fill me-2"></i>
              Elementi salvati
            </p>
            {/* GRUPPI */}
            <p>
              <i className="bi bi-people-fill me-2"></i>
              Gruppi
            </p>
            {/* NEWS LETTER */}
            <p>
              <i className="bi bi-newspaper me-2"></i>
              News letter
            </p>
            {/* EVENTI */}
            <p>
              <i className="bi bi-calendar-event me-2"></i>
              Eventi
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default InfoProfiloHome;
