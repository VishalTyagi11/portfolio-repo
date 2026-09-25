import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Main.scss";

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="content">
          <div className="social_icons">
            <a
              href="https://github.com/VishalTyagi11/"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/vishal-tyagi-9740ab188/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
          <h1>Vishal Tyagi</h1>
          <p>Full Stack Machine Learning Enginner and Data Scientist</p>

          <div className="mobile_social_icons">
            <a
              href="https://github.com/VishalTyagi11/"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/vishal-tyagi-9740ab188/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
