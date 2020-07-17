import React from "react";

//import bootstrap and css / other styling components
import "./Skills.css";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import { Fade } from "react-reveal";

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
                <Col>
                    <Fade bottom>
                    <Row className= "skillbox-title">
                        <h3>This is a complete list of my skills, and I will add to it as needed.</h3>
                    </Row>
                    </Fade>
                </Col>
            </Row>
        </Container>
    )
}

export default Skills;