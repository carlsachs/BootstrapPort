import React from "react";

//import bootstrap/css
import "./Readrr.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

//images
import middle from "./images/middleware.png";

const Middleware = () => {

    return (
        <Card bg="light" style={{ width: '20rem' }}>
            <Card.Img variant="top" src={middle} />
            <Card.Body>
                <Card.Title>Database: Middleware</Card.Title>
                <Card.Text>
                One of my first back-end projects.  A good basis of growth.
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem><b>Complexity:</b>  Junior</ListGroupItem>
                <ListGroupItem><b>Language:</b>  Node</ListGroupItem>
                <ListGroupItem><b>Time Allotted:</b>  1 Hour</ListGroupItem>
            </ListGroup>
            <Card.Body className="bottom">
                <Card.Link target="_blank" href="https://github.com/carlsachs/node-api3-project">Repository</Card.Link>
            </Card.Body>
        </Card>
    )
}

export default Middleware;