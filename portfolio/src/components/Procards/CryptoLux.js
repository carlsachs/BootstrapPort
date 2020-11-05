import React from "react";

//import bootstrap/css
import "./Readrr.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

//images
import lux from "./images/lux.png";

const InstaClone = () => {

    return (
        <Card bg="light" style={{ width: '20rem' }}>
            <Card.Img variant="top" src={lux} />
            <Card.Body>
                <Card.Title>Crypto Luxury</Card.Title>
                <Card.Text>
                Client site, created with entire system of admin management.
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem><b>Complexity:</b>  Advanced</ListGroupItem>
                <ListGroupItem><b>Language:</b>  React/Node</ListGroupItem>
                <ListGroupItem><b>Time Allotted:</b> 1 1/2 Weeks</ListGroupItem>
            </ListGroup>
            <Card.Body className="bottom">
                <Card.Link target="_blank" href="https://github.com/carlsachs/React-Components-Insta-Clone">Repository</Card.Link>
            </Card.Body>
        </Card>
    )
}

export default InstaClone;