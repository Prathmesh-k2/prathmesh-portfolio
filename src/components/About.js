import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaUserGraduate, FaCode, FaLaptopCode, FaRocket } from 'react-icons/fa';

function About() {
  return (
    <section id="about" className="section-padding bg-dark-alt">
      <Container>
        <div className="section-header text-center">
          <span className="section-subtitle">BIOGRAPHY</span>
          <h2 className="section-title">About <span className="text-accent">Me</span></h2>
        </div>

       <Row className="justify-content-center align-items-center g-4">
  <Col lg={10}>
    <div className="dark-card p-4 p-md-5">

      <p className="lead-text mb-4 text-center text-md-start">
        Final-year <strong>B.Tech Computer Science Engineering (AI & ML)</strong>{" "}
        student with hands-on experience in <strong>Full-Stack Development,
        Java, JavaScript, Python, SQL</strong>, and <strong>Data Structures &
        Algorithms</strong>. Passionate about building scalable web applications
        and solving real-world problems through technology.
      </p>
              
              <Row className="g-4 mt-2">
                <Col md={6}>
                  <div className="about-feature-box">
                    <div className="feature-icon"><FaLaptopCode /></div>
                    <div>
                      <h5 className="text-white">Full-Stack Development</h5>
                      <p className="card-desc-text mb-0">Building robust frontend & backend apps using React, Node.js, Express & MongoDB.</p>
                    </div>
                  </div>
                </Col>

                <Col md={6}>
                  <div className="about-feature-box">
                    <div className="feature-icon"><FaUserGraduate /></div>
                    <div>
                      <h5 className="text-white">AI & Machine Learning</h5>
                      <p className="card-desc-text mb-0">Experience in predictive modeling, feature engineering & data visualization using Python.</p>
                    </div>
                  </div>
                </Col>

                <Col md={6}>
                  <div className="about-feature-box">
                    <div className="feature-icon"><FaCode /></div>
                    <div>
                      <h5 className="text-white">Clean Code & Architecture</h5>
                      <p className="card-desc-text mb-0">Focus on writing scalable, maintainable, and efficient modular code.</p>
                    </div>
                  </div>
                </Col>

                <Col md={6}>
                  <div className="about-feature-box">
                    <div className="feature-icon"><FaRocket /></div>
                    <div>
                      <h5 className="text-white">Problem Solving</h5>
                      <p className="card-desc-text mb-0">Active problem solver with strong DSA fundamentals and API validation expertise.</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;