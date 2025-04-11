import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import styleon from "../../Assets/Projects/styleon.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={styleon} // Replace with the image path for Styleon
              isBlog={false}
              title="Styleon"
              description="Full-stack e-commerce platform built using the MERN stack. Integrated PayPal payment gateway and implemented JWT-based authentication."
              ghLink="https://github.com/yourusername/Styleon" // Replace with the actual GitHub link
              demoLink="https://yourwebsite.com/styleon" // Replace with the actual demo link
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
