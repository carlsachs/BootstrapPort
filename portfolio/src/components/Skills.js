import React from "react";

//import bootstrap and css / other styling components
import "./Skills.css";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import { Fade } from "react-reveal";
import Footer from "./Footer";

//import other components
import Nav from "./Nav.js";

const Skills = () => {

    return (
        <Container fluid>
        <Nav />
            <Row className="top-skills">
                
                <Row className="skills-title">
                    <Fade top>
                        <h2>Skills</h2>
                    </Fade>
                </Row>
                <Row className="skills-desc">
                    <Fade bottom>
                        <h3>Lambda is fast-paced, and full of resource.  Done right, it can set you up to learn any concept in programming and adapt to the environment quickly and efficiently.</h3>
                    </Fade>
                    </Row>
            </Row>
            <Row className="skillbox">
                    <Fade bottom>
                    <Row className="skillbox-title">
                        <h3>This is a complete list of my skills, and I will add to it as needed.</h3>
                    </Row>
                    </Fade>
                    <Row className="skills-cards">
                        <Card body style={{margin: "1%"}}>HTML</Card>
                        <Card body style={{margin: "1%"}}>CSS</Card>
                        <Card body style={{margin: "1%"}}>React.js</Card>
                        <Card body style={{margin: "1%"}}>Node.js</Card>
                        <Card body style={{margin: "1%"}}>Python</Card>
                        <Card body style={{margin: "1%"}}>TypeScript</Card>
                        <Card body style={{margin: "1%"}}>MySQL</Card>
                        <Card body style={{margin: "1%"}}>PostgresQL</Card>
                        <Card body style={{margin: "1%"}}>Publishing npm libraries</Card>
                        <Card body style={{margin: "1%"}}>Firebase</Card>
                        <Card body style={{margin: "1%"}}>PostgresQL</Card>
                        <Card body style={{margin: "1%"}}>React Native</Card>
                        <Card body style={{margin: "1%"}}>Expo CLI</Card>
                        <Card body style={{margin: "1%"}}>TailwindCSS</Card>
                        <Card body style={{margin: "1%"}}>Knex.js</Card>
                    </Row>
            </Row>
            <Footer />
        </Container>
    )
}

export default Skills;