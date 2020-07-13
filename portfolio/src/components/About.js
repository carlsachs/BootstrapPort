import React from "react";

//import css and bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProgressBar from "react-bootstrap/ProgressBar";


import "./About.css";

//import images
import detroit1 from "../images/detroit1.jpg";
import detroit2 from "../images/detroit2.jpg";
import minnesota from "../images/minnesota.jpg";

//import other components
import Nav1 from "./Nav";
import Footer from "./Footer";

const About = () => {

    return (
        <Container fluid>
            <Nav1 />
            <Row className="top-about">
                <Col className="name-title">
                    <Row className="name">
                        <h2>Carl Sachs</h2>
                    </Row>
                    <Row className="title">
                        <h3>Web Developer</h3>
                    </Row>
                </Col>
                <Col style={{marginTop: "12%"}}>
                   <h2 style={{textAlign: "center", color: "aliceblue", fontSize: "3rem" }}>Image of myself here</h2>
                </Col>
            </Row>
            <Row className="track">
                <Col className="left-track">
                    <h2>Life at Lambda</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Col>
                <Col className="right-track">
                <Row>
                    <h2>Completion</h2>
                </Row>
                <Row>
                <p>Track my completion of the Lambda Full-Stack Development course.</p>
                </Row>
                </Col>
            </Row>
            <Footer />
        </Container>
    )
}

export default About;