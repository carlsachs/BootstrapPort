import React from "react";

//import bootstrap/css
import "./Readrr.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

//images
import insta from "./images/insta.png";

const InstaClone = () => {

    return (
        <Card bg="light" style={{ width: '20rem' }}>
            <Card.Img variant="top" src={insta} />
            <Card.Body>
                <Card.Title>InstaClone</Card.Title>
                <Card.Text>
                One of my first front-end projects.  Interesting, so I threw it up here.
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem><b>Complexity:</b>  Junior</ListGroupItem>
                <ListGroupItem><b>Language:</b>  React</ListGroupItem>
                <ListGroupItem><b>Time Allotted:</b> 2-3 Hours</ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Card.Link href="https://github.com/carlsachs/React-Components-Insta-Clone">Repository</Card.Link>
            </Card.Body>
        </Card>
    )
}

export default InstaClone;