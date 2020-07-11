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
                    <Carousel>
                        <Carousel.Item>
                        <img
                            className="d-block w-100"
                            style={{height: "500px", opacity: ".6"}}
                            src={minnesota}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Work Preferences</h3>
                            <p>Jump to my Work Preferences, and view my resume.</p>
                        </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                        <img
                            className="d-block w-100"
                            style={{height: "500px", opacity: ".6"}}
                            src={detroit2}
                            alt="Work Preferences"
                        />
                    
                        <Carousel.Caption>
                            <h3>Life Before Lambda</h3>
                            <p>I used to work here, find out more about my life below!</p>
                        </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                        <img
                            className="d-block w-100"
                            style={{height: "500px", opacity: ".6"}}
                            src={minnesota}
                            alt="Third slide"
                        />
                    
                        <Carousel.Caption>
                            <h3>Life at Lambda</h3>
                            <p>View my current progress through my Lambda journey.</p>
                        </Carousel.Caption>
                        </Carousel.Item>
                </Carousel>
                </Col>
            </Row>
        </Container>
    )
}

export default About;