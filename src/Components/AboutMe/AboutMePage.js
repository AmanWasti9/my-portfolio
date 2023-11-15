import React from "react";
import "./AboutMePage.css";
import gradesheet from "../../Images/gradesheet.png";
import coding from "../../Images/coding.png";
import pro10 from "../../Images/pro10.png";
import "animate.css/animate.css";

export default function AboutMePage() {

  return (
    <div className="AboutMePage-Main">
      <div className="AboutMePage-Text">
            <h2>About Me</h2>
            <p>
              Hello, there! I'm Syed Amanullah Wasti, a passionate and
              innovative computer science enthusiast from Karachi, Pakistan. My
              journey in technology has been defined by a relentless pursuit of
              knowledge and a desire to create meaningful and impactful
              solutions.
            </p>
         

        <div className="row">
        <div className="col-xs-12 col-sm-5">
        <img src={gradesheet} alt="" className="AboutMePageImage animate__animated animate__zoomIn animate__delay-1s" />
          </div>
          <div className="col-xs-12 col-sm-7 animate__animated animate__slideInRight animate__delay-1s">
        <h3>Education</h3>
        <p>
          I'm a DHA Suffa University student now pursuing a bachelor's degree in
          computer science. I've shown time and time again that I'm committed to
          academic success, as evidenced by my impressive 3.34 CGPA. My
          foundation for technical ability was laid earlier when I finished my
          Pre-Engineering studies at Govt. Degree College with an amazing mark
          of A.
        </p>
        </div>
         
        </div>

        <div className="row">
          <div className="col-xs-12 col-sm-7 animate__animated animate__slideInLeft animate__delay-2s">
        <h3>Skills</h3>
        <p>
          I am skilled in a wide range of technologies, including Java,
          Object-Oriented Programming (OOP), Data Structures and Algorithms
          (DSA), and web development software including HTML, CSS, and
          JavaScript. In order to create fluid and aesthetically pleasing user
          interfaces, I bring to the table experience with well-known frameworks
          like React JS as well as fluency with Bootstrap and Material UI. My
          proficiency with MySQL and Spring Boot on the backend enables me to
          create dependable and effective solutions.
        </p>
        </div>
          <div className="col-xs-12 col-sm-5">
            <img src={coding} alt="" className="AboutMePageImage animate__animated animate__zoomIn animate__delay-2s" />
          </div>
        </div>

        <div className="row">
        <div className="col-xs-12 col-sm-5">
        <img src={pro10} alt="" className="AboutMePageImage animate__animated animate__zoomIn animate__delay-3s" />
          </div>
          <div className="col-xs-12 col-sm-7 animate__animated animate__slideInRight animate__delay-3s">
        <h3>Projects</h3>
        <p>
          I've worked on a variety of projects over my career as a developer,
          showcasing both my technical and creative abilities. The building of
          an e-commerce website for sneakers is noteworthy, as it showcases my
          ability to effortlessly combine frontend technologies and provide an
          interesting online purchasing experience. Another one of my
          inventions, TextUtils, is a web application made to make text
          manipulation simple. It demonstrates my emphasis on creating solutions
          that are straightforward to use. I've also created a Book Ecommerce
          Website and a Sample Portfolio, which both demonstrate my dedication
          to fusing practicality with an eye-catching design.
        </p>
        </div>
         
        </div>

      <div className="rest-para animate__animated animate__zoomIn animate__delay-4s">
        <h3>Passion and Approach</h3>
        <p>
          I approach every assignment with a love for problem-solving and an
          acute eye for detail, driven by an unquenchable curiosity. I firmly
          think that technology can effect positive change, and I'm committed to
          helping to make this happen by coming up with creative and useful
          solutions. My objective is to not only write code but also to design
          user-resonant experiences that blend practicality and style.
        </p>
        

        
        <h3>Connect with Me</h3>
        <p>
          I'm up for working with others, taking advantage of new possibilities
          to learn, and having conversations about the exciting world of
          technology. To learn more about my coding path, feel free to explore
          my GitHub repositories and connect with me on LinkedIn. Together,
          let's create something truly amazing!
        </p>
        

        <p>
          Looking forward to the next exciting chapter in the world of
          technology!
        </p>

        <p>
          Syed Amanullah Wasti <br />
          Email: amanwasti5@gmail.com | Phone: +92 3360348013 <br />
          LinkedIn: LinkedIn Profile | GitHub: GitHub Profile
        </p>
      </div>
      </div>
    </div>
  );
}