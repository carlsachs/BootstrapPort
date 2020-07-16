import React from "react";
import { useState } from "react";

//import Bootstrap and css
import "./ContactModal.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const ContactModal = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <div>
        <Button variant="primary" onClick={handleShow}>
            Send me a Message
        </Button>
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
        <Modal.Header closeButton>
            <Modal.Title>Contact Me</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I should put my form here
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success">Send</Button>
        </Modal.Footer>
      </Modal>
      </div>
    )
}

export default ContactModal;