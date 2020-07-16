import React from "react";

//import bootstrap
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavDropdown } from "react-bootstrap";
import Button from "react-bootstrap/Button";

//import images
import github from "./Procards/images/github.png";

//import other components
import ContactModal from "./ContactModal";

//import other components
import DownloadLink from "react-download-link";

//import css
import "./Nav.css";

const Nav1 = () => {
    return (
        <Navbar className="main-nav" fixed="top" collapseOnSelect expand="lg" variant="light">
            <Navbar.Brand href="/" style={{color: "#69c0ff", fontSize: "2rem"}}>Carl Sachs</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/projects" id="projects-nav-item">Projects</Nav.Link>
                <Nav.Link href="/about" id="about-nav-item">About Me</Nav.Link>
                <NavDropdown title="Contact Me" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="https://www.twitter.com/CarltonSachs" target="_blank">Follow me on Twitter</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="https://www.linkedin.com/in/carl-sachs/" target="_blank">Connect on LinkedIn</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Nav className="nav-left">
                <ContactModal />
                <Button variant="light" className="resume-button"><DownloadLink style={{textDecoration: "none"}} label="Download Resume" filename="Carl-Sachs-Resume.pdf" exportFile={() => "My cached data"} /></Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Nav1;


