import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/nav-icon4.svg';
import navIcon5 from '../assets/img/nav-icon5.svg';
import navIcon6 from '../assets/img/nav-icon6.svg';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
              <Nav.Link href="../assets/pdf/VictorCuerdo-Resume-May2024.pdf" download="VictorCuerdo-Resume-May2024.pdf" className="navbar-link">My Resume</Nav.Link>
            </Nav>
            <span className="navbar-text">
            <div className="social-icon">
  <a href="https://www.linkedin.com/in/vcuerdo/" target="_blank" rel="noopener noreferrer" title="LinkedIn"><img src={navIcon1} alt="LinkedIn" /></a>
  <a href="https://github.com/VictorCuerdo" target="_blank" rel="noopener noreferrer" title="GitHub"><img src={navIcon5} alt="GitHub" /></a>
  <a href="https://www.hackerrank.com/profile/victorcuerdop" target="_blank" rel="noopener noreferrer" title="HackerRank"><img src={navIcon4} alt="HackerRank" /></a>
  <a href="https://www.instagram.com/vcuerdo" target="_blank" rel="noopener noreferrer" title="Instagram"><img src={navIcon3} alt="Instagram" /></a>
  <a href="https://www.facebook.com/vcuerdo9/" target="_blank" rel="noopener noreferrer" title="Facebook"><img src={navIcon2} alt="Facebook" /></a>
  <a href="https://api.whatsapp.com/send?phone=573186362460" target="_blank" rel="noopener noreferrer" title="WhatsApp"><img src={navIcon6} alt="WhatsApp" /></a>
</div>


              <HashLink to='#connect'>
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}