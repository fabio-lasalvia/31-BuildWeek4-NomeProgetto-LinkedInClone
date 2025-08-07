import { Navbar, Container, Nav, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import logoLinkedin from "../assets/logo/logoLinkedin.png";

function MyNavbar() {
  return (
    <>
      <Navbar bg="white" className="shadow-sm mb-4">
        <Container className="align-items-center">
          {/* LOGO */}
          <Navbar.Brand as={NavLink} to="/" className="me-2">
            <img
              src={logoLinkedin}
              alt="Logo LinkedIn"
              className="rounded"
              style={{ maxWidth: "30px" }}
            />
          </Navbar.Brand>

          {/* SEARCHBAR */}
          <Form className="me-auto d-none d-md-block" style={{ width: "200px" }}>
            <Form.Control
              type="search"
              placeholder="Cerca"
              className="rounded-pill"
              aria-label="Cerca"
            />
          </Form>

          {/* NAV ICONS */}
          <Nav className="d-flex">
            {/* HOME */}
            <Nav.Link
              as={NavLink}
              to="/"
              className="d-flex flex-column align-items-center"
            >
              <i className="bi bi-house-door-fill"></i>
              <span className="small">Home</span>
            </Nav.Link>

            {/* RETE */}
            <Nav.Link
              as={NavLink}
              to="/rete"
              className="d-flex flex-column align-items-center"
            >
              <i className="bi bi-people-fill"></i>
              <span className="small">Rete</span>
            </Nav.Link>

            {/* JOBS */}
            <Nav.Link
              as={NavLink}
              to="/jobs"
              className="d-flex flex-column align-items-center"
            >
              <i className="bi bi-suitcase-lg-fill"></i>
              <span className="small">Lavoro</span>
            </Nav.Link>

            {/* MESSAGGISTICA */}
            <Nav.Link
              as={NavLink}
              to="/messaggistica"
              className="d-flex flex-column align-items-center"
            >
              <i className="bi bi-chat-dots-fill"></i>
              <span className="small">Messaggistica</span>
            </Nav.Link>

            {/* NOTIFICHE */}
            <Nav.Link
              as={NavLink}
              to="/notifiche"
              className="d-flex flex-column align-items-center"
            >
              <i className="bi bi-bell-fill"></i>
              <span className="small">Notifiche</span>
            </Nav.Link>

            {/* PROFILO */}
            <Nav.Link
              as={NavLink}
              to="/me"
              className="d-flex flex-column align-items-center"
            >
              <i className="bi bi-person-circle"></i>
              <span className="small">Tu</span>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar;
