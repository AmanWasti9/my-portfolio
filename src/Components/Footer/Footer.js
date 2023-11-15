import React from "react";
import Instagram from "../../Images/instagram.png";
import LinkedIn from "../../Images/linkedin.png";
import Facebook from "../../Images/facebook.png";
import "./Footer.css";

export default function Footer() {
  const smoothScroll = (hash) => {
    const element = document.getElementById(hash.substring(1));
    if (element) {
      const offsetTop = element.offsetTop;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer id="footer" className="footer-1">
      <div className="main-footer widgets-dark typo-light">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget subscribe no-box">
                <h5 className="widget-title">
                  Syed Amanullah Wasti<span></span>
                </h5>
                <p>
                  Explore my innovative portfolio, where each project tells a
                  unique story.
                </p>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget no-box">
                <h5 className="widget-title">
                  Explore<span></span>
                </h5>
                <ul className="thumbnail-widget">
                  <li>
                    <div className="thumb-content">
                      <a
                        href="#about"
                        onClick={() => smoothScroll("#about")}
                        style={{ textDecoration: "none" }}
                      >
                        About Me
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">
                      <a
                        href="#projects"
                        onClick={() => smoothScroll("#projects")}
                        style={{ textDecoration: "none" }}
                      >
                        Projects
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">
                      <a
                        href="#skills"
                        onClick={() => smoothScroll("#skills")}
                        style={{ textDecoration: "none" }}
                      >
                        Skills
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">
                      <a
                        href="#Top"
                        onClick={() => smoothScroll("#Top")}
                        style={{ textDecoration: "none" }}
                      >
                        Top
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget no-box">
                <h5 className="widget-title">
                  Explore GitHub<span></span>
                </h5>
                <p>Access my repositories and dive into the world of coding.</p>
                <a
                  className="btn"
                  href="https://github.com/AmanWasti9?tab=repositories"
                  target="_blank"
                >
                  View Repositories
                </a>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget no-box">
                <h5 className="widget-title">
                  Contact Us<span></span>
                </h5>

                <p>
                  <a
                    href="#."
                    style={{ textDecoration: "none", color: "#ff8d1e" }}
                  >
                    amanwasti5@gmail.com
                  </a>
                </p>
                <ul className="social-footer2">
                  <li className="">
                    <a
                      title="linkedIn"
                      target="_blank"
                      href="https://bit.ly/3m9avif"
                    >
                      <img
                        alt="LinkedIn"
                        width="30"
                        height="30"
                        src={LinkedIn}
                      />
                    </a>
                  </li>
                  <li className="">
                    <a
                      title="instagram"
                      target="_blank"
                      href="https://bit.ly/3m9avif"
                    >
                      <img
                        alt="Instagram"
                        width="30"
                        height="30"
                        src={Instagram}
                      />
                    </a>
                  </li>
                  <li className="">
                    <a
                      title="facebook"
                      target="_blank"
                      href="https://bit.ly/3m9avif"
                    >
                      <img
                        alt="Facebook"
                        width="30"
                        height="30"
                        src={Facebook}
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <p>Copyright Company Name © 2023. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
