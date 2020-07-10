import React from "react";

//import bootstrap/css
import "./Readrr.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

//images
import port from "./images/port.png";

const Portfolio = () => {

    return (
        <Card style={{ width: '50rem', margin: "0 auto" }}>
            <Card.Img variant="top" src={port} />
            <Card.Body>
                <Card.Title>This Very Portfolio</Card.Title>
                <Card.Text>
                The repo for this portfolio.
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem><b>Role:</b>  Developer</ListGroupItem>
                <ListGroupItem><b>Language:</b>  React/BootStrap</ListGroupItem>
                <ListGroupItem><b>Time Allotted:</b>  A Couple Days</ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Card.Link href="/">Home</Card.Link>
                <Card.Link href="https://github.com/carlsachs/BootstrapPort">Repository</Card.Link>
            </Card.Body>
        </Card>
    )
}

export default Portfolio;