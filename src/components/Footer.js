import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/nav-icon4.svg';
import navIcon5 from '../assets/img/nav-icon5.svg';
import navIcon6 from '../assets/img/nav-icon6.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/vcuerdo/" target="_blank" rel="noopener noreferrer" title="LinkedIn"><img src={navIcon1} alt="LinkedIn" /></a>
            <a href="https://github.com/VictorCuerdo" target="_blank" rel="noopener noreferrer" title="GitHub"><img src={navIcon5} alt="GitHub" /></a>
            <a href="https://www.hackerrank.com/profile/victorcuerdop" target="_blank" rel="noopener noreferrer" title="HackerRank"><img src={navIcon4} alt="HackerRank" /></a>
            <a href="https://www.instagram.com/vcuerdo" target="_blank" rel="noopener noreferrer" title="Instagram"><img src={navIcon3} alt="Instagram" /></a>
            <a href="https://www.facebook.com/vcuerdo9/" target="_blank" rel="noopener noreferrer" title="Facebook"><img src={navIcon2} alt="Facebook" /></a>
            <a href="https://api.whatsapp.com/send?phone=573186362460" target="_blank" rel="noopener noreferrer" title="WhatsApp"><img src={navIcon6} alt="WhatsApp" /></a>
            </div>
            <p>This portfolio was built using ReactJS & NodeJS in Visual Studio Code.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}