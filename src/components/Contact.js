import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaLinkedin, FaWhatsapp, FaPaperPlane } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="section-padding bg-dark-alt">
      <Container>
        <div className="section-header text-center">
          <span className="section-subtitle">GET IN TOUCH</span>
          <h2 className="section-title">Let's Work <span className="text-accent">Together</span></h2>
          <p className="card-desc-text max-w-600 mx-auto">
            I'm actively seeking internships, full-time engineering roles, and innovative project collaborations. Feel free to drop a message!
          </p>
        </div>

        <Row className="g-4 align-items-stretch justify-content-center">
          <Col lg={6}>
            <div className="dark-card p-4 p-md-5 h-100 d-flex flex-column justify-content-between">
              <div>
                <h4 className="text-white mb-4">Contact Details</h4>

                <div className="d-flex align-items-center gap-3 mb-4">
                  <div className="contact-icon-box"><FaMapMarkerAlt /></div>
                  <div>
                    <span className="card-desc-text d-block small">Location</span>
                    <strong className="text-white">Ichalkaranji, Maharashtra, India</strong>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-3 mb-4">
                  <div className="contact-icon-box"><FaEnvelope /></div>
                  <div>
                    <span className="card-desc-text d-block small">Email Address</span>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=prathmeshkokare009@gmail.com" target="_blank" rel="noreferrer" className="text-white fw-bold">
                      prathmeshkokare009@gmail.com
                    </a>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-3 mb-4">
                  <div className="contact-icon-box"><FaPhone /></div>
                  <div>
                    <span className="card-desc-text d-block small">Phone Number</span>
                    <strong className="text-white">+91 8999034714</strong>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={5}>
            <div className="dark-card p-4 p-md-5 h-100 d-flex flex-column justify-content-center gap-3">
              <h4 className="text-white mb-3">Quick Connect</h4>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=prathmeshkokare009@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="btn-accent text-center justify-content-center py-3"
              >
                <FaPaperPlane className="me-2" /> Direct Email
              </a>

              <a href="https://wa.me/918999034714" target="_blank" rel="noreferrer" className="btn-whatsapp-custom py-3 text-center">
                <FaWhatsapp className="me-2" /> WhatsApp Message
              </a>

              <a href="https://www.linkedin.com/in/prathmesh-kokare/" target="_blank" rel="noreferrer" className="btn-linkedin-custom py-3 text-center">
                <FaLinkedin className="me-2" /> LinkedIn Profile
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;