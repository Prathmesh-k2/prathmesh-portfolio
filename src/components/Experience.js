import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaBriefcase, FaCalendarAlt, FaCheckCircle } from 'react-icons/fa';

function Experience() {
  return (
    <section id="experience" className="section-padding bg-dark-alt">
      <Container>
        <div className="section-header text-center">
          <span className="section-subtitle">CAREER JOURNEY</span>
          <h2 className="section-title">Work <span className="text-accent">Experience</span></h2>
        </div>

        <Row className="justify-content-center">
          <Col lg={9}>
            <div className="dark-card p-4 p-md-5">
              <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 gap-3">
                <div className="d-flex align-items-center gap-3">
                  <div className="timeline-icon">
                    <FaBriefcase />
                  </div>
                  <div>
                    <h3 className="h4 text-white mb-1">MERN Stack Intern</h3>
                    <div className="text-accent">Sunbeam Infotech, Hinjewadi</div>
                  </div>
                </div>
                <span className="badge-glass d-inline-flex align-items-center gap-2">
                  <FaCalendarAlt className="text-accent" /> Dec 2025 – Jan 2026
                </span>
              </div>

              <ul className="custom-bullet-list">
                <li>
                  <FaCheckCircle className="bullet-icon" />
                  <span>Developed responsive web applications using <strong>React.js, Node.js, Express.js, and MongoDB</strong>.</span>
                </li>
                <li>
                  <FaCheckCircle className="bullet-icon" />
                  <span>Built RESTful APIs and seamlessly integrated frontend interfaces with backend microservices.</span>
                </li>
                <li>
                  <FaCheckCircle className="bullet-icon" />
                  <span>Executed rigorous debugging, testing, and API validation using <strong>Postman</strong>.</span>
                </li>
                <li>
                  <FaCheckCircle className="bullet-icon" />
                  <span>Collaborated efficiently with developers using <strong>Git & GitHub</strong> for version control.</span>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Experience;