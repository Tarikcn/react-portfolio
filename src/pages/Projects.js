import React from "react";
import ProjectItem from "../components/ProjectItem";
import Proj1 from "../assets/project1.JPG";
import Proj2 from "../assets/project2.png";
import Proj3 from "../assets/project3.JPG";
import Proj4 from "../assets/project4.png";

import "../styles/Projects.css";
function Projects() {
  return (
    <div className="projects">
      <h1>My Personal Projects</h1>
      <div className="projectList">
        <ProjectItem name="Advanced Weather App" image={Proj1} />
        <ProjectItem name="Todo List App" image={Proj2} />
        <ProjectItem name="Security Company Website" image={Proj3} />
        <ProjectItem name="Team Profile generator" image={Proj4} />
      </div>
    </div>
  );
}

export default Projects;
