'use client'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export default function Menu() {
    return (
        <Navbar expand="lg" className="bg-body-secondary" sticky="top">
            <Container>
                <Navbar.Brand href="/wp/geoloek">Start</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="me-auto">
                        <NavDropdown title="Aktuelles" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/wp/geoloek/aktuelles/news">News</NavDropdown.Item>
                            <NavDropdown.Item href="/wp/geoloek/aktuelles/jobs-und-co">Jobs & Co</NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link href="/wp/geoloek/termine">Termine</Nav.Link>

                        <NavDropdown title="Erstis" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/wp/geoloek/erstis/erstiwoche">Ersti-Woche</NavDropdown.Item>
                            <NavDropdown.Item href="/wp/geoloek/erstis/stundenplaene">Stundenpläne</NavDropdown.Item>
                            <NavDropdown.Item href="/wp/geoloek/erstis/ersti-fragen">Ersti-Fragen</NavDropdown.Item>
                            <NavDropdown.Item href="/wp/geoloek/erstis/erstifahrt">Ersti-Fahrt</NavDropdown.Item>
                            <NavDropdown.Item href="/wp/geoloek/erstis/material">Material</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Angebote" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/wp/geoloek/praesenzzeiten">Präsenzzeiten</NavDropdown.Item>
                        </NavDropdown>
                        
                        <Nav.Link href="/wp/geoloek/kontakt">Kontakt</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}