import React from "react";

//import css and bootstrap components
import "./Footer.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import DownloadLink from "react-download-link";

//import other local components
import ContactModal from "./ContactModal";

const Footer = () => {

    return (
        <Container id="wrap" fluid>
            <Row className="footer-wrap">
                <Col className="left">
                    <Row className="footerRow">
                        <ContactModal />
                    </Row>
                </Col>
                <Col className="right">
                    <Row style={{justifyContent: "center"}}>
                        <a id="twitter-footer" href="https://www.twitter.com/CarltonSachs" style={{textDecoration: "none", color: "white", fontSize: "1.2rem" }}>Twitter</a>
                    </Row>
                    <Row style={{justifyContent: "center"}}>
                        <a id="gh-footer" href="https://github.com/carlsachs?tab=repositories" style={{textDecoration: "none", color: "white", fontSize: "1.2rem" }}>GitHub</a>
                    </Row>
                    <Row style={{justifyContent: "center"}}>
                        <a id="gmail-footer" href="https://mail.google.com/mail/?view=cm&fs=1&to=sachscarl@gmail.com" style={{textDecoration: "none", color: "white", fontSize: "1.2rem" }}>Gmail</a>
                    </Row>
                    <Row style={{justifyContent: "center"}}>
                        <h3 style={{textDecoration: "none", color: "white", fontSize: "1.2rem" }}>Phone: 313-330-7308 (Call or Text)</h3>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;