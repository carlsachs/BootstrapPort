import React, { useState } from "react";

//import bootstrap and css
import "./ModalForm.css";
import Form from "react-bootstrap/Form";

const ModalForm = () => {

    const submit = (e) => {
        e.preventDefault()
        fetch("", {
            method: "POST",
            body: JSON.stringify({ name, email, message })
        }).then(() => alert("Message Successfully sent!  Thank you!")).catch(() => alert("There was an error sending your message, please try again"))
    }

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    return (
        <Form onSubmit={submit}>
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
        </Form>
    )
}

export default ModalForm;