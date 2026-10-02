import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const educationList = [
  {
    degree: 'B.Tech in Computer Science Engineering (AI & ML)',
    institution: "DKTE Society's Textile and Engineering Institute",
    location: 'Ichalkaranji, Maharashtra',
    duration: '2023 – 2027',
    cgpa: '7.22',
    status: 'Pursuing'
  }
];

function Education() {
  return (
    <section id="education" className="section-padding">
      <Container>
        <div className="section-header text-center">
          <span className="section-subtitle">ACADEMIC BACKGROUND</span>
          <h2 className="section-title">My <span className="text-accent">Education</span></h2>
        </div>

        <Row className="justify-content-center">
          {educationList.map((edu, idx) => (
            <Col lg={9} key={idx}>
              <div className="dark-card border-accent-glow p-4 p-md-5">
                <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3 mb-4">
                  <div className="d-flex align-items-center gap-3">
                    <div className="timeline-icon">
                      <FaGraduationCap />
                    </div>
                    <div>
                      <h3 className="h4 text-white mb-1">{edu.degree}</h3>
                      <div className="text-accent font-weight-500">{edu.institution}</div>
                    </div>
                  </div>
                  <div className="badge-glass d-inline-flex align-items-center gap-2">
                    <FaCalendarAlt className="text-accent" /> {edu.duration}
                  </div>
                </div>

                <div className="card-desc-text mb-3 d-flex align-items-center gap-2">
                  <FaMapMarkerAlt /> {edu.location}
                </div>

                <p className="card-desc-text mb-0">
                  CGPA: {edu.cgpa}
                </p>
                <p className="card-desc-text mb-0">
                  Status: {edu.status}
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Education;
