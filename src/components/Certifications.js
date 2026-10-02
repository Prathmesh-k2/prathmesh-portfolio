import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCertificate, FaTrophy, FaUserGraduate } from 'react-icons/fa';

const certs = [
  {
    icon: <FaUserGraduate />,
    title: 'Full Stack Web Development',
    issuer: 'Sunbeam Infotech / Industry Certification'
  },
  {
    icon: <FaTrophy />,
    title: 'CodeKshetra Hackathon Winner',
    issuer: 'National Coding Competition'
  },
  {
    icon: <FaCertificate />,
    title: 'Job Ready Employee Skills',
    issuer: 'Wadhwani Skilling Foundation'
  }
];

function Certifications() {
  return (
    <section id="certifications" className="section-padding">
      <Container>
        <div className="section-header text-center">
          <span className="section-subtitle">ACHIEVEMENTS</span>
          <h2 className="section-title">Certifications & <span className="text-accent">Honors</span></h2>
        </div>

        <Row className="g-4 justify-content-center">
          {certs.map((cert, idx) => (
            <Col md={4} key={idx}>
              <div className="dark-card text-center p-4 h-100">
                <div className="cert-icon-box mb-3 mx-auto">
                  {cert.icon}
                </div>
                <h5 className="text-white mb-2">{cert.title}</h5>
                <p className="card-desc-text small mb-0">{cert.issuer}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Certifications;