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
        <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src={Db2} />
            <Card.Body>
                <Card.Title>Authentication</Card.Title>
                <Card.Text>
                One of my projects highlighting my knowledge of authentication through JWT, bCrypt, helmet, etc.
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem><b>Role:</b>  Developer</ListGroupItem>
                <ListGroupItem><b>Language:</b>  Node/JWT/Bcrypt</ListGroupItem>
                <ListGroupItem><b>Time Allotted:</b>  Few Hours</ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Card.Link href="https://github.com/carlsachs/Sprint-Challenge-Authentication">Repository</Card.Link>
            </Card.Body>
        </Card>
    )
}

export default Authentication;