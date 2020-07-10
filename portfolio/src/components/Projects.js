import React from "react";

//import resources
import { Link } from "react-router-dom";
import { Fade, Flip } from "react-reveal";

//other components
import Readrr from "./Procards/Readrr";
import Bootwork from "./Procards/Bootwork";

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
                <h2 style={{marginTop: "2%", textDecoration: "none", color: "#003a8c", border: "1px solid #003a8c", padding: "10px", borderRadius: "10px", textAlign: "center"}}>Front end</h2>
            </div>
        </Row>
        <Row className="front-boxes">
            <Col>
                <Readrr />
            </Col>
            <Col>
                <Bootwork />
            </Col>
        </Row>
        </Container>
    )
}

export default Projects;


// <div className="front-end">
// <div className="front-top">
//     <h2 style={{marginTop: "2%", textDecoration: "none", color: "#003a8c", border: "1px solid #003a8c", padding: "10px", borderRadius: "10px", width: "20%", margin: "0 auto", textAlign: "center"}}>Front-End</h2>
// </div>
// <div className="front-bottom">
//     <Slide left>
//         <FE2 />
//     </Slide>
//     <Slide right>
//         <FE3 />
//     </Slide>
//     <Slide left>
//         <FE1 />
//     </Slide>
//     <Slide right>
//         <FE4 />
//     </Slide>
//     <Slide left>
//         <FE5 />
//     </Slide>
// </div>
// </div>
// <div className="back-end">
// <div className="back-top">
//     <h2 style={{marginTop: "2%", textDecoration: "none", color: "#003a8c", border: "1px solid #003a8c", padding: "10px", borderRadius: "10px", width: "20%", margin: "0 auto"}}>Back-End</h2>
// </div>
// <div className="front-bottom">
//     <Slide left>
//         <BE1 />
//     </Slide>
//     <Slide right>
//         <BE2 />
//     </Slide>
//     <Slide left>
//         <BE3 />
//     </Slide>
//     <Slide right>
//         <BE4 />
//     </Slide>
// </div>
// </div>
// <div className="CS">
// <div className="CS-top">
//     <h2 style={{marginTop: "2%", textDecoration: "none", color: "#003a8c", border: "1px solid #003a8c", padding: "10px", borderRadius: "10px", width: "20%", margin: "0 auto"}}>Computer Science</h2>
// </div>
// <div className="CS-bottom">
//     <Slide left>
//         <FE2 />
//     </Slide>
//     <Slide right>
//         <FE3 />
//     </Slide>
//     <Slide left>
//         <FE1 />
//     </Slide>
//     <Slide right>
//         <FE4 />
//     </Slide>
//     <Slide left>
//         <FE5 />
//     </Slide>
// </div>
// </div>