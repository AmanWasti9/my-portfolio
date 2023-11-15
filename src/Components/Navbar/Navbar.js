// Navbar.js
import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import 'animate.css/animate.css';
import portfolio from "../../Images/portfolio.png"; 

export default function Navbar() {

  const btn = {
    color: "white",
    fontWeight: "bold",
    fontSize: "20px",
    fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
    textTransform: "capitalize",
    "&:hover": {
      color: "#ff8d1e",
      background: "transparent",
    },
  };

  return (
    <nav
      id="Top"
      className="navbar navbar-expand-lg typo-light"
      style={{ background: "#252525", padding: "1%  5%" }}
    >
      <div className="container-fluid">
      <a className="navbar-brand stroked-text animate__animated animate__rotateIn">SYED AMANULLAH WASTI</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ background: "white", padding: "4px 5px" }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Button component={Link} to="/" sx={btn}   className="animate__animated animate__fadeIn animate__delay-1s">
                Home
              </Button>
            </li>
            <li className="nav-item">
              <Button
                component={Link}
                to="/aboutme"
                sx={btn}
                className="animate__animated animate__fadeIn animate__delay-1s"
              >
                About
              </Button>
            </li>
            <li className="nav-item">
              <Button
                component={Link}
                to="/project"
                sx={btn}
                className="animate__animated animate__fadeIn animate__delay-1s"
              >
                Projects
              </Button>
            </li>
            <li className="nav-item">
              <Button className="nav-link animate__animated animate__fadeIn animate__delay-1s" href="#footer" sx={btn}>
                Contact
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
