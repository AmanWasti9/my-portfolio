import React, { useEffect, useRef } from "react";
import "./AboutMeSection.css";
import AmanPic from "../../Images/aman.png";
import { Link } from "react-router-dom";
import "animate.css/animate.css";

export default function AboutMeSection() {
  const aboutRef = useRef(null);

  useEffect(() => {
    const handleAnimation = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add your animation classes or logic here
          aboutRef.current
            .querySelector(".square1")
            .classList.add("animate__animated", "animate__slideInRight");
            aboutRef.current
            .querySelector(".AboutMe-Text")
            .classList.add("animate__animated", "animate__zoomIn");
            aboutRef.current
            .querySelector(".square-image")
            .classList.add("animate__animated", "animate__zoomIn");
        } else {
          // You can handle the case when the element is not in view
        }
      });
    };

    const observer = new IntersectionObserver(handleAnimation, {
      root: null, // Use the viewport as the root
      threshold: 0.5, // Trigger the animation when 50% of the component is in view
    });

    // Start observing the element
    observer.observe(aboutRef.current);

    // Cleanup observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, []); // Empty dependency array ensures this effect runs once on mount

  return (
    <div id="about" className="AboutMe-Main" ref={aboutRef}>
      <div className="row">
        <div className="col-xs-12 col-sm-6 AboutMe-Text">
          <h2>About Me</h2>
          <p>
            As a front-end web developer, I specialize in delivering clean code
            and pixel-perfect designs. My expertise extends to enhancing website
            interactivity through the seamless integration of web animations. I
            prioritize the implementation of responsive designs, ensuring that
            your website remains accessible to users across various devices.
            With a commitment to precision and user experience, I strive to
            create a visually appealing and functionally efficient online
            presence for your audience.
          </p>

          <button style={{ border: "none", backgroundColor: "white" }}>
            <Link to="/aboutmepage" className="Read-More-btn">
              Read More
            </Link>
          </button>
        </div>

        <div className="col-xs-12 col-sm-6 AboutMe-Image">
          <div className="square1"></div>
          <div className="square2">
            <img src={AmanPic} alt="" className="square-image" />
          </div>
        </div>
      </div>
    </div>
  );
}
