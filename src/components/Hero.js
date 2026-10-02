import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaDownload, FaPaperPlane, FaLinkedin, FaGithub, FaCode } from 'react-icons/fa';
import ReactTypingEffect from './ReactTypingEffect';

function Hero() {
  return (
    <section id="home" className="hero-section">
      <Container className="position-relative" style={{ zIndex: 2 }}>
        <Row className="align-items-center min-vh-100 py-5">
          <Col lg={7} className="hero-content text-lg-start text-center mb-5 mb-lg-0">
            <div className="role-tag mb-3">
              <span className="accent-dot"></span>
              Open to Opportunities
            </div>

            <h1 className="hero-heading">
              Hi, I'm <span className="text-accent">Prathmesh</span>
              <br /> Kokare
            </h1>

            {/* Skills with Typing Effect */}
            <h3 className="hero-typing-subtitle mb-4 text-accent">
              <span className="text-white">I am a </span>
              <ReactTypingEffect
                text={[
                  'Fullstack Developer',
                  'Problem solver',
                  'Tech Enthusiast',
                  'Coder',
                ]}
                speed={100}
                eraseSpeed={50}
                typingDelay={500}
                eraseDelay={2000}
                cursorRenderer={(cursor) => (
                  <span className="text-accent">{cursor}</span>
                )}
              />
            </h3>

            <p className="hero-description">
              Building modern, scalable, and user-focused web applications with MERN Stack, Java, and Machine Learning.
            </p>

            <div className="d-flex justify-content-center justify-content-lg-start gap-3 flex-wrap mb-4">
              <a href="https://drive.google.com/file/d/1MgHCb_h2ziWqLqNsSl_HJ2yagd-fKczZ/view?usp=sharing" target="_blank" rel="noreferrer" className="btn-accent">
                <FaDownload className="me-2" /> Download CV
              </a>
              <a href="#contact" className="btn-outline-custom">
                <FaPaperPlane className="me-2" /> Let's Connect
              </a>
            </div>

            <div className="social-links d-flex justify-content-center justify-content-lg-start gap-3">
              <a href="https://www.linkedin.com/in/prathmesh-kokare/" target="_blank" rel="noreferrer" className="social-badge" title="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://github.com/Prathmesh-k2" target="_blank" rel="noreferrer" className="social-badge" title="GitHub">
                <FaGithub />
              </a>
              <a href="https://leetcode.com/u/Prathmesh-27/" target="_blank" rel="noreferrer" className="social-badge" title="LeetCode">
                <FaCode />
              </a>
            </div>
          </Col>

          <Col lg={5} className="text-center position-relative">
            <div className="hero-image-wrapper">
              <div className="hero-glow"></div>
              <img
                // src="/profile.jpeg"
                src="/profile2.png"
                alt="Prathmesh Kokare"
                className="hero-profile-img img-fluid"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;