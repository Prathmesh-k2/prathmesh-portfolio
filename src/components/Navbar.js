import React, { useState, useEffect } from 'react';
import { Container, Nav, Navbar as BsNavbar } from 'react-bootstrap';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <BsNavbar expand="lg" fixed="top" className={`custom-navbar ${scrolled ? 'scrolled' : ''}`}>
      <Container>
        <BsNavbar.Brand href="#home" className="navbar-brand-custom">
          <span className="text-accent font-weight-bold">P</span>rathmesh.
        </BsNavbar.Brand>
        <BsNavbar.Toggle aria-controls="basic-navbar-nav" className="navbar-dark-toggler" />
        <BsNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center gap-lg-3">
            <Nav.Link href="#home" className="nav-item-custom">Home</Nav.Link>
            <Nav.Link href="#about" className="nav-item-custom">About</Nav.Link>
            <Nav.Link href="#education" className="nav-item-custom">Education</Nav.Link>
            <Nav.Link href="#experience" className="nav-item-custom">Experience</Nav.Link>
            <Nav.Link href="#skills" className="nav-item-custom">Skills</Nav.Link>
            <Nav.Link href="#projects" className="nav-item-custom">Projects</Nav.Link>
            <Nav.Link href="#certifications" className="nav-item-custom">Certifications</Nav.Link>
            <Nav.Link href="#contact" className="btn-nav-accent">Contact</Nav.Link>
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
}

export default Navbar;