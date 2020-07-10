import React from "react";

//import bootstrap
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavDropdown } from "react-bootstrap";

const Nav1 = () => {
    return (
        <Navbar fixed="top" collapseOnSelect expand="lg" bg="light" variant="light">
            <Navbar.Brand href="/">Carl's Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/projects">Projects</Nav.Link>
                <Nav.Link href="/about">About Me</Nav.Link>
                <NavDropdown title="Contact Me" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="https://mail.google.com/mail/?view=cm&fs=1&to=sachscarl@gmail.com&su=Inquiry&body=Thank you for taking the time to send me a message.  I will get back to you promptly!" target="_blank">Send me an Email</NavDropdown.Item>
                    <NavDropdown.Item href="https://www.twitter.com/CarltonSachs" target="_blank">Follow me on Twitter</NavDropdown.Item>
                    <NavDropdown.Item href="https://www.facebook.com/CarlSachsWeb/" target="_blank">Message me on FaceBook</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="https://www.linkedin.com/in/carl-sachs/" target="_blank">Connect on LinkedIn</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Nav>
                <Nav.Link href="https://www.linkedin.com/in/carl-sachs/" target="_blank">LinkedIn</Nav.Link>
                <Nav.Link href="https://github.com/carlsachs" target="_blank">GitHub</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                    Resume
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Nav1;


