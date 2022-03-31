import React from "react";
import { Navbar, Container, Nav, NavDropdown, Row ,Carousel } from "react-bootstrap";
function navbar(props){
    return(
        <>
        <Navbar className="indexing" expand="lg" variant="dark">
                <Container >
                    <Navbar.Brand href="#home">Tours & Travels</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto me-5">
                            <Nav.Link href="#home">HOME</Nav.Link>
                            <Nav.Link href="#ABOUT">ABOUT</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
export default navbar;