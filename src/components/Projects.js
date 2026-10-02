import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaExternalLinkAlt, FaLaptopCode } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: 'Zerodha Trading Clone',
    description: 'A full-stack stock trading web application featuring real-time market watchlist, order management, responsive charts, and portfolio dashboard.',
    tech: ['React JS', 'Node.js', 'Express.js', 'MongoDB', 'Bootstrap', 'REST API'],
    github: 'https://github.com/prathmeshkokare',
    live: 'https://zerodha-clone-frontend-8wvz-phi.vercel.app/',
    image: './Assets/zerodha.png'
  },
  {
    id: 2,
    title: 'Full-Stack EdTech Platform',
    description: 'A comprehensive online learning management system with secure user authentication, role-based access control, course catalog, and enrollment features.',
    tech: ['React JS', 'Node.js', 'Express.js', 'MySQL', 'REST API', 'JavaScript'],
    github: 'https://github.com/prathmeshkokare',
    live: '#',
    image: '/projects/edtech.png'
  },
  {
    id: 3,
    title: 'Financial Behavior Analysis ML',
    description: 'A machine learning framework to analyze personal financial behavior and predict spending habits using Random Forest algorithm and data visualization.',
    tech: ['Python', 'Scikit-learn', 'Random Forest', 'Streamlit', 'Pandas'],
    github: 'https://github.com/prathmeshkokare',
    live: '#',
    image: '/projects/ml-finance.png'
  },
  {
    id: 4,
    title: 'Weather App',
    description: 'A simple weather application that displays the current weather conditions for a given city.',
    tech: ['React JS', 'OpenWeather API', 'CSS', 'JavaScript'],
    github: 'https://github.com/Prathmesh-k2',
    live: '#',
    image: '/projects/weather-app.png'
  }
];

function Projects() {
  return (
    <section id="projects" className="section-padding bg-dark-alt">
      <Container>
        <div className="section-header text-center">
          <span className="section-subtitle">PORTFOLIO</span>
          <h2 className="section-title mb-3">Featured <span className="text-accent">Projects</span></h2>
          <p className="card-desc-text max-w-600 mx-auto">
            A showcase of the projects I have worked on, highlighting my skills and experience in various technologies
          </p>
        </div>

        <Row className="g-4 justify-content-center">
          {projects.map((project) => (
            <Col lg={4} md={6} key={project.id}>
              <div className="project-card-grid">
                <div className="project-img-box">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.style.display = 'none';
                        if (e.target.nextSibling) {
                          e.target.nextSibling.style.display = 'flex';
                        }
                      }}
                    />
                  ) : null}
                  <div className="project-placeholder-img" style={{ display: project.image ? 'none' : 'flex' }}>
                    <FaLaptopCode size={40} className="text-accent" />
                  </div>
                </div>

                <div className="project-card-content">
                  <div>
                    <h4 className="project-card-title">{project.title}</h4>
                    <p className="project-card-desc">{project.description}</p>

                    <div className="project-tech-badges">
                      {project.tech.map((t, idx) => (
                        <span key={idx} className="project-tech-pill">{t}</span>
                      ))}
                    </div>
                  </div>

                  <div className="project-card-actions">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-project-code"
                    >
                      <FaGithub /> GitHub
                    </a>
                    {project.live && project.live !== '#' && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-project-demo"
                      >
                        <FaExternalLinkAlt /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Projects;