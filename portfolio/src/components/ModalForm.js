import React, { useState } from "react";
import axios from "axios";

//import bootstrap and css
import "./ModalForm.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const ModalForm = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const submit = e => {
        e.preventDefault()
        fetch(`https://hooks.zapier.com/hooks/catch/8041428/ozlzf1m`, {
            method: "POST",
            body: JSON.stringify({ name, email, message }),
        }).then(() => alert("Success! I will get back to you promptly!"))
        .catch(() => alert("Oh No!  Please try again!"))
    }

    return (
        <Form>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control placeholder="What is your name?" onChange={(e) => setName(e.target.value)} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)}/>
                <Form.Text className="text-muted">
                    This is strictly for contact purposes, and will not be shared with anyone.
                </Form.Text>
            </Form.Group>
            <Form.Group>
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" placeholder="Type message here, and I will respond promptly" onChange={(e) => setMessage(e.target.value)}/>
            </Form.Group>
            <Button type="submit" onClick={submit}>Send</Button>
        </Form>
    )
}

export default ModalForm;