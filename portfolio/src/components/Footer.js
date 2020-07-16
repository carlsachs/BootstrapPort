import React from "react";

//import css and bootstrap components
import "./Footer.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//import other local components
import ContactModal from "./ContactModal";

const Footer = () => {

    return (
        <Container fluid>
            <Row className="footer-wrap">
                <Col className="left">
                    
                </Col>
                <Col className="middle">
                    <Row className="footerRow">
                        <ContactModal />
                    </Row>
                </Col>
                <Col className="right">
                    
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;