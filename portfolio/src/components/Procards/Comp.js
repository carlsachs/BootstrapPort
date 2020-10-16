import React from "react";

//import bootstrap/css
import "./Readrr.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

//images
import comp from "./images/CompPic.png";

const MedCabinet = () => {

    return (
        <Card bg="light" style={{ width: '20rem' }}>
            <Card.Img variant="top" src={comp} />
            <Card.Body>
                <Card.Title>Computer Architecture</Card.Title>
                <Card.Text>
                A series of problems, a good show of a daily project at Lambda.
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem><b>Complexity:</b>  Advanced</ListGroupItem>
                <ListGroupItem><b>Language:</b>  Python</ListGroupItem>
                <ListGroupItem><b>Time Allotted:</b>  Less than 1 Day</ListGroupItem>
            </ListGroup>
            <Card.Body className="bottom">
                <Card.Link target="_blank" href="https://github.com/carlsachs/Computer-Architecture">Repo</Card.Link>
            </Card.Body>
        </Card>
    )
}

export default MedCabinet;