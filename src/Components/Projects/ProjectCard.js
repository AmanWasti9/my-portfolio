// ProjectCard.js

import React, { useState } from 'react';
import "./Projects.css";

export default function ProjectCard({ imageUrl, codeLink, liveDemoLink, index }) {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <span
      className={`project-card ${hovered ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ transform: `rotateY(${index * 45}deg) translateZ(400px)` }}
    >
      <a href={liveDemoLink} target="_blank" rel="noopener noreferrer">
        <img src={imageUrl} alt="" />
      </a>
      {hovered && (
        <div className="overlay">
          <a href={codeLink} target="_blank" rel="noopener noreferrer">
            View Code
          </a>
          <a href={liveDemoLink} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
        </div>
      )}
    </span>
  );
}
