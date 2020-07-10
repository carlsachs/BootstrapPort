import React from "react";

//import bootstrap/css
import "./Readrr.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

//images
import Dbpic from "./images/db3.png";

const Db3 = () => {

    return (
        <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src={Dbpic} />
            <Card.Body>
                <Card.Title>Basic Authentication</Card.Title>
                <Card.Text>
                One of my projects highlighting my knowledge of authentication through JWT.
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem><b>Role:</b>  Developer</ListGroupItem>
                <ListGroupItem><b>Language:</b>  Node/JWT/Bcrypt</ListGroupItem>
                <ListGroupItem><b>Time Allotted:</b>  Few Hours</ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Card.Link href="https://github.com/carlsachs/node-auth2-project">Repository</Card.Link>
            </Card.Body>
        </Card>
    )
}

export default Db3;