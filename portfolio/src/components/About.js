import React from "react";
import { Link } from "react-router-dom";

//import css and bootstrap/styling libraries
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Flip, Slide, Fade, Bounce } from "react-reveal";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

//profile image
import profile from "../images/profile.png"

import "./About.css";

//import images
import coach from "../images/coach.jpeg";
import school from "../images/school.jpeg";
import pistons from "../images/pistons.jpg";

//import other components
import Nav1 from "./Nav";
import Footer from "./Footer";

const About = () => {

    return (
        <Container style={{margin: "0"}} fluid>
            <Nav1 />
            <Row className="top-about">
                <Col className="name-title">
                    <Slide left>
                    <Row className="name">
                        <h2>Carl Sachs</h2>
                    </Row>
                    </Slide>
                    <Slide bottom>
                    <Row className="title-developer">
                        <h3>Full-Stack Web Developer</h3>
                    </Row>
                    </Slide>
                </Col>

                <Col className="d-none d-md-block" md={0} style={{marginTop: "7%", marginLeft: "25%"}}>
                <div>
                   <img src={profile} alt="image of me and my pops" style={{
                       height: "300px",
                       width: "250px",
                       display: "flex",
                       justifyContent: "center",
                       borderRadius: "10%"
                   }} />
                   </div>
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
                    <h4>When I joined Lambda, I had never really coded a day in my life.  That changed quickly.  Lambda's skills have allowed me to explore the world of code with a level of interpretation I couldn't have imagined a year ago.</h4>
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
            <Row className="two-col" md={2} sm={1} xs={1}>
                <Col className="left-work">
                <Row className="location-title">
                    <h3>Location</h3>
                </Row>
                <Slide bottom>
                <Row>
                    <Card  className="card-about" style={{ width: '25rem' }}>
                        <Card.Body>
                        <Card.Title>Current: Detroit</Card.Title>
                        <Card.Subtitle className="mb-2 text">Student @ Lambda</Card.Subtitle>
                        <Card.Text>
                            I am currently in school remotely in Detroit, Michigan.  I prefer to stay remote, but will go where the opportunities take me.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Row>
                </Slide>
                </Col>
                <Col className="right-work">
                    <Row className="job-title">
                        <h3>Language</h3>
                    </Row>
                    <Slide bottom delay={100}>
                    <Row>
                    <Card  className="card-about" style={{ width: '25rem' }}>
                    <Card.Body>
                    <Card.Title>Bias: Front-End</Card.Title>
                    <Card.Subtitle className="mb-2 text">Focus in React.js</Card.Subtitle>
                    <Card.Text>
                        I am currently open for opportunities.  I would love to work with React, possibly using redux, bootstrap, materialUI, etc.
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Row>
                </Slide>
                </Col>
                <Col className="relocation">
                    <Row className="rel-title">
                        <h3>Relocation</h3>
                    </Row>
                    <Slide bottom delay={200}>
                    <Row>
                    <Card  className="card-about" style={{ width: '25rem' }}>
                    <Card.Body>
                    <Card.Title>Preference: West Coast</Card.Title>
                    <Card.Subtitle className="mb-2 text">Right in the heart of tech!</Card.Subtitle>
                    <Card.Text>
                        I am open to relocation. Although if this is the case, I would preferably relocate into the heart of tech on the west coast.  Seattle, San Diego, etc.
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Row>
                </Slide>
                </Col>
            </Row>
                <Flip bottom>
                <Row className="titlebeforediv">
                    <h2 id="lifebefore-title-id">Life Before Lambda</h2>
                </Row>
                </Flip>
            <Fade bottom>
                <Row className="before">
                    <h3>My life has been focused on the people industry.  Whether it be bartending, serving, or sales, I was all about it.</h3>
                </Row>
            </Fade>
            <Row className="about-three-cards">
                <Row className="card1-row">
                    <Bounce left>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={coach} />
                            <Card.Body>
                            <Card.Title>GM Rennaissance</Card.Title>
                            <Card.Text>
                                At both Coach Insignia and Andiamo Riverfront, I provided a memorable experience for anyone who came through the door.  I really couldn't have asked for better places of work at the time.
                            </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                            <ListGroupItem>Bartending</ListGroupItem>
                            <ListGroupItem>Serving</ListGroupItem>
                            <ListGroupItem>Sales and People Skills</ListGroupItem>
                            </ListGroup>
                            <Card.Body style={{background: "none"}}>
                            <Card.Link href="#">Resume</Card.Link>
                            <Card.Link href="#">LinkedIn</Card.Link>
                            </Card.Body>
                        </Card>
                    </Bounce>
                </Row>
                <Row className="card2-row">
                    <Bounce left delay={100}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={school} />
                            <Card.Body>
                            <Card.Title>College Stint</Card.Title>
                            <Card.Text>
                               I attended Wayne State University in Downtown Detroit to pursue a career in Entrepreneurship.  I quickly realized that I could boost that career further with tech.
                            </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                            <ListGroupItem>Major: Entrepreneurship</ListGroupItem>
                            <ListGroupItem>Minor: Finance</ListGroupItem>
                            <ListGroupItem>Time Management Skills</ListGroupItem>
                            </ListGroup>
                            <Card.Body style={{background: "none"}}>
                            <Card.Link href="#">Resume</Card.Link>
                            <Card.Link href="#">LinkedIn</Card.Link>
                            </Card.Body>
                        </Card>
                    </Bounce>
                </Row>
                <Row className="card3-row">
                <Bounce left delay={200}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={pistons} />
                            <Card.Body>
                            <Card.Title>Outside of Code</Card.Title>
                            <Card.Text>
                                I have had a very unique path in life but something I've loved to do through it all is play basketball.  I grew up watching the Pistons back in 03', 04', and have played recreationally most of my life.
                            </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                            <ListGroupItem>Focus</ListGroupItem>
                            <ListGroupItem>TeamWork</ListGroupItem>
                            <ListGroupItem>Leadership</ListGroupItem>
                            </ListGroup>
                            <Card.Body style={{background: "none"}}>
                            <Card.Link href="https://www.youtube.com/watch?v=4AisIcFHpko" target="_blank">2004 Pistons Tribute</Card.Link>
                            </Card.Body>
                        </Card>
                    </Bounce>
                </Row>
            </Row>
            <Footer />
        </Container>
    )
}

export default About;