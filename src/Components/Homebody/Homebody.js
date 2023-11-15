import React, { useEffect, useRef } from "react";
import AmanPic from "../../Images/amanpic.jpg";
import LinkedIn from "../../Images/linkedin.png";
import Github from "../../Images/github.png";
import "./Homebody.css";
import "animate.css/animate.css";

export default function Home() {
  const homeRef = useRef(null);

  useEffect(() => {
    const handleAnimation = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const introTextPara = homeRef.current.querySelector('.Intro-Text-Para');

          // Add your animation classes or logic here
          introTextPara.classList.add("animate__animated", "animate__slideInRight", "animate__delay-2s");
          homeRef.current.querySelector('.orangeColor').classList.add("animate__animated", "animate__fadeIn", "animate__delay-1s");
          homeRef.current.querySelector('.homeImage').classList.add("animate__animated", "animate__zoomIn", "animate__delay-1s");
          homeRef.current.querySelector('.Logo1').classList.add("animate__animated", "animate__zoomIn", "animate__delay-1s");
          homeRef.current.querySelector('.Logo2').classList.add("animate__animated", "animate__zoomIn", "animate__delay-1s");

          // Remove the "hidden" class and set opacity to 1
          introTextPara.classList.remove("hidden");
          introTextPara.style.opacity = 1;
        } else {
          // You can handle the case when the element is not in view
        }
      });
    };

    const observer = new IntersectionObserver(handleAnimation, {
      root: null, // Use the viewport as the root
      threshold: 1, // Trigger the animation when 100% of the component is in view
    });

    // Start observing the element
    observer.observe(homeRef.current);

    // Cleanup observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, []); // Empty dependency array ensures this effect runs once on mount

  return (
    <div className="Home-Main" ref={homeRef}>
      <div className="row">
        <div className="col-xs-12 col-sm-6 Intro-Text">
          <h2>Hello, I'm <span className="orangeColor">Syed Amanullah Wasti</span></h2>
          <p className="Intro-Text-Para">
            Welcome to my portfolio! I'm a detail-oriented Computer Science
            student with expertise in Java, OOP, and web development using HTML,
            CSS, and JavaScript. Specializing in React JS and Spring Boot, I've
            tackled diverse projects, from e-commerce websites to innovative web
            applications. Check out my portfolio for a quick overview. Let's
            connect on LinkedIn or explore my GitHub for more. Open to new
            opportunities and collaborations!
          </p>
          <a
            href="https://www.linkedin.com/in/aman-wasti/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LinkedIn} alt="LinkedIn" className="Logo1" />
          </a>

          <a
            href="https://github.com/AmanWasti9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Github}
              alt="Github"
              className="Logo2"
              style={{ marginLeft: "20px" }}
            />
          </a>
        </div>
        <div className="col-xs-12 col-sm-6 Image">
          <img
            src={AmanPic}
            alt="AmanPic"
            className="homeImage"
            style={{ borderRadius: "50%", border: "4px solid black", width: "80%" }}
          />
        </div>
      </div>
    </div>
  );
}
