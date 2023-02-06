import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "../styles/About.css";
import mypic from "../assets/mypic.png";

const AboutMe = () => {
  return (
    <div className="aboutMe">
      <h1 className="aboutMeTitle">About Me</h1>
      <div>
        <img src={mypic} className="profilePicture" />
        <p className="aboutMeDescription">
          Hi there! My name is Tarik and I'm a passionate Front-end Developer
          with a deep commitment to delivering high-quality, user-friendly web
          experiences. With several years of experience in the IT industry, I've
          honed my skills in creating responsive, dynamic, and visually
          appealing websites and applications. My expertise in HTML, CSS, and
          JavaScript, combined with my attention to detail, allows me to create
          products that are not only technically sound but also aesthetically
          pleasing. My portfolio showcases a variety of projects that
          demonstrate my versatility and creative problem-solving abilities.
          From small, personal projects to large-scale, enterprise-level
          solutions, I've consistently exceeded expectations and delivered
          results that meet and exceed my clients' goals. If you're looking for
          a talented Front-end Developer to bring your ideas to life, I'd love
          to hear from you. Please feel free to explore my portfolio and don't
          hesitate to reach out to me for any questions or opportunities. Let's
          work together to create something amazing!
        </p>
        <p className="skills">
          My skills include HTML, CSS, JavaScript, NodeJs and React. I am always
          looking for new opportunities to expand my knowledge and skillset.
        </p>
        <div className="iconContainer">
          <a href="#">
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faGithub} className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
