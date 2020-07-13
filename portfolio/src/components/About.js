import React from "react";
import { Link } from "react-router-dom";

//import css and bootstrap/styling libraries
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Flip, Slide, Fade } from "react-reveal";
import Card from "react-bootstrap/Card";

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
                <Slide left>
                <Row className="lambda-top">
                    <h4>When I joined Lambda, I had never really coded a day in my life.  I now am coding most of my days.  To check out the curriculum I have followed this year, click <Link to="">here.</Link></h4>
                </Row>
                </Slide>
                <Slide right>
                <Row className="lambda-bottom">
                    <h4>The two biggest skills I'm taking out of Lambda are top-of-the-line problem solving and team collaboration.  Check out why this is important and Lambda's different approach towards teaching programmers <Link to="https://lambdaschool.com/">here.</Link></h4>
                </Row>
                </Slide>
            </Row>
            <Flip bottom>
            <Row className="work-preference">
                <Row className="work-title">
                    <h2 id="work-title-id">Work Preference</h2>
                </Row>
            </Row>
            </Flip>
            <Row className="two-col">
                <Col className="left-work">
                <Row className="location-title">
                    <h3>Location</h3>
                </Row>
                <Row>
                    <Card  className="card-about" style={{ width: '25rem' }}>
                    <Card.Body>
                    <Card.Title>Current: Detroit</Card.Title>
                    <Card.Subtitle className="mb-2 text">Student @ Lambda</Card.Subtitle>
                    <Card.Text>
                        I am currently in school remotely in Detroit, Michigan.  I prefer to stay remote, but am open to relocating West.
                    </Card.Text>
                    <Card.Link id="location-resume" href="#">My Resume</Card.Link>
                    </Card.Body>
                </Card>
                </Row>
                </Col>
                <Col className="right-work">
                    <Row className="job-title">
                        <h3>Language</h3>
                    </Row>
                    <Row>
                    <Card  className="card-about" style={{ width: '25rem' }}>
                    <Card.Body>
                    <Card.Title>Bias: Front-End</Card.Title>
                    <Card.Subtitle className="mb-2 text">Focus in React.js</Card.Subtitle>
                    <Card.Text>
                        I am currently open for opportunities.  I would love to work with React, possibly using redux, bootstrap, materialUI, etc.
                    </Card.Text>
                    <Card.Link id="location-resume" href="https://mail.google.com/mail/?view=cm&fs=1&to=sachscarl@gmail.com&su=Inquiry&body=Thank you for taking the time to send me a message.  I will get back to you promptly!" target="_blank">Send me a message</Card.Link>
                    </Card.Body>
                </Card>
                </Row>
                </Col>
                <Col className="relocation">
                    <Row className="rel-title">
                        <h3>Relocation</h3>
                    </Row>
                    <Row>
                    <Card  className="card-about" style={{ width: '25rem' }}>
                    <Card.Body>
                    <Card.Title>Preference: West Coast</Card.Title>
                    <Card.Subtitle className="mb-2 text">Right in the heart of tech!</Card.Subtitle>
                    <Card.Text>
                        I am open to relocation. Although if this is the case, I would preferable relocate into the heart of tech on the west coast.  Seattle, San Diego, etc.
                    </Card.Text>
                    <Card.Link id="location-resume" href="https://mail.google.com/mail/?view=cm&fs=1&to=sachscarl@gmail.com&su=Inquiry&body=Thank you for taking the time to send me a message.  I will get back to you promptly!" target="_blank">Ask me about relocation</Card.Link>
                    </Card.Body>
                </Card>
                </Row>
                </Col>
            </Row>
                <Flip bottom>
                <Row className="titlebeforediv">
                    <h2 id="lifebefore-title-id">Life Before Lambda</h2>
                </Row>
                </Flip>
            <Row className="before">
            </Row>
            <Footer />
        </Container>
    )
}

export default About;