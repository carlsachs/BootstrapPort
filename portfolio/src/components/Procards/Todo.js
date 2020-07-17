import React from "react";

//import bootstrap/css
import "./Readrr.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

//images
import todo from "./images/todo.png";

const Todo = () => {

    return (
        <Card bg="light" style={{ width: '20rem' }}>
            <Card.Img variant="top" src={todo} />
            <Card.Body>
                <Card.Title>Database: To-Do</Card.Title>
                <Card.Text>
                Another one of my back-end projects.  A to-do list backend.
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem><b>Complexity:</b>  Intermediate</ListGroupItem>
                <ListGroupItem><b>Language:</b>  Node</ListGroupItem>
                <ListGroupItem><b>Time Allotted:</b>  1 Hour</ListGroupItem>
            </ListGroup>
            <Card.Body className="bottom">
                <Card.Link target="_blank" href="https://github.com/carlsachs/node-db-challenge">Repository</Card.Link>
            </Card.Body>
        </Card>
    )
}

export default Todo;