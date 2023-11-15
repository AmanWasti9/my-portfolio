// ProjectPage.js
import React from "react";
import "./ProjectPage.css";
import "animate.css/animate.css";

export default function ProjectPage({ HeadingOfProject, PointsForProject, ImageOfProject }) {
  return (
    <div className="Project-Main animate__animated animate__zoomIn">
      <div className="Project-Text">
        <h2>{HeadingOfProject}</h2>
        <p>{PointsForProject}</p>
      </div>
      <div className="Project-Image">
        <img src={ImageOfProject} alt="" style={{ width: "80%" }} />
      </div>
    </div>
  );
}