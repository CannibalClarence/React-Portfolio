import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/utw.PNG";
import mylogo from "../assets/img/my-logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/Github-icon.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/spotify.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
            <img src={mylogo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/clarence-phillips-b929a6232/" target="_blank" rel="noreferrer"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/CannibalClarence" target="_blank" rel="noreferrer"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/theo_utw/" target="_blank" rel="noreferrer"><img src={navIcon3} alt="Icon" /></a>
              <a href="https://open.spotify.com/artist/50CnboQqCSunGTdkQNQBxi?si=JB2KtcD9SVyTHEbaxAQTeg" target="_blank" rel="noreferrer"><img src={navIcon4} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}