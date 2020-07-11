import React from "react";

//import bootstrap
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavDropdown } from "react-bootstrap";

//import css
import "./Nav.css";

const Nav1 = () => {
    return (
        <Navbar className="main-nav" fixed="top" collapseOnSelect expand="lg" variant="light">
            <Navbar.Brand href="/" style={{color: "#003a8c"}}>Carl's Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/projects" style={{color: "aliceblue"}}>Projects</Nav.Link>
                <Nav.Link href="/about" style={{color: "aliceblue"}}>About Me</Nav.Link>
                <NavDropdown title="Contact Me" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="https://mail.google.com/mail/?view=cm&fs=1&to=sachscarl@gmail.com&su=Inquiry&body=Thank you for taking the time to send me a message.  I will get back to you promptly!" target="_blank">Send me an Email</NavDropdown.Item>
                    <NavDropdown.Item href="https://www.twitter.com/CarltonSachs" target="_blank">Follow me on Twitter</NavDropdown.Item>
                    <NavDropdown.Item href="https://www.facebook.com/CarlSachsWeb/" target="_blank">Message me on FaceBook</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="https://www.linkedin.com/in/carl-sachs/" target="_blank">Connect on LinkedIn</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Nav>
                <Nav.Link href="https://www.linkedin.com/in/carl-sachs/" target="_blank" style={{color: "aliceblue"}}>LinkedIn</Nav.Link>
                <Nav.Link href="https://github.com/carlsachs" target="_blank" style={{color: "aliceblue"}}>GitHub</Nav.Link>
                <Nav.Link href="#memes" target="_blank" style={{color: "aliceblue"}}>
                    Resume
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Nav1;


