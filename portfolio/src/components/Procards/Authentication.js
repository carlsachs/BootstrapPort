import React from "react";

//import bootstrap/css
import "./Readrr.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

//images
import Db2 from "./images/db4.png";

const Authentication = () => {

    return (
        <Card bg="light" style={{ width: '20rem' }}>
            <Card.Img variant="top" src={Db2} />
            <Card.Body>
                <Card.Title>Authentication</Card.Title>
                <Card.Text>
                One of my Lambda backend challenges incorporating Auth.
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem><b>Complexity:</b>  Advanced</ListGroupItem>
                <ListGroupItem><b>Language:</b>  Node/JWT/Bcrypt</ListGroupItem>
                <ListGroupItem><b>Time Allotted:</b>  Few Hours</ListGroupItem>
            </ListGroup>
            <Card.Body className="bottom">
                <Card.Link href="https://github.com/carlsachs/Sprint-Challenge-Authentication">Repository</Card.Link>
            </Card.Body>
        </Card>
    )
}

export default Authentication;