import React from "react";
import "../styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="mailto:khamliche@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
      <p>&copy; 2023 Tarik Khamliche</p>
    </div>
  );
}

export default Footer;
