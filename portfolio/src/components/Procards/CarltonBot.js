import React from "react";

//import bootstrap/css
import "./Readrr.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

//images
import bot from "./images/bot.png";

const MedCabinet = () => {

    return (
        <Card bg="light" style={{ width: '20rem' }}>
            <Card.Img variant="top" src={bot} />
            <Card.Body>
                <Card.Title>CarlBot</Card.Title>
                <Card.Text>
                Traditional stock market automated trader via algorithm strategies
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem><b>Complexity:</b>  Advanced</ListGroupItem>
                <ListGroupItem><b>Language:</b>  Python3</ListGroupItem>
                <ListGroupItem><b>Time Allotted:</b>  1 Week</ListGroupItem>
            </ListGroup>
            <Card.Body className="bottom">
                <Card.Link href="#">No Website</Card.Link>
                <Card.Link href="#">Repo Private</Card.Link>
            </Card.Body>
        </Card>
    )
}

export default MedCabinet;