// ProjectPage.js
import React from "react";
import "./ProjectPage.css";
import "animate.css/animate.css";
import { Button } from "@mui/material";

export default function ProjectPage({ HeadingOfProject, PointsForProject, ImageOfProject, liveDemoLink, codeLink }) {
  return (
    <div className="Project-Main animate__animated animate__zoomIn">
      <div className="Project-Text">
        <h2>{HeadingOfProject}</h2>
        <p>{PointsForProject}</p>
        <Button href={codeLink} className="btn1">View Code</Button>
        <Button href={liveDemoLink} className="btn2">Live Demo</Button>
      </div>
      <div className="Project-Image">
        <img src={ImageOfProject} alt="" style={{ width: "80%" }} />
      </div>
    </div>
  );
}