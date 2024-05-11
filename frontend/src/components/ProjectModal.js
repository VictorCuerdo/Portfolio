import React from 'react';
import { Modal } from 'react-bootstrap';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ProjectModal = ({ show, onHide, project = {} }) => {
  const { title, images = [] } = project;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    customPaging: i => (
      <button
        style={{
          width: '20px',
          height: '20px',
          color: 'transparent',
          border: '2px solid white',
          borderRadius: '50%',
          display: 'inline-block',
          margin: '0 5px',
          opacity: 0.75,
        }}
      ></button>
    ),
    dotsClass: 'slick-dots custom-dots',
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton className="project-modal-header">
        <Modal.Title className="project-modal-title">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="project-modal-content" style={{ backgroundColor: '#252525' }}>
        <Slider {...settings}>
          {images.map((item, index) => (
            <div key={index} style={{ textAlign: 'center', padding: '10px' }}>
              {item.type === 'image' ? (
                <img
                  style={{
                    maxHeight: '70vh',
                    maxWidth: '100%',
                    objectFit: 'contain',
                    margin: 'auto',
                  }}
                  src={item.url}
                  alt={`Slide ${index}`}
                />
              ) : (
                <video
                  style={{
                    maxHeight: '70vh',
                    maxWidth: '100%',
                    objectFit: 'contain',
                    margin: 'auto',
                  }}
                  src={item.url}
                  alt={`Slide ${index}`}
                  controls
                  autoPlay
                  loop
                ></video>
              )}
            </div>
          ))}
        </Slider>
      </Modal.Body>
    </Modal>
  );
};

export default ProjectModal;
