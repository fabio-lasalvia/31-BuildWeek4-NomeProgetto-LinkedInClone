import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from 'react-router-dom'


function MyNavbar() {

    return (
        <>
            <Navbar>
                <Container>
                    <Navbar.Brand as={NavLink} to="/">
                        <img
                            src="#"
                            alt="Foto Profilo"
                            className="rounded"
                            style={{ maxWidth: "100px" }}
                        />
                    </Navbar.Brand>

                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )

}

export default MyNavbar