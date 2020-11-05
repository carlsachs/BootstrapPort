import React from "react";

//import resources
import { Link } from "react-router-dom";
import { Fade, Flip, Slide } from "react-reveal";

//other components
import Readrr from "./Procards/Readrr";
import MedCabinet from "./Procards/MedCabinet";
import Cyphen from "./Procards/Cyphen";
import Crypto from "./Procards/CryptoLux";
import Middleware from "./Procards/Middleware";
import Todo from "./Procards/Todo";
import Db3 from "./Procards/Db3";
import Authentication from "./Procards/Authentication";
import CarltonBot from "./Procards/CarltonBot";
import Conway from "./Procards/Conway";
import Comp from "./Procards/Comp";
import Algo from "./Procards/Algo";
import Footer from "./Footer";

//images
import undraw from "./undraw.svg";

//import css
import "./Projects.css";

//Bootstrap
import { Container, Row, Col } from "react-bootstrap";

import Nav1 from "./Nav";

const Projects = () => {
    
    return (
        <Container fluid style={{backgroundColor: "aliceblue"}}>
            <Nav1 />
        <Row className="top-proj">
            <Col className="top-left" md={6}>
                <Fade top>
                    <Row className="pro-title">
                        <h2>Featured Projects</h2>
                    </Row>
                </Fade>
                <Row>
                    <div className="repo1">
                        <h3>Compiled list of my skills <Link style={{textDecoration: "none", color: "white"}} to="/skills">here</Link></h3>
                    </div>
                </Row>
                <Col>
                    <Flip top delay={850}>
                        <div className="front-mid">
                            <a className="follow" target="_blank" href="https://github.com/carlsachs"
                            style={{
                                width: "80%",
                                textDecoration: "none",
                                fontSize: "1.4rem",
                                color: "aliceblue",
                                border: "1px solid aliceblue",
                                padding: "2%",
                                borderRadius: "10px",
                                marginBottom: "4%",
                                marginTop: "4%"
                            }}>Follow me on Github</a>
                        </div>
                    </Flip>
                </Col>
            </Col>

        </Row>
        <Row className="front-top">
            <Flip bottom>
                <div>
                    <h2 id="front-end-title">Front End</h2>
                </div>
            </Flip>
        </Row>
        <Row className="front-boxes">
        <Fade bottom>
        <Col>
            <Crypto />
        </Col>
        </Fade>
            <Fade bottom>
            <Col>
                <Readrr />
            </Col>
            </Fade>
            <Fade bottom>
            <Col>
                <Cyphen />
            </Col>
            </Fade>
            <Fade bottom>
            <Col>
                <MedCabinet />
            </Col>
            </Fade>
        </Row>
        <Slide left>
            <Row className="this">
                <div className="port">
                    <h2>To view the source code of this very portfolio, click <Link target="_blank" to="https://github.com/carlsachs/BootstrapPort" style={{color: "#69c0ff"}}>here</Link>.</h2>
                </div>   
            </Row>
        </Slide>
        <Row className="back-top">
            <Flip bottom>
                <div>
                    <h2 id="back-end-title">Back End</h2>
                </div>
            </Flip>
        </Row>
        <Slide right>
            <Row className="back-boxes">
            <Fade bottom>
                <Col>
                    <Authentication />
                </Col>
            </Fade>
            <Fade bottom>
                <Col>
                    <Db3 />
                </Col>
            </Fade>
            <Fade bottom>
                <Col>
                    <Todo />
                </Col>
            </Fade>
            <Fade bottom>
                <Col>
                <Middleware />
                </Col>
            </Fade>
            </Row>
        </Slide>
        <Row className="front-top">
            <Flip bottom>
                <div>
                    <h2 id="front-end-title">Computer Science</h2>
                </div>
            </Flip>
        </Row>
        <Row className="front-boxes">
            <Fade bottom>
            <Col>
                <CarltonBot />
            </Col>
            </Fade>
            <Fade bottom>
            <Col>
                <Conway />
            </Col>
            </Fade>
            <Fade bottom>
            <Col>
                <Comp />
            </Col>
            </Fade>
            <Fade bottom>
            <Col>
                <Algo />
            </Col>
            </Fade>
        </Row>
        <Slide right>
            <Footer />
        </Slide>
        </Container>
    )
}

export default Projects;