import React from "react";

//import bootstrap and css
import "./Skills.css";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";

//import other components
import Nav from "./Nav.js";

const Skills = () => {

    return (
        <Container fluid>
        <Nav />
            <Row className="top-skills">
                <h2>Skills</h2>
            </Row>
            <Row className="skillbox">
                <Col>
                    
                </Col>
            </Row>
        </Container>
    )
}

export default Skills;