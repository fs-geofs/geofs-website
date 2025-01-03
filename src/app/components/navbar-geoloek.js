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
                            <NavDropdown.Item href="/wp/geoloek/erstis/ersti-heft">Ersti-Heft</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Studieninfos" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/wp/geoloek/studieninfos/geographie">Geographie</NavDropdown.Item>
                            <NavDropdown.Item href="/wp/geoloek/studieninfos/landschaftsoekologie">Landschaftsökologie </NavDropdown.Item>
                            <NavDropdown.Item href="/wp/geoloek/studieninfos/lehramt-2-fach">Lehramt & 2-Fach</NavDropdown.Item>
                            <NavDropdown.Item href="/wp/geoloek/studieninfos/ausland">Ausland</NavDropdown.Item>
                            <NavDropdown.Item href="/wp/geoloek/studieninfos/studentische-organisationen">Studentische Organisationen</NavDropdown.Item>
                            <NavDropdown.Item href="/wp/geoloek/studieninfos/links">Links</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Angebote" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/wp/geoloek/praesenzzeiten">Präsenzzeiten</NavDropdown.Item> 
                            <NavDropdown.Item href="/wp/geoloek/angebote/lernstoff">Lernstoff</NavDropdown.Item>
                            <NavDropdown.Item href="/wp/geoloek/angebote/fundsachen">Fundsachen</NavDropdown.Item>
                            <NavDropdown.Item href="/wp/geoloek/angebote/mailverteiler">Mail-Verteiler</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Über uns" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/wp/geoloek/ueber-uns/was-wir-sind">Was wir sind</NavDropdown.Item>
                            <NavDropdown.Item href="/wp/geoloek/ueber-uns/organisation">Organisation</NavDropdown.Item>
                            <NavDropdown.Item href="/wp/geoloek/ueber-uns/bufata">BuFaTa</NavDropdown.Item>
                            <NavDropdown.Item href="/wp/geoloek/ueber-uns/aemter">Ämter</NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link href="/wp/geoloek/awareness">Awareness</Nav.Link>

                        <Nav.Link href="/wp/geoloek/faq">FAQ</Nav.Link>
                        
                        <Nav.Link href="/wp/geoloek/kontakt">Kontakt</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}