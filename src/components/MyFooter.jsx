import { Container, Row, Col, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function MyFooter() {
    return (
        <footer className="bg-dark text-white py-4 mt-5">
            <Container>
                <Row>
                    <Col sm={12} md={4}>
                        <h5>Scopri</h5>
                        <ul className="list-unstyled">
                            <li><Nav.Link as={Link} to="/">Home</Nav.Link></li>
                            <li><Nav.Link as={Link} to="/catalogo">Catalogo</Nav.Link></li>
                            <li><Nav.Link as={Link} to="/popolari">Più Popolari</Nav.Link></li>
                            <li><Nav.Link as={Link} to="/uscite">In Uscita</Nav.Link></li>
                        </ul>
                    </Col>
                    <Col sm={12} md={4}>
                        <h5>Contatti</h5>
                        <ul className="list-unstyled">
                            <li><a href="mailto:info@epibooks.it">info@epibooks.it</a></li>
                            <li><a href="tel:+390123456789">+39 0123 456789</a></li>
                            <li><span>2311 North Los Robles Ave, Pasadena</span></li>
                        </ul>
                    </Col>
                    <Col sm={12} md={4}>
                        <h5>Social</h5>
                        <ul className="list-unstyled">
                            <li><a href="https://www.facebook.com/LinkedIn"><i className="bi bi-facebook me-2"></i>Facebook</a></li>
                            <li><a href="https://www.instagram.com/linkedin/"><i className="bi bi-instagram me-2"></i>Instagram</a></li>
                            <li><a href="https://twitter.com/LinkedIn"><i className="bi bi-twitter-x me-2"></i>X</a></li>
                            <li><a href="https://www.linkedin.com"><i className="bi bi-linkedin me-2"></i>LinkedIn</a></li>
                        </ul>
                    </Col>
                </Row>
                <hr className="bg-secondary mt-4" />
                <p className="text-center text-secondary mb-0">&copy; 2025 LinkedIn Clone. Tutti i diritti riservati.</p>
            </Container>
        </footer>
    )
}

export default MyFooter