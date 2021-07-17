import Carousel from 'react-bootstrap/Carousel'
// import { useState } from "react";
import * as image from '../../assets/img/imgLoader';
function ProjectCarousel() {

  const myProjects = [
    { title: 'JS Documentation', desc: 'This is documentation project ofJavascript.', img: image.codepenDocumentationPage },
    { title: 'Feedback Form', desc: 'This is Feedback form of freecodecamp site', img: image.codepenForm },
    { title: 'Landing Page', desc: 'This project is one of freecodecamp tests', img: image.codepenHandcrapt },
  ]
  const renderCarouselItem = myProjects.map((project, index) => (
    <Carousel.Item key={index}>
      <img
        className="d-block w-100"
        src={project.img}
        alt={project.title}
      />
      <Carousel.Caption>
        <h3>{project.title}</h3>
        <p>{project.desc}</p>
      </Carousel.Caption>
    </Carousel.Item>
  ))

  return (
    <Carousel>
      {renderCarouselItem}
    </Carousel>
  )
}

export default ProjectCarousel;