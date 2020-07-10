import React from "react";

//import css and bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";

import "./About.css";

//import other components
import Nav1 from "./Nav";

const About = () => {

    return (
        <Container fluid>
            <Nav1 />
            <Row className="top-about">
            
            </Row>
        </Container>
    )
}

export default About;