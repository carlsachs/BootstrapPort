import React from "react";

//import bootstrap/css
import "./Readrr.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

//images
import algo from "./images/Algo.png";

const MedCabinet = () => {

    return (
        <Card bg="light" style={{ width: '20rem' }}>
            <Card.Img variant="top" src={algo} />
            <Card.Body>
                <Card.Title>Algorithms</Card.Title>
                <Card.Text>
                A series of algorithm problems, a good show of my algo learning curve.
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem><b>Complexity:</b>  Advanced</ListGroupItem>
                <ListGroupItem><b>Language:</b>  Python</ListGroupItem>
                <ListGroupItem><b>Time Allotted:</b>  2 Hours</ListGroupItem>
            </ListGroup>
            <Card.Body className="bottom">
                <Card.Link target="_blank" href="https://github.com/carlsachs/Sprint-Challenge--Algorithms">Repo</Card.Link>
            </Card.Body>
        </Card>
    )
}

export default MedCabinet;