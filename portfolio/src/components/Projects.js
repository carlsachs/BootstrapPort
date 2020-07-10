import React from "react";

//import resources
import { Link } from "react-router-dom";
import { Fade, Flip } from "react-reveal";

//other components
import Readrr from "./Procards/Readrr";
import Bootwork from "./Procards/Bootwork";
import MedCabinet from "./Procards/MedCabinet";
import InstaClone from "./Procards/InstaClone";
import Middleware from "./Procards/Middleware";
import Todo from "./Procards/Todo";
import Db3 from "./Procards/Db3";

//images
import undraw from "./undraw.svg";

//import css
import "./Projects.css";

//Bootstrap
import { Container, Row, Col } from "react-bootstrap";

import Nav1 from "./Nav";

const Projects = () => {
    
    return (
        <Container fluid>
            <Nav1 />
        <Row className="top-proj">
            <Col className="top-left">
                <Fade top>
                    <Row>
                        <h2>Featured Projects</h2>
                    </Row>
                </Fade>
                <Row>
                    <div className="repo">
                        <h3>Find all my repos <Link target="_blank"style={{textDecoration: "none", color: "white"}} to="https://github.com/carlsachs/repositories">here</Link></h3>
                    </div>
                </Row>
                <Row>
                    <div className="repo1">
                        <h3>Compiled list of my skills <Link style={{textDecoration: "none", color: "white"}} to="/skills">here</Link></h3>
                    </div>
                </Row>
                <Row>
                    <Flip top>
                        <div className="front-mid">
                            <a target="_blank" href="https://github.com/carlsachs">Follow me on Github</a>
                        </div>
                    </Flip>
                </Row>
            </Col>
            <Col>
                <Row>
                    <div className="top-right">
                        <img src={undraw} alt="svg of projects" />
                    </div>
                </Row>
            </Col>
        </Row>
        <Row className="front-top">
            <div>
                <h2 style={{marginTop: "2%", textDecoration: "none", color: "#003a8c", border: "1px solid #003a8c", padding: "10px", borderRadius: "10px", textAlign: "center"}}>Front End</h2>
            </div>
        </Row>
        <Row className="front-boxes">
            <Col>
                <Readrr />
            </Col>
            <Col>
                <Bootwork />
            </Col>
            <Col>
                <MedCabinet />
            </Col>
            <Col>
                <InstaClone />
            </Col>
        </Row>
        <Row className="this">
            <div className="port">
                <h2>To view the source code of this very portfolio, click <Link target="_blank" to="https://github.com/carlsachs/BootstrapPort" style={{color: "#69c0ff"}}>here</Link>.</h2>
            </div>   
        </Row>
        <Row className="back-top">
            <div>
                <h2 style={{marginTop: "2%", textDecoration: "none", color: "#003a8c", border: "1px solid #003a8c", padding: "10px", borderRadius: "10px", textAlign: "center"}}>Back End</h2>
            </div>
        </Row>
        <Row className="back-boxes">
            <Col>
                <Middleware />
            </Col>
            <Col>
                <Todo />
            </Col>
            <Col>
                <Db3 />
            </Col>
        </Row>
        </Container>
    )
}

export default Projects;