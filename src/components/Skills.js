import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCode, FaServer, FaDatabase, FaTools } from 'react-icons/fa';

const skillCategories = [
  {
    title: 'Languages',
    icon: <FaCode />,
    skills: ['Java', 'JavaScript', 'Python', 'SQL', 'C']
  },
  {
    title: 'Frameworks & Libraries',
    icon: <FaServer />,
    skills: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'HTML5 & CSS3', 'Bootstrap']
  },
  {
    title: 'Databases',
    icon: <FaDatabase />,
    skills: ['MySQL', 'MongoDB']
  },
  {
    title: 'Tools & Platforms',
    icon: <FaTools />,
    skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'MySQL Workbench']
  }
];

const competencies = [
  'Data Structures & Algorithms',
  'Object-Oriented Programming',
  'RESTful API Design',
  'Full-Stack Web Development',
  'Machine Learning',
  'Agile Teamwork'
];

function Skills() {
  return (
    <section id="skills" className="section-padding">
      <Container>
        <div className="section-header text-center">
          <span className="section-subtitle">MY STACK</span>
          <h2 className="section-title">Technical <span className="text-accent">Skills</span></h2>
        </div>

        <Row className="g-4 mb-5">
          {skillCategories.map((cat, idx) => (
            <Col lg={6} key={idx}>
              <div className="dark-card h-100 p-4">
                <div className="d-flex align-items-center gap-3 mb-4">
                  <div className="category-icon">{cat.icon}</div>
                  <h4 className="text-white mb-0">{cat.title}</h4>
                </div>
                <div className="d-flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="skill-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Col>
          ))}
        </Row>

        <div className="text-center mb-4">
          <h4 className="text-white">Core Competencies</h4>
        </div>
        <Row className="g-3 justify-content-center">
          {competencies.map((comp, idx) => (
            <Col xs={6} md={4} lg={3} key={idx}>
              <div className="competency-card text-center p-3">
                <span className="text-light">{comp}</span>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Skills;