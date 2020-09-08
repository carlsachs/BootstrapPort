import React from "react";

//import bootstrap/css
import "./Readrr.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

//images
import cyphen from "./images/cyphen.png";

const MedCabinet = () => {

    return (
        <Card bg="light" style={{ width: '20rem' }}>
            <Card.Img variant="top" src={cyphen} />
            <Card.Body>
                <Card.Title>Cyphen Development</Card.Title>
                <Card.Text>
                Website in dev.  Creating web applications for businesses.
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem><b>Complexity:</b>  Advanced</ListGroupItem>
                <ListGroupItem><b>Language:</b>  React</ListGroupItem>
                <ListGroupItem><b>Time Allotted:</b>  2 Weeks</ListGroupItem>
            </ListGroup>
            <Card.Body className="bottom">
                <Card.Link target="_blank" href="https://cyphen-25583.web.app/">Website</Card.Link>
                <Card.Link target="_blank" href="https://www.linkedin.com/company/cyphen-development">LinkedIn</Card.Link>
            </Card.Body>
        </Card>
    )
}

export default MedCabinet;