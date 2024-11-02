'use client'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export default function Menu() {
    return(
        <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
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
                        <NavDropdown.Item href="/wp/fachschaft/das-sind-wir">Das sind wir</NavDropdown.Item>
                        <NavDropdown.Item href="/wp/fachschaft/kontakt">Kontakt</NavDropdown.Item>
                        <NavDropdown.Item href="/wp/fachschaft/protokolle">Sitzungsprotokolle</NavDropdown.Item>
                        <NavDropdown.Item href="/wp/fachschaft/hopo-komissionen">HoPo / Komissionen</NavDropdown.Item>
                        <NavDropdown.Item href="/wp/fachschaft/satzung-geschaeftsordnung">Satzung / Geschäftsordnung</NavDropdown.Item>
                        <NavDropdown.Item href="/wp/fachschaft/newsletter">Newsletter</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/wp/english">English</Nav.Link>
                    <NavDropdown title="Aktuelles" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/wp/aktuelles/news">News</NavDropdown.Item>
                        <NavDropdown.Item href="/wp/aktuelles/jobs-und-co">Jobs & Co</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}