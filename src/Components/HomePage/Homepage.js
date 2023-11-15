import React, { useEffect, useRef } from "react";
import AboutMeSection from "../AboutMe/AboutMeSection";
import Homebody from "../Homebody/Homebody";
import Skills from "../Skills/Skills";
import Grid from "@mui/material/Unstable_Grid2";
import Projects from "../Projects/Projects";
import "./Homepage.css";
import "animate.css/animate.css";

export default function Homepage() {
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);

  useEffect(() => {
    const handleAnimation = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate__animated", "animate__zoomIn");
          observer.unobserve(entry.target);
        }
      });
    };

    const skillsObserver = new IntersectionObserver(
      (entries, observer) => handleAnimation(entries, observer),
      { threshold: 0.5 }
    );

    const projectsObserver = new IntersectionObserver(
      (entries, observer) => handleAnimation(entries, observer),
      { threshold: 0.5 }
    );

    skillsObserver.observe(skillsRef.current);
    projectsObserver.observe(projectsRef.current);

    return () => {
      skillsObserver.disconnect();
      projectsObserver.disconnect();
    };
  }, []); // Empty dependency array ensures this effect runs once on mount

  return (
    <div>
      <Homebody />
      <div className="SkillContainer1 typo-light">
        <div className="SkillContainer2" id="skills" ref={skillsRef}>
          <h2 style={{ color: "orange" }}>Skills</h2>
          <br />
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid xs={6}>
              <Skills name="React Js" percentage={75} />
            </Grid>
            <Grid xs={6}>
              <Skills name="HTML5" percentage={90} />
            </Grid>
            <Grid xs={6}>
              <Skills name="JAVA" percentage={70} />
            </Grid>
            <Grid xs={6}>
              <Skills name="JavaScript" percentage={60} />
            </Grid>
            <Grid xs={6}>
              <Skills name="Spring Boot" percentage={60} />
            </Grid>
            <Grid xs={6}>
              <Skills name="DSA" percentage={80} />
            </Grid>
          </Grid>
        </div>
      </div>

<div ref={projectsRef}>
      <div
        id="projects"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10%",
        }}
        
      >
        <h2 className="Heading">Projects</h2>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div style={{ paddingLeft: "10%", paddingRight: "10%" }}>
          <Projects />
        </div>
      </div>
      </div>

      <div style={{ marginTop: "5%" }}>
        <AboutMeSection />
      </div>
    </div>
  );
}
