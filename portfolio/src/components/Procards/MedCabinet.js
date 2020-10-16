import React from "react";

//import bootstrap/css
import "./Readrr.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

//images
import med from "./images/medcab.png";

const Bootwork = () => {

    return (
        <Card bg="light" className="card" style={{ width: '20rem' }}>
            <Card.Img variant="top" src={med} />
            <Card.Body>
                <Card.Title>MedCabinet</Card.Title>
                <Card.Text>
                A webapp helping medical patients find and save their favorite strains.
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem><b>Complexity:</b>  Intermediate</ListGroupItem>
                <ListGroupItem><b>Language:</b>  React/Redux</ListGroupItem>
                <ListGroupItem><b>Time Allotted:</b>  3 Days</ListGroupItem>
            </ListGroup>
            <Card.Body className="bottom">
                <Card.Link target="_blank" href="https://med-cabinet-3.now.sh/">Demo</Card.Link>
                <Card.Link target="_blank" href="https://github.com/bw-med-cabinet-3/Front-End">Repo</Card.Link>
            </Card.Body>
        </Card>
    )
}

export default Bootwork;