import React from "react";
import { Link } from "react-router-dom";

//import css and bootstrap/styling libraries
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Flip, Fade, Slide } from "react-reveal";

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
            <Flip bottom>
            <Row className="titlediv">

                    <h2 id="life-title-id">Life at Lambda</h2>

            </Row>
            </Flip>
            <Row>
                <Row className="lambda-top">
                    <h4>When I joined Lambda, I had never really coded a day in my life.  I now am coding most of my days.  To check out the curriculum I have followed this year, click <Link to="">here.</Link></h4>
                </Row>
                <Row className="lambda-bottom">
                    <h4>Check out Lambda and the different approach they have towards teaching programmers <Link to="https://lambdaschool.com/">here.</Link></h4>
                </Row>
            </Row>
            <Footer />
        </Container>
    )
}

export default About;