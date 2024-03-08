// frontend/src/components/ProjectModal.js
import React from 'react';
import { Modal, Carousel } from 'react-bootstrap';

const ProjectModal = ({ show, onHide, project = {} }) => {
  // Destructure with default values to handle missing data gracefully
  const { title, images = [], technologies = [] } = project;

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton className="project-modal-header">
        <Modal.Title className="project-modal-title">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="project-modal-content">
        <Carousel>
          {images.map((imgUrl, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100 project-carousel-img"
                src={imgUrl}
                alt={`Slide ${index + 1}`}
              />
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="technologies-used mt-4">
          <h5>Technologies Used:</h5>
          <ul className="list-unstyled">
            {technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ProjectModal;
