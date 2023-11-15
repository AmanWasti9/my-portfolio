import React, { useEffect, useRef } from "react";
import "./Skills.css";

export default function Skills({ name, percentage }) {
  const skillsRef = useRef(null);

  useEffect(() => {
    const handleAnimation = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add your animation classes or logic here
          skillsRef.current.querySelector('.name').classList.add("animate__animated", "animate__slideInLeft");
          skillsRef.current.querySelector('.progress-bar-main,.progress-bar-base').classList.add("animate__animated", "animate__slideInRight");
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
    observer.observe(skillsRef.current);

    // Cleanup observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, []); // Empty dependency array ensures this effect runs once on mount

  return (
    <div ref={skillsRef}>
      <label className="name" style={{ marginLeft: '5px', fontSize: "1.2rem", marginTop: "10px", marginBottom: "5px" }}>{name}</label>
      <div className="progress-bar-base">
        <div className="progress-bar-main" style={{ width: `${percentage}%` }}>
          <span style={{ float: "right", marginRight: "15px", color: "white", fontWeight: "bold", fontSize: "12px" }}>
            {percentage}%
          </span>
        </div>
      </div>
    </div>
  );
}
