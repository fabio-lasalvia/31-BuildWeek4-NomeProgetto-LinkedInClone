import { Container, Row, Col, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import testoLinkedIn from "../assets/logo/testoLinkedIn.svg";

function MyFooter() {
    return (
        <footer className="bg-dark text-white py-4 mt-5">
            <Container>
                <Row>
                    <Col sm={12}>
                        
                        <ul className="list-unstyled">
                            <li><Nav.Link as={Link} to="/">Informazioni</Nav.Link></li>
                            <li><Nav.Link as={Link} to="/catalogo">Accessibilità</Nav.Link></li>
                            <li><Nav.Link as={Link} to="/popolari">Centro assistenza</Nav.Link></li>
                            <li><Nav.Link as={Link} to="/uscite">Privacy e condizioni</Nav.Link></li>
                            <li><Nav.Link as={Link} to="/uscite">Opzioni per gli annunci pubblicitari</Nav.Link></li>
                            <li><Nav.Link as={Link} to="/uscite">Pubblicità</Nav.Link></li>
                            <li><Nav.Link as={Link} to="/uscite">Servizi alle aziende</Nav.Link></li>
                            <li><Nav.Link as={Link} to="/uscite">Scarica l'app LinkedIn</Nav.Link></li>
                            <li><Nav.Link as={Link} to="/uscite">Altro</Nav.Link></li>
                        </ul>
                    </Col>
                    
                </Row>
                <hr className="bg-secondary mt-4" />
                <p className="text-center text-secondary mb-0"><span><img src={testoLinkedIn} alt="" /></span>LinkedIn Clone Corporation &copy; 2025</p>
            </Container>
        </footer>
    )
}

export default MyFooter