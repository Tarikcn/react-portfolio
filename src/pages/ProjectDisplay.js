import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name} </h1>
      <img src={project.image} />
      <p>
        <b>skills</b>: {project.skills.join(", ")}
      </p>
      <a href={project.githubLink}>
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </div>
  );
}

export default ProjectDisplay;
