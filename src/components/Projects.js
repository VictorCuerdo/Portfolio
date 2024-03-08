import React, { useState } from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
export const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeProject, setActiveProject] = useState({});

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
      images: [projImg1, projImg2, projImg3], // Example, add real project images
      technologies: ['React', 'Node.js', 'MongoDB'] // Example, add real technologies
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
      images: [projImg1, projImg2, projImg3], // Example, add real project images
      technologies: ['React', 'Node.js', 'MongoDB'] // Example, add real technologies
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
      images: [projImg1, projImg2, projImg3], // Example, add real project images
      technologies: ['React', 'Node.js', 'MongoDB'] // Example, add real technologies
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
      images: [projImg1, projImg2, projImg3], // Example, add real project images
      technologies: ['React', 'Node.js', 'MongoDB'] // Example, add real technologies
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
      images: [projImg1, projImg2, projImg3], // Example, add real project images
      technologies: ['React', 'Node.js', 'MongoDB'] // Example, add real technologies
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
      images: [projImg1, projImg2, projImg3], // Example, add real project images
      technologies: ['React', 'Node.js', 'MongoDB'] // Example, add real technologies
    },
  ];


  const handleProjectClick = (project) => {
    setActiveProject(project);
    setShowModal(true);
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Lorem Ipsum...</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Mobile Apps</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Web Development</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">UI/UX Design</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fourth">Data & AI</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fifth">Game Development</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="sixth">Tech Support</Nav.Link>
                    </Nav.Item>
                    
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                onClick={handleProjectClick}
                                {...project}
                              />
                            );
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                onClick={handleProjectClick}
                                {...project}
                              />
                            );
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                onClick={handleProjectClick}
                                {...project}
                              />
                            );
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fourth">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                onClick={handleProjectClick}
                                {...project}
                              />
                            );
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fifth">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                onClick={handleProjectClick}
                                {...project}
                              />
                            );
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="sixth">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                onClick={handleProjectClick}
                                {...project}
                              />
                            );
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background design"></img>
      <ProjectModal
        show={showModal}
        onHide={() => setShowModal(false)}
        project={activeProject}
      />
    </section>
  );
};