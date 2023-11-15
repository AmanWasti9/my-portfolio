import React from 'react';
import "./Projects.css";
import pro1 from "../../Images/pro1.png";
import pro2 from "../../Images/pro2.png";
import pro3 from "../../Images/pro3.png";
import pro4 from "../../Images/pro4.png";
import pro5 from "../../Images/pro5.png";
import pro6 from "../../Images/pro6.png";
import pro7 from "../../Images/pro7.png";
import pro8 from "../../Images/pro8.png";
import ProjectCard from './ProjectCard';

export default function Projects() {
  const handleHover = (isHovered) => {
    const box = document.querySelector('.box');
    if (isHovered) {
      box.classList.add('paused');
    } else {
      box.classList.remove('paused');
    }
  };

  return (
    <div className="box" onMouseEnter={() => handleHover(true)} onMouseLeave={() => handleHover(false)}>
      <ProjectCard imageUrl={pro1} codeLink="https://github.com/AmanWasti9/SneakersWeb-ReactJs" liveDemoLink="https://amanwasti9.github.io/SneakersWeb-ReactJs/" index={1} />
      <ProjectCard imageUrl={pro2} codeLink="https://github.com/AmanWasti9/TextUtils" liveDemoLink="https://amanwasti9.github.io/TextUtils/" index={2} />
      <ProjectCard imageUrl={pro3} codeLink="https://github.com/AmanWasti9/Portfolio" liveDemoLink="https://amanwasti9.github.io/Portfolio/" index={3} />
      <ProjectCard imageUrl={pro4} codeLink="https://github.com/AmanWasti9/Book-Website" liveDemoLink="https://amanwasti9.github.io/Book-Website/" index={4} />
      <ProjectCard imageUrl={pro5} codeLink="https://github.com/AmanWasti9/SneakersWeb-ReactJs" liveDemoLink="https://amanwasti9.github.io/SneakersWeb-ReactJs/" index={5} />
      <ProjectCard imageUrl={pro6} codeLink="https://github.com/AmanWasti9/TextUtils" liveDemoLink="https://amanwasti9.github.io/TextUtils/" index={6} />
      <ProjectCard imageUrl={pro7} codeLink="https://github.com/AmanWasti9/Portfolio" liveDemoLink="https://amanwasti9.github.io/Portfolio/" index={7} />
      <ProjectCard imageUrl={pro8} codeLink="https://github.com/AmanWasti9/Expense-Tracker-Reactjs" liveDemoLink="https://github.com/AmanWasti9/Expense-Tracker-Reactjs" index={8} />
    </div>
  );
}
