'use client'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export default function Menu() {
    return(
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
            <Navbar.Brand href="/">Start</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">

                <Nav className="me-auto">
                    <NavDropdown title="Erstsemester" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/wp/erstsemester/studienstart">Studienstart</NavDropdown.Item>
                        <NavDropdown.Item href="/wp/erstsemester/erstiwoche">Ersti-Woche</NavDropdown.Item>
                        <NavDropdown.Item href="/wp/erstsemester/erstiwochenende">Ersti-Wochenende</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="Studium" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/wp/studium/studiengang">Studiengang</NavDropdown.Item>
                        <NavDropdown.Item href="/wp/studium/orga">Organisatorisches</NavDropdown.Item>
                        <NavDropdown.Item href="/wp/studium/kurse">FS Kursangebot</NavDropdown.Item>
                        <NavDropdown.Item href="/wp/studium/lernstoff">Lernstoff</NavDropdown.Item>
                        <NavDropdown.Item href="/wp/studium/jahrgaenge">Jahrgänge</NavDropdown.Item>
                        <NavDropdown.Item href="/wp/studium/faq">FAQ</NavDropdown.Item>
                        <NavDropdown.Item href="/wp/studium/links">Nützliche Links</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="Fachschaft" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Das sind wir</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Kontakt</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Sitzungsprotokolle</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.1">HoPo / Komissionen</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.1">Satzung / Geschäftsordnung</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="English" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="Aktuelles" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">News</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Jobs & Co</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}