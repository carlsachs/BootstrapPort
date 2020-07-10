import React from "react";

//import bootstrap/css
import "./Readrr.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

//images
import readrr from "./images/readrr.png";

const Readrr = () => {

    return (
        <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src={readrr} />
            <Card.Body>
                <Card.Title>Readrr (Featured)</Card.Title>
                <Card.Text>
                My Lambda School "thesis".  Goodreads alternative. (Landing page was made 1 hour prior to presentation, just a filler.)
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem><b>Role:</b>  Front-End Developer</ListGroupItem>
                <ListGroupItem><b>Language:</b>  React Native</ListGroupItem>
                <ListGroupItem><b>Time Allotted:</b>  2 Months</ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Card.Link href="https://readrr.app/">Demo</Card.Link>
                <Card.Link href="https://github.com/Lambda-School-Labs/betterreads-fe">Repository</Card.Link>
            </Card.Body>
        </Card>
    )
}

export default Readrr;