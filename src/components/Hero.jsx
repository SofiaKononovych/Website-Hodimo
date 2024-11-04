import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/style.css";
import iphoneMockup from '../images/Iphone1.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"; 
import gradient from '../images/hero-section-gradient.png';

const Hero = () => {
  return (
    <div className="hero-section" style={{ backgroundImage: `url(${gradient})` }}>
      <Container fluid>
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <div className="content">
              <h1 className="hero-title">Super Mega<br /> Krutyi i Klastnyi</h1>
              <h2 className="hero-subtitle">CALL TO ACTION?</h2>
              <p className="hero-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="email-form">
                <FontAwesomeIcon icon={faEnvelope} className="mail-icon" />
                <div className="email-address">your email address</div>
                <div className="get-access-button">
                  <div className="get-early-access">get early access</div>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} className="d-flex justify-content-center">
            <img src={iphoneMockup} alt="iPhone Mockup" className="phone-mockup" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
