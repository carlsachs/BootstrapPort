import React from "react";

//import bootstrap
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavDropdown } from "react-bootstrap";
import Button from "react-bootstrap/Button";

//import other components
import ContactModal from "./ContactModal";

import "./Carl-Sachs-Resume.pdf";

//import css
import "./Nav.css";

const Nav1 = () => {
    return (
        <Navbar className="main-nav" fixed="top" collapseOnSelect expand="lg" variant="light">
            <Navbar.Brand href="/" style={{color: "aliceblue", fontSize: "2rem"}}>Carl Sachs</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/projects" id="projects-nav-item">Projects</Nav.Link>
                <Nav.Link href="/about" id="about-nav-item">About Me</Nav.Link>
                <NavDropdown title="Contact Me" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="https://www.twitter.com/CarltonSachs" target="_blank" style={{textAlign: "center"}}>My Twitter</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="https://www.linkedin.com/in/carl-sachs/" target="_blank" style={{textAlign: "center"}}>My LinkedIn</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Nav className="nav-left">
                <a href={require("./FinalResume.pdf")} style={{textDecoration: "none", padding: "2%", borderRadius: "3px"}} className="resume-button" download="Carl's Resume">Download Resume</a>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Nav1;


