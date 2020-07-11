import React from "react";

//import css and bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from 'react-bootstrap/Carousel'

import "./About.css";

//import images
import detroit1 from "../images/detroit1.jpg";
import detroit2 from "../images/detroit2.jpg";
import minnesota from "../images/minnesota.jpg";

//import other components
import Nav1 from "./Nav";

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
                <Col>
                    
                </Col>
            </Row>
        </Container>
    )
}

export default About;