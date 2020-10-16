import React from "react";

//import bootstrap/css
import "./Readrr.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

//images
import life from "./images/Conway.png";

const MedCabinet = () => {

    return (
        <Card bg="light" style={{ width: '20rem' }}>
            <Card.Img variant="top" src={life} />
            <Card.Body>
                <Card.Title>Game of Life</Card.Title>
                <Card.Text>
                Conway's Game of Life, a staple project in the computer science world.
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem><b>Complexity:</b>  Intermediate</ListGroupItem>
                <ListGroupItem><b>Language:</b>  React</ListGroupItem>
                <ListGroupItem><b>Time Allotted:</b>  2 Days</ListGroupItem>
            </ListGroup>
            <Card.Body className="bottom">
                <Card.Link target="_blank" href="https://game-of-life-f71cd.web.app/">Demo</Card.Link>
                <Card.Link target="_blank" href="https://github.com/carlsachs/game-of-life">Repo</Card.Link>
            </Card.Body>
        </Card>
    )
}

export default MedCabinet;