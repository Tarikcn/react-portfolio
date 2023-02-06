import React from "react";
import { Link } from "react-router-dom";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";

import "../styles/Projects.css";

function Projects() {
  return (
    <div className="projects">
      <h1>My Personal Projects</h1>
      <div className="projectList">
        {ProjectList.map((project, index) => {
          return (
            <Link to={`/project/${index}`} key={index}>
              <ProjectItem name={project.name} image={project.image} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
