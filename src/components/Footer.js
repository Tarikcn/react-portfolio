import React from "react";
import "../styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        {/* <a href="#">
          <FontAwesomeIcon icon={faLinkedIn} />
        </a> */}
        <a href="#">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
      <p>&copy 2023 TK</p>
    </div>
  );
}

export default Footer;
