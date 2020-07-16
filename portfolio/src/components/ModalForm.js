import React, { useState } from "react";

//import bootstrap and css
import "./ModalForm.css";
import Form from "react-bootstrap/Form";

const ModalForm = () => {

    const submit = (e) => {
        e.preventDefault()
        fetch("https://hooks.zapier.com/hooks/catch/8041428/ozgc3ch", {
            method: "POST",
            body: JSON.stringify({ name, email, message })
        })
    }

    const

    return (
        <Form onSubmit={submit}>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control name="name" placeholder="What is your name?" value={name} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" />
                <Form.Text className="text-muted">
                    This is strictly for contact purposes, and will not be shared with anyone.
                </Form.Text>
            </Form.Group>
            <Form.Group>
                <Form.Label>I am</Form.Label>
                <Form.Control as="select">
                    <option>an Employer</option>
                    <option>a Recruiter</option>
                    <option>an Individual</option>
                    <option>Hiring for a freelance project</option>
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" />
            </Form.Group>
        </Form>
    )
}

export default ModalForm;