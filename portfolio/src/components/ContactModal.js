import React from "react";
import { useState } from "react";
import axios from "axios";

//import Bootstrap and css
import "./ContactModal.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ModalForm from "./ModalForm";

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
        <Modal.Title>
          Send a Message to me
        </Modal.Title>
        <Modal.Body>
          <ModalForm />
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