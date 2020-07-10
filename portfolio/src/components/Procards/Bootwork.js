import React from "react";

//import bootstrap/css
import "./Readrr.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

//images
import bootwork from "./images/bootwork.png";

const Bootwork = () => {

    return (
        <Card bg="light" style={{ width: '20rem' }}>
            <Card.Img variant="top" src={bootwork} />
            <Card.Body>
                <Card.Title>BootWork</Card.Title>
                <Card.Text>
                Connected Junior devs to employers in that market.(Unfinished)
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem><b>Complexity:</b>  Advanced</ListGroupItem>
                <ListGroupItem><b>Language:</b>  Typescript/Redux</ListGroupItem>
                <ListGroupItem><b>Time Allotted:</b>  1 Month (Nights)</ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Card.Link href="https://bootwork.app/">Website</Card.Link>
                <Card.Link href="https://www.facebook.com/BootWorkOfficial">Facebook Page</Card.Link>
            </Card.Body>
        </Card>
    )
}

export default Bootwork;